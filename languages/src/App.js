import './App.css';
import Lenguage from "./components/Lenguage";

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>Bassed Lenguages</h1>

        <Lenguage 
        name="Spanish"
        countries="MEXICO, COLOMBIA, SPAIN, ARGENTINA, VENEZUELA"
        description="Spanish (español or castellano, Castilian) is a Romance language of the Indo-European language family that evolved from colloquial spoken Latin in the Iberian Peninsula of Europe. Today, it is a global language with nearly 500 million native speakers, mainly in the Americas and Spain. Spanish is the official language of 20 countries. It is the world's second-most spoken native language after Mandarin Chinese;[4][5] the world's fourth-most spoken language overall after English, Mandarin Chinese, and Hindustani (Hindi-Urdu). "
        img="argentina.png"/>


        <Lenguage 
        name="English"
        countries="UNITED STATES, UK, AUSTRALIA, NEW ZEALAND, CANADA"
        description="English is a West Germanic language of the Indo-European language family, originally spoken by the inhabitants of early medieval England. It is named after the Angles, one of the ancient Germanic peoples that migrated from Anglia, a peninsula on the Baltic Sea, to the area of Great Britain later named after them: England. The closest living relatives of English include Scots, followed by the Low Saxon and Frisian languages. While English is genealogically West Germanic, its vocabulary is also distinctively influenced by Old Norman French and French and Latin , as well as by Old Norse."
        img="usa.png"/>

        <Lenguage 
        name="German"
        countries="GERMANY, BELGIUM, AUSTRIA, SWITZERLAND, LIECHTENSTEIN"
        description="German is a West Germanic language of the Indo-European language family, mainly spoken in Central Europe. It is also a co-official language of Luxembourg and Belgium, as well as a national language in Namibia. German is most similar to other languages within the West Germanic language branch, including Afrikaans, Dutch, English, the Frisian languages, Low German, Luxembourgish, Scots, and Yiddish. It also contains close similarities in vocabulary to some languages in the North Germanic group, such as Danish, Norwegian, and Swedish. German is the second most widely spoken Germanic language after English which is also a West Germanic language. "
        img="germany.jpg"/>
      </div>
    </div>
  );
}

export default App;
