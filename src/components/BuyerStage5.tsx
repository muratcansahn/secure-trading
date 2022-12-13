import { seller } from "../utils";
import { useNavigate } from "react-router-dom";
const BuyerStage5 = (props) => {
  const navigate = useNavigate();

  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto">
      <h4 className="text-xl font-semibold">TRANSFER BİLGİLERİM </h4>
      <select className="w-full my-4 py-3">
        <option disabled>Banka Hesabı Seçiniz</option>
        <option value="2">TEB</option>
        <option value="3">İŞ BANKASI</option>
        <option value="4">ZİRAAT BANKASI</option>
        <option value="5">VAKIF BANKASI</option>
      </select>
      <div>
        <p className="font-bold"> TRANSFER YAPILACAK ALICI ÜNVANI</p>
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
        />
      </div>
      <div>
        <p className="font-bold"> TRANSFER AÇIKLAMASI</p>
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          value={seller.RefCode}
        />
      </div>
      <div>
        <p className="font-bold"> TRANSFER TUTARI</p>
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          value={seller.SellPrice}
        />
      </div>
      <div>
        <p className="font-bold"> MASRAF TUTARI </p>
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 rounded-lg mt-2 mb-2"
          value={seller.SellPrice * 0.0123}
        />
      </div>

      <button
        className="bg-teal-400 px-10 py-2 rounded-md mt-5 text-white"
        onClick={() => navigate("/")}
      >
        Tamam
      </button>
    </div>
  );
};

export default BuyerStage5;
