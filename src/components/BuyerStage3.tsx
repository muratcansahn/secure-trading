import { useEffect, useState } from "react";

const BuyerStage3 = (props) => {
  const { setStage } = props;
  const [code, setCode] = useState<number>(0);
  const [timer, setTimer] = useState<number>(180);
  let refCode = 135125;
  const checkRefCode = () => {
    if (code === refCode) {
      setStage(4);
    } else {
      alert("Lütfen Geçerli Bir Onay Kodu Giriniz");
    }
  };
  useEffect(() => {
    if (!timer) return;
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto">
      <h4 className="text-xl font-semibold">Sms Onay Kodunu Giriniz.</h4>
      <input
        type="text"
        className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-4"
        placeholder="Referans Numarası"
        onChange={(e) => setCode(Number(e.target.value))}
      />
      <button
        className="bg-teal-400 px-10 py-2 rounded-md  text-white"
        onClick={checkRefCode}
      >
        Doğrula
      </button>
      {timer == 0 && (
        <p className="mt-6 text-teal-500 font-semibold text-lg hover:cursor-pointer hover:underline">
          Tekrar Kod Gönder
        </p>
      )}

      <p
        className={`mt-6 text-teal-500 font-semibold text-lg  ${
          timer > 0 && "cursor-not-allowed"
        } hover:underline`}
      >
        {timer > 0 && `Tekrar Kod Gönder (${timer}) `}
      </p>
    </div>
  );
};

export default BuyerStage3;
