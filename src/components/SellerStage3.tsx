import { Link } from "react-router-dom";
const SellerStage3 = () => {
  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto bg-green-200">
      <h4 className="text-xl text-green-700 text-bold my-5">
        Başvuru Tamamlandı!{" "}
      </h4>
      <p className="text-green-700 py-7 border-t-2 border-b-2 border-slate-400">
        Başvuru bilgileriniz sistemde kayıtlı cep telefonu numaranıza
        gönderilmiştir{" "}
      </p>
      <p>
        <Link to="/" className="text-blue-500">
          Anasayfaya Dön
        </Link>
      </p>
    </div>
  );
};

export default SellerStage3;
