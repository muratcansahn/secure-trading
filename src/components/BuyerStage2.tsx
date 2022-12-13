import { useState } from "react";
import { seller } from "../utils";

const BuyerStage2 = (props) => {
  const { setStage } = props;
  interface IBuyerInfo {
    TC: number;
    name: string;
    phone: number;
  }
  const [buyerInfo, BuyerInfo] = useState<IBuyerInfo>({
    TC: 0,
    name: "",
    phone: 0,
  });

  /// check buyer Tc with regex

  // const checkBuyerInfo = () => {
  //   if (buyerInfo.TC.toString().length === 11:number) {
  //     setStage(3);
  //   } else {
  //     alert("Lütfen Geçerli Bir TC Kimlik Numarası Giriniz");
  //   }
  // };
  const checkBuyerInfo = (buyerInfo: IBuyerInfo) => {
    if (buyerInfo.TC.toString().length < 11) {
      alert("Lütfen Geçerli Bir TC Kimlik Numarası Giriniz");
    }
    if (buyerInfo.name.length < 3) {
      alert("Lütfen Geçerli Bir İsim Giriniz");
    }
    if (buyerInfo.phone.toString().length !== 10) {
      alert("Lütfen Geçerli Bir Telefon Numarası Giriniz");
    } else {
      setStage(3);
    }
  };

  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto">
      <h4 className="font-semibold text-xl">SATICI BİLGİLERİ</h4>
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Referans No :</p>
        <p className="text-lg ">{seller.RefCode}</p>
      </div>
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Adı Soyadı :</p>
        <p className="text-lg ">{seller.Name}</p>
      </div>
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Cep Telefonu :</p>
        <p className="text-lg ">{seller.Phone}</p>
      </div>{" "}
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Araç Plakası:</p>
        <p className="text-lg ">{seller.Plaka}</p>
      </div>{" "}
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Satış Tutarı :</p>
        <p className="text-lg ">{seller.SellPrice}</p>
      </div>
      <h4 className="font-semibold text-xl mt-6">ALICI BİLGİLERİ</h4>
      <select className="mt-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="1" className="">
          Gerçek Kişi
        </option>
        <option value="0">Tüzel Kişi</option>
      </select>
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
        placeholder="TC Kimlik Numarası"
        onChange={(e) =>
          BuyerInfo({ ...buyerInfo, TC: Number(e.target.value) })
        }
      />
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
        placeholder="Alıcı Adı ve Soyadı"
        onChange={(e) =>
          BuyerInfo({ ...buyerInfo, name: String(e.target.value) })
        }
      />
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
        placeholder="Cep Telefonu"
        onChange={(e) =>
          BuyerInfo({ ...buyerInfo, phone: Number(e.target.value) })
        }
      />
      <div className="mt-6 pt-5 flex justify-center gap-3">
        <button
          className=" px-5 py-2 rounded-md  border-2"
          onClick={() => setStage(1)}
        >
          Vazgeç
        </button>
        <button
          className="bg-blue-500 px-5 py-2 rounded-md  text-white"
          onClick={() => checkBuyerInfo(buyerInfo)}
        >
          Devam
        </button>
      </div>
    </div>
  );
};

export default BuyerStage2;
