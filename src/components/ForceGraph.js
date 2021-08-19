import * as React from "react";
import ForceGraph2D from "react-force-graph-2d";
import { forceCollide } from "d3-force-3d";
import { staticGraphData } from "../data";

export const syncLoadAllImages = (imageQueue, callback) => {
  let numAll = imageQueue.length;
  let numProcessed = 0;
  let allImages = new Map();

  if (numAll === 0) {
    callback(allImages);
    return;
  }

  imageQueue.forEach(e => {
    const image = new Image();
    const id = e.id;

    // Handle the image loading and error with the same callback.
    image.addEventListener("load", () => {
      numProcessed++;
      allImages.set(id, image);
      if (numAll === numProcessed) {
        if (callback) {
          callback(allImages);
          return;
        }
      }
    });
    image.src = e.image;
  });
};

const paintNodes = (imageMap, node, ctx, globalScale) => {
  if ((!node.x && isNaN(node.x)) || (!node.y && isNaN(node.y))) {
    return;
  }
  const image = imageMap.get(node.id);
  if (image) {
    ctx.drawImage(
      image,
      node.x - IMAGE_SIZE,
      node.y - IMAGE_SIZE,
      IMAGE_SIZE,
      IMAGE_SIZE
    );
  }
};

const IMAGE_SIZE = 40;
//The size of a node, determines arrow positions
const NODE_RELSIZE = IMAGE_SIZE;
//The desired zoom level of the graph
const ZOOM = 1.7;
//The distance between nodes
const FORCE_LINK_DISTANCE = IMAGE_SIZE * 6;
//Determines the distance between the nodes. Negative -> More distance
const FORCE_MANYBODIES_STRENGTH = -(IMAGE_SIZE * 4);
//Nodes intersecting each others radius will move away from each other
const FORCE_COLLIDE_RADIUS = NODE_RELSIZE * 1.5;

const graphData = staticGraphData;
function ForceGraph(props) {
  //Reference to the graph react instance
  const graphRef = React.useRef(null);
  //Graph Data
  const [imageMap, setImageMap] = React.useState(null);

  //This is not an elegant way to solve it, but works as a demmonstration
  if (!imageMap) {
    //Load images before rendering the canvas
    const images = graphData.nodes.map(e => ({
      id: e.id,
      image: e.icon
    }));
    syncLoadAllImages(images, loadedImages => {
      setImageMap(loadedImages);

      //Apply the forces AFTER the graph has rendered the graph data
      setTimeout(() => {
        //$FlowIssue
        graphRef.current
          .d3Force("link")
          .iterations(1)
          .distance(FORCE_LINK_DISTANCE);

        //$FlowIssue
        graphRef.current
          .d3Force("charge")
          .strength(FORCE_MANYBODIES_STRENGTH)
          .distanceMin(FORCE_MANYBODIES_STRENGTH / 2)
          .distanceMax(FORCE_MANYBODIES_STRENGTH);
        //$FlowIssue

        graphRef.current.d3Force(
          "collide",
          forceCollide(IMAGE_SIZE)
            .strength(0.2)
            .iterations(1)
        );
        //graphRef.current.d3Force("center", null);
        graphRef.current.zoom(ZOOM, 0);
      }, 0);
    });
  }

  if (!imageMap) {
    return null;
  }

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={graphData}
      nodeVal={IMAGE_SIZE}
      linkOpacity={1}
			minZoom={1.4}
			maxZoom={1.4}
			linkWidth={4}
      nodeCanvasObject={(node, ctx, globalScale) =>
        paintNodes(imageMap, node, ctx, globalScale)
      }
    />
  );
}
export default ForceGraph;
