import { useState } from "react";
import { refCode } from "../utils";

const BuyerStage1 = (props) => {
  const { setStage } = props;
  const [code, setCode] = useState<String>("0");

  const checkRefCode = () => {
    if (code === refCode) {
      setStage(2);
    } else {
      alert("Lütfen Geçerli Bir Referans Kodu Giriniz");
    }
  };
  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto">
      <h4 className="text-xl font-semibold">Referans Kodunu Giriniz.</h4>
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-4"
        placeholder="Referans Numarası"
        onChange={(e) => setCode(String(e.target.value))}
      />
      <button
        className="bg-teal-400 px-10 py-2 rounded-md  text-white"
        onClick={checkRefCode}
      >
        Tamam
      </button>
      <p className="mt-6 text-teal-500 font-semibold text-lg hover:cursor-pointer hover:underline">
        Referans Numaramı Unuttum
      </p>
      <small className="block mt-6">
        *Alıcı referans kodu satıcı tarafından oluşturulmaktadır.
      </small>
      <small>
        *Lütfen satıcı kişi ile param güvende hesabı ile ilgili iletişime
        geçiniz
      </small>
    </div>
  );
};

export default BuyerStage1;
