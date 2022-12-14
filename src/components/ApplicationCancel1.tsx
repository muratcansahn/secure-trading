import { useState } from "react";

const ApplicationCancel = (props) => {
  const { setStage } = props;
  interface IApplicationCancel {
    TC: number;
    phone: number;
    reason: string;
    refCode: string;
  }
  const [cancelData, setCancelData] = useState<IApplicationCancel>({
    TC: 0,
    phone: 0,
    refCode: "",
    reason: "",
  });
  const checkCancelData = (cancelData: IApplicationCancel) => {
    if (cancelData.TC.toString().length < 11) {
      alert("Lütfen Geçerli Bir TC Kimlik Numarası Giriniz");
    }
    if (cancelData.phone.toString().length !== 10) {
      alert("Lütfen Geçerli Bir Telefon Numarası Giriniz");
    }
    if (cancelData.reason.length < 5) {
      alert("Lütfen İptal Sebebi Giriniz");
    }
    if (cancelData.refCode.length < 3) {
      alert("Lütfen Geçerli Bir Referans Kodu Giriniz");
    } else {
      setStage(2);
    }
  };
  return (
    <div>
      <div className="p-5  w-[450px] mt-[100px] mx-auto">
        <h4 className="text-xl font-semibold mb-5">BAŞVURU İPTAL BİLGİLERİ</h4>
        <select className="mt-2 mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option value="1" className="">
            Gerçek Kişi
          </option>
          <option value="0">Tüzel Kişi</option>
        </select>

        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          placeholder="Tc Kimlik No"
          onChange={(e) => {
            setCancelData({
              ...cancelData,
              TC: Number(e.target.value),
            });
          }}
        />

        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          placeholder="Telefon No"
          onChange={(e) => {
            setCancelData({
              ...cancelData,
              phone: Number(e.target.value),
            });
          }}
        />
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2 h-[80px]"
          placeholder="İptal Nedeni"
          onChange={(e) => {
            setCancelData({
              ...cancelData,
              reason: String(e.target.value),
            });
          }}
        />

        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          placeholder="Referans No"
          onChange={(e) => {
            setCancelData({
              ...cancelData,
              refCode: String(e.target.value),
            });
          }}
        />

        <button
          className="bg-teal-400 px-10 py-2 rounded-md mt-5 text-white"
          onClick={() => checkCancelData(cancelData)}
        >
          İptal Et
        </button>
        <p className="mt-6 text-teal-500 font-semibold text-lg hover:cursor-pointer hover:underline">
          Referans Numaramı Unuttum
        </p>
      </div>
    </div>
  );
};

export default ApplicationCancel;
