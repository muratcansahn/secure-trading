import { useNavigate } from "react-router-dom";

import { applicationStatus } from "../utils";

const ApplicationStatus3 = (props) => {
  const { setStage } = props;
  const navigate = useNavigate();
  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto">
      <h1 className="font-bold text-xl">BAŞVURU DURUM BİLGİLERİ</h1>
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Referans No :</p>
        <p className="text-lg ">{applicationStatus.Ref}</p>
      </div>
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Alıcı Başvuru Durumu</p>
        <p className="text-lg ">{applicationStatus.ApplicationStatus}</p>
      </div>{" "}
      <div className="mt-4 border-b-2 flex">
        <p className="text-lg font-semibold w-[150px]">Ödeme Durum Bilgisi:</p>
        <p className="text-lg ">{applicationStatus.PaymentStatus}</p>
      </div>
      <button
        className="bg-teal-400 px-10 py-2 rounded-md mt-5 text-white"
        onClick={() => navigate("/")}
      >
        Ana Sayfa
      </button>
    </div>
  );
};

export default ApplicationStatus3;
