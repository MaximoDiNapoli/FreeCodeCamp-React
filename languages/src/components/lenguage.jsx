import React from "react";

export function Lenguage(){
  return (
    <div className="container-lenguage">
      <img
        className="image-lenguage"
        src={require('../images/usa.png')} 
        alt="USA Flag"/>
        <div className="container-text-lenguage">
          <p className="name-language">English</p>
          <p className="countries-language">UNITED STATES, UK, AUSTRALIA, NEW ZEALAND, CANADA</p>
          <p className="description-language">English is a West Germanic language of the Indo-European language family, originally spoken by the inhabitants of early medieval England. It is named after the Angles, one of the ancient Germanic peoples that migrated from Anglia, a peninsula on the Baltic Sea (not to be confused with East Anglia in England), to the area of Great Britain later named after them: England. The closest living relatives of English include Scots, followed by the Low Saxon and Frisian languages. While English is genealogically West Germanic, its vocabulary is also distinctively influenced by Old Norman French and French (about 29% of modern English words) and Latin (also about 29%), as well as by Old Norse (a North Germanic language). Speakers of English are called Anglophones. </p>
        </div>
    </div>
  );
}
