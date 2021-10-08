import React, { Component } from "react";
import "./Component.css";

class Manifesto extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">Bienvenue!</h5>
        <p className="p-manifesto">
          Notre ville est centrée sur une expérience inouïe, où vous pouvez explorer l’histoire de notre planète en apprenant complètement les pièces incroyables des célèbres en le 17eme siecle. Alors, nous sommes tres contents de partageons Inno, une ville qui donne la priorité à l'écologie, l’histoire de notre monde et une économie équilibré. 
        </p>
				<p className="p-manifesto">
         En discutant avec ceux du Canada, saviez-vous que 50% des individus n'étaient pas satisfaits de leur gouvernement local? Contrairement aux États-Unis ou au Canada, nous aimons l'ingérence du public. Regardez cette carte, la mairie est au centre-ville, autour c'est la nature et puis les petits commerces et maisons.
        </p>
				<p className="p-manifesto">
				Alors, portez vos sac a dos et voyagez au Inno, ou vous pouvez explorer le passe et vivre dans le futur. </p>
    
      </div>
    );
  }
}

export default Manifesto;
