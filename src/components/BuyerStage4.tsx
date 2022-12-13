import { seller } from "../utils";
const BuyerStage4 = (props) => {
  const { setStage } = props;
  return (
    <div className="p-5  w-[450px] mt-[100px] mx-auto bg-green-200">
      <h4 className="text-xl text-green-700 text-bold my-5">
        Başvuru Tamamlandı!{" "}
      </h4>
      <p className="text-green-700 py-7 border-t-2 border-b-2 border-slate-400">
        {seller.Plaka} plakalı araç satışı için kaydınız oluşturulmutur.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        dolor dolore incidunt minima atque praesentium nobis blanditiis! Eos,
        illum natus.
        <br />
        <br /> İsterseniz satış bedelini parça parça banka hesaplarınıza{" "}
        <strong className="underline">
          transfer bilgilerim alanındaki bilgiler ile yatırabilirsiniz
        </strong>
      </p>
      <div className="w-full flex justify-center">
        {" "}
        <button
          className="bg-teal-400 px-10 py-2 rounded-md  text-white mt-8"
          onClick={setStage(5)}
        >
          Transfer Bilgilerini Göster
        </button>
      </div>
    </div>
  );
};

export default BuyerStage4;
