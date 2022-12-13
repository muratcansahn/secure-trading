import { useState } from "react";

const SellerStage2 = (props) => {
  const [code, setCode] = useState<Number>(0);
  const { setStage } = props;
  let smsCode = 165145;
  console.log(code);
  const checkSmsCode = () => {
    if (code === smsCode) {
      setStage(3);
    } else {
      alert("Lütfen Geçerli Bir Doğrulama Kodu Giriniz");
    }
  };
  return (
    <div className="p-5 h-[500px] w-[350px] mt-[100px] mx-auto">
      <h3 className="text-lg font-semibold border-b-2 pb-6"> Sms Doğrulama</h3>
      <p className="mt-6">Sms Doğrulama Kodu :</p>
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-4"
        onChange={(e) => setCode(Number(e.target.value))}
      />
      <small className="text-gray-500 pb-4 ">
        Lütfen telefonunuza gönderilen sms içerisindeki kodu giriniz.
      </small>
      <div className="mt-6 border-t-2 pt-5 flex justify-end gap-3">
        <button
          className=" px-5 py-2 rounded-md  border-2"
          onClick={() => setStage(1)}
        >
          Vazgeç
        </button>
        <button
          className="bg-blue-500 px-5 py-2 rounded-md  text-white"
          onClick={checkSmsCode}
        >
          Devam
        </button>
      </div>
    </div>
  );
};

export default SellerStage2;
