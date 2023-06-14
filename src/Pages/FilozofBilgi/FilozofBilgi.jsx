import { Link } from "react-router-dom";

export default function FilozofBilgi(props) {
  return (
    <div className="FilozofBilgi">
      <div className="mektup">
        <img src={props.resim} alt={props.resim} className="filozof-resim" />
        <h1>{props.ad}</h1>
        <div className="ad-yas">
          <p>Yaş:{props.yas}</p>

          <p>Doğum Yeri:{props.dogumYeri}</p>
        </div>
        <p>{props.bilgi}</p>
        <br />
        <button>
          <Link to={props.quiz}>Quize Başla</Link>
        </button>{" "}
      </div>
    </div>
  );
}

/*


import { Link } from "react-router-dom";

export default function FilozofBilgi(props) {
  return (
    <div className="mektup">
      <img src={props.resim} alt={props.ad} className="mektup-resim" />
      <div className="mektup-bilgi">
        <h1 className="mektup-ad">{props.ad}</h1>
        <p className="mektup-yas">
          {props.yas}, {props.dogumYeri}
        </p>
        <p className="mektup-bilgi-icerik">{props.bilgi}</p>
        <button>
          <Link to={props.quiz}>Quize Başla</Link>
        </button>
      </div>
    </div>
  );
}




import { Link } from "react-router-dom";

export default function FilozofBilgi(props) {
  return (
    <div className="FilozofBilgi">
      <div className="mektup">
        <img src={props.resim} alt={props.resim} className="filozof-resim" />
        <h1>{props.ad}</h1>
        <div className="ad-yas">
          <p>Yaş:{props.yas}</p>

          <p>Doğum Yeri:{props.dogumYeri}</p>
        </div>
        <p>{props.bilgi}</p>
        <button>
          <Link to={props.quiz}>Quize Başla</Link>
        </button>{" "}
      </div>
    </div>
  );
}

<h1>{Data[0].ad} </h1>
      <p>{Data[0].yas}</p>
      <p>{Data[0].dogumTarihi}</p>
      <p>{Data[0].dogumYeri}</p>
      <p>{Data[0].meslek}</p>
      <p>{Data[0].bilgi}</p>
      <button>
        <Link to={"/sokratesQuiz"}>Başla</Link>
      </button>
      */
