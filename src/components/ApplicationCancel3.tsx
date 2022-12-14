import { Link } from "react-router-dom";
const ApplicationCancel3 = (props) => {
  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto bg-green-200">
      <h4 className="text-xl text-green-700 text-bold my-5">
        Başvuru Tamamlandı!{" "}
      </h4>
      <p className="text-green-700 py-7 border-t-2 border-slate-400">
        EPTX48XC referans nolu başvurunuz iptal edilmiştir
      </p>
      <p className="pt-5 border-t-2 border-slate-400">
        <Link to="/" className="text-blue-500">
          Anasayfaya Dön
        </Link>
      </p>
    </div>
  );
};

export default ApplicationCancel3;
