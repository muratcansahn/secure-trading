import { useState } from "react";

const ApplicationStatus = (props) => {
  const { setStage } = props;
  interface IApplicationStatusInfo {
    TC: number;
    refCode: string;
    phone: number;
  }
  const [applicationDatas, setApplicationDatas] =
    useState<IApplicationStatusInfo>({
      TC: 0,
      phone: 0,
      refCode: "",
    });
  const checkApplicationStatus = (applicationDatas: IApplicationStatusInfo) => {
    if (applicationDatas.TC.toString().length < 11) {
      alert("Lütfen Geçerli Bir TC Kimlik Numarası Giriniz");
    }
    if (applicationDatas.refCode.length < 3) {
      alert("Lütfen Geçerli Bir Referans Kodu Giriniz");
    }
    if (applicationDatas.phone.toString().length !== 10) {
      alert("Lütfen Geçerli Bir Telefon Numarası Giriniz");
    } else {
      setStage(2);
    }
  };

  return (
    <div>
      <div className="p-5  w-[450px] mt-[100px] mx-auto">
        <h4 className="text-xl font-semibold mb-5">BAŞVURU DURUM SORGULAMA </h4>
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
            setApplicationDatas({
              ...applicationDatas,
              TC: Number(e.target.value),
            });
          }}
        />

        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          placeholder="Telefon No"
          onChange={(e) => {
            setApplicationDatas({
              ...applicationDatas,
              phone: Number(e.target.value),
            });
          }}
        />

        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          placeholder="Referans No"
          onChange={(e) => {
            setApplicationDatas({
              ...applicationDatas,
              refCode: String(e.target.value),
            });
          }}
        />

        <button
          className="bg-teal-400 px-10 py-2 rounded-md mt-5 text-white"
          onClick={() => checkApplicationStatus(applicationDatas)}
        >
          Tamam
        </button>
      </div>
    </div>
  );
};

export default ApplicationStatus;
