import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Highlights extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">Les services</h5>
        <p className="p-manifesto">
          <b>
            <a href="https://laws-lois.justice.gc.ca/eng/">
              La Legislation Publique
            </a>
          </b>
          <br />
          Nous ouvrions un discussions et esperons que les gens contributent<br/>
          <br />
          <b>
            <a href="https://laws-lois.justice.gc.ca/eng/">
              L'energie Renouvable!
            </a>
          </b>
          <br />
          Nous utilisons les panneau solaire partout!
          <br />
          <br />
          <Link to="https://laws-lois.justice.gc.ca/eng/e">
            <b>Nous celebrons la diversité</b>
            <br />
          </Link>
          La plupart de les cultures, celèbres et traditions sont très important içi
          <br />
        </p>
      </div>
    );
  }
}

export default Highlights;
