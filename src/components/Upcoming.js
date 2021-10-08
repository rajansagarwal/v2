import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";


class Upcoming extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">Que pouvons-nous faire?</h5>
        <p className="p-manifesto">
          <a href="https://laws-lois.justice.gc.ca/eng/">
            <b>Visiter la musée de l'histoire</b>
          </a>{" "}
          <br />
          Nous célébrons les pieces incroyables de Shakespeare, Galileo, Bach et plus!
          <br />
          <br />
          <Link to="https://laws-lois.justice.gc.ca/eng/">
            <b>Visiter centre-ville</b>
          </Link>
          <br />
          Tous les services et preseque la mairie, où vous pouvez discuter la legislation.
          <br />
          <br />
          <Link to="https://laws-lois.justice.gc.ca/eng/">
            <b>Explorer la nature </b>
          </Link>{" "}
          <br />
          La plupart de la ville est avec de la nature! Regardez votre carte pour plusieurs d'information.
          <br />
          <br />
          <a href="https://laws-lois.justice.gc.ca/eng/">
            <b>Célébrer la culture!</b>
          </a>{" "}
          <br />
          La multiculturalisme est très important, et nous respectons les opinions de chaucun!
          <br />
          <br />
					<img src="https://www.iucn.org/sites/dev/files/styles/850x500_no_menu_article/public/import/img/pk_sp_ziarat.jpg?itok=8YZi6pR-" width="100%" alt="solarpanels"/>
        </p>
      </div>
    );
  }
}

export default Upcoming;
