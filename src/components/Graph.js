{/*

import React, { Component } from "react";
import ReactDOM from "react-dom";
import ForceGraph3D from "react-force-graph-3d";
import { Sprite, CanvasTexture, SpriteMaterial } from "three";
//var THREE = require("three");

class CircleSprites extends Component {
  //added 'canvas' item to original genRandomTree
  genRandomTree = (N = 1000) => {
    return {
      nodes: [...Array(N).keys()].map(i => ({
        id: i,
        canvas: drawCircle()
      })),
      links: [...Array(N).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1))
        }))
    };

    //draw a circle to a canvas and return
    function drawCircle() {
      let canvas = document.createElement("canvas");
      canvas.id = "canvas";
      canvas.width = 32;
      canvas.height = 32;
      let ctx = canvas.getContext("2d");
      let PI2 = Math.PI * 2;
      ctx.arc(16, 16, 16, 0, PI2, true);
      ctx.fillStyle = "blue";
      ctx.fill();

      return canvas;
    }
  };

  render() {
    const data = this.genRandomTree();
    return (
      <ForceGraph3D
        graphData={data}
        nodeLabel="id"
        nodeThreeObject={({ canvas }) => {
          const imageTexture = new CanvasTexture(canvas);
          // imageTexture.needsUpdate = true;
          const material = new SpriteMaterial({
            map: imageTexture,
            transparent: false
          });
          const sprite = new Sprite(material);
          sprite.scale.set(16, 16);
          return sprite;
        }}
      />
    );
  }
}

ReactDOM.render(<CircleSprites />, document.getElementById("root"));

export default CircleSprites;

*/}