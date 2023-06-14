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

export default function QuizPage() {
  const [Soru, UpSoru] = useState(0);
  const [Cevap, setCevap] = useState("");
  const [KarisikCevaplar, setKarisikCevaplar] = useState([]);
  const [can, UpdateCan] = useState(3);

  // Soruların seçenekleri ile birlikte karıştırılması
  useEffect(() => {
    const cevaplar = [Data[0].cevaplar[Soru], ...Data[0].yanlisCevaplar[Soru]];
    setKarisikCevaplar(shuffleArray(cevaplar));
  }, [Soru]);

  useEffect(() => {
    if (can < 0) {
      alert("kaybettin :(");
      window.location.href = "/";
    }
  }, [can]);

  const handleCevap = (cevap) => {
    if (cevap === Data[0].cevaplar[Soru]) {
      console.log("Doğru");
    } else {
      console.log("Yanlış");
      UpdateCan(can - 1);
    }
    setCevap(cevap);
  };

  const handleNextQuestion = () => {
    if (Data[0].sorular.length > Soru + 1) {
      console.log(Data[0].sorular.length);
      console.log(Soru);

      UpSoru(Soru + 1);
      setCevap("");
    } else {
      alert("You win");
    }
  };

  return (
    <div className="QuizPage">
      <h1>QuizPage </h1>
      <p>{can}</p>
      <div className="sorular">
        <h1>Soru:{Soru}</h1>
        <h3>{Data[0].sorular[Soru]}</h3>
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
