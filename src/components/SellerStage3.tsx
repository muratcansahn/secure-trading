import { Link } from "react-router-dom";
const SellerStage3 = () => {
  return (
    <div className="py-5 px-7  w-[500px] mt-[100px] mx-auto bg-green-100">
      <h4 className="text-xl text-green-700 text-bold my-5">
        Başvuru Tamamlandı!{" "}
      </h4>
      <p className="text-green-700 py-7 border-t-2 border-slate-400">
        Başvuru bilgileriniz sistemde kayıtlı cep telefonu numaranıza
        gönderilmiştir{" "}
      </p>
      <p className="pt-5 border-t-2 border-slate-400">
        <Link to="/" className="text-blue-500 ">
          Anasayfaya Dön
        </Link>
      </p>
    </div>
  );
};

export default SellerStage3;
