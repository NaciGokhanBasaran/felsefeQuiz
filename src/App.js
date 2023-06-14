import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Data";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import FilozofBilgi from "./Pages/FilozofBilgi/FilozofBilgi.jsx";
import QuizPage from "./Pages/QuizPage/QuizPage";
import QRCode from "./Pages/QrCode/QrCode";

import Nasil from "./Pages/Nasil/Nasil";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nasil" element={<Nasil />} />
          <Route path="/qrcode" element={<QRCode />} />
          {Data.map((data) => (
            <Route
              exact
              path={data.url}
              element={
                <FilozofBilgi
                  resim={data.resim}
                  ad={data.ad}
                  yas={data.yas}
                  dogumTarihi={data.dogumTarihi}
                  dogumYeri={data.dogumYeri}
                  meslek={data.meslek}
                  sorular={data.sorular}
                  cevaplar={data.cevaplar}
                  yanlisCevaplar={data.yanlisCevaplar}
                  bilgi={data.bilgi}
                  quiz={data.quiz}
                />
              }
            ></Route>
          ))}
          {Data.map((data) => (
            <Route
              exact
              path={data.quiz}
              element={
                <QuizPage
                  sorular={data.sorular}
                  cevaplar={data.cevaplar}
                  yanlisCevaplar={data.yanlisCevaplar}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
