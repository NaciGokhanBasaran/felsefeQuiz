import Data from "../../Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function FilozofBilgi(props) {
  const [Soru, UpSoru] = useState(0);
  const [Cevap, setCevap] = useState("");
  const [KarisikCevaplar, setKarisikCevaplar] = useState([]);
  const [can, UpdateCan] = useState(3);
  const [dogruCevap, setDogruCevap] = useState("");

  // Soruların seçenekleri ile birlikte karıştırılması
  useEffect(() => {
    const cevaplar = [props.cevaplar[Soru], ...props.yanlisCevaplar[Soru]];
    setKarisikCevaplar(shuffleArray(cevaplar));
  }, [Soru, props.cevaplar, props.yanlisCevaplar]);

  useEffect(() => {
    if (can < 0) {
      alert("Kaybettiniz :(");
      window.location.href = "/";
    }
  }, [can]);

  const handleCevap = (cevap) => {
    setCevap(cevap);
    if (cevap === props.cevaplar[Soru]) {
      setDogruCevap(cevap);
      console.log("Doğru");
    } else {
      setDogruCevap(props.cevaplar[Soru]);
      console.log("Yanlış");
      UpdateCan(can - 1);
    }
  };

  const handleNextQuestion = () => {
    if (props.sorular.length > Soru + 1 && Cevap === props.cevaplar[Soru]) {
      console.log(props.sorular.length);
      console.log(Soru);
      UpSoru(Soru + 1);
      setCevap("");
      setDogruCevap("");
    } else if (
      props.sorular.length === Soru + 1 &&
      Cevap === props.cevaplar[Soru]
    ) {
      alert("Tebrikler, kazandınız!");
      window.location.href = "/";
    }
  };

  return (
    <div className="QuizPage">
      <h1>{props.ad} </h1>
      <p>Can:{can}</p>
      <div className="sorular">
        <h1>Soru:{Soru + 1}</h1>
        <h3>{props.sorular[Soru]}</h3>
      </div>
      <div className="cevaplar">
        {KarisikCevaplar.map((cevap, index) => (
          <button
            key={index}
            className={Cevap === cevap ? "selected" : ""}
            onClick={() => handleCevap(cevap)}
          >
            {cevap}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Diğer soru</button>
    </div>
  );
}

/*import Data from "../../Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export default function FilozofBilgi(props) {
  const [Soru, UpSoru] = useState(0);
  const [Cevap, setCevap] = useState("");
  const [KarisikCevaplar, setKarisikCevaplar] = useState([]);
  const [can, UpdateCan] = useState(3);

  // Soruların seçenekleri ile birlikte karıştırılması
  useEffect(() => {
    const cevaplar = [props.cevaplar[Soru], ...props.yanlisCevaplar[Soru]];
    setKarisikCevaplar(shuffleArray(cevaplar));
  }, [Soru, props.cevaplar, props.yanlisCevaplar]);

  useEffect(() => {
    if (can < 0) {
      alert("kaybettin :(");
      window.location.href = "/";
    }
  }, [can]);

  const handleCevap = (cevap) => {
    if (cevap === props.cevaplar[Soru]) {
      console.log("Doğru");
      setCevap(cevap);
    } else {
      console.log("Yanlış");
      UpdateCan(can - 1);
      setCevap(cevap);
    }
  };
  const handleNextQuestion = () => {
    if (props.sorular.length > Soru + 1 && Cevap === props.cevaplar[Soru]) {
      UpSoru(Soru + 1);
      setCevap("");
    } else if (
      props.sorular.length === Soru + 1 &&
      Cevap === props.cevaplar[Soru]
    ) {
      alert("kazandınız");
    } else {
      alert("yanlış cevap!");
    }
  };

  return (
    <div className="QuizPage">
      <h1>{props.ad} Bilgi Yarışması </h1>
      <p>{can}</p>
      <div className="sorular">
        <h1>Soru:{Soru}</h1>
        <h3>{props.sorular[Soru]}</h3>
      </div>
      <div className="cevaplar">
        {KarisikCevaplar.map((cevap, index) => (
          <button
            key={index}
            className={Cevap === cevap ? "selected" : ""}
            onClick={() => handleCevap(cevap)}
          >
            {cevap}
          </button>
        ))}
      </div>
      <button onClick={handleNextQuestion}>Diğer soru</button>
    </div>
  );
}
*/
