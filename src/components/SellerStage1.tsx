import { formItems } from "../utils";
import { useState } from "react";

const SellerStage1 = (props) => {
  const { setStage } = props;

  interface IForm {
    TcNo: number;
    SellerName: string;
    SellerPhone: number;
    SellerEmail: string;
    BuyerName: string;
    BuyerPhone: number;
    BuyerEmail: string;
    SellerIban: string;
    Licence: string;
    Amount: number;
    checkbox1?: boolean;
    checkbox2?: boolean;
    kisiTuru?: string;
  }

  const [form, setForm] = useState<IForm>({
    kisiTuru: "Gerçek Kişi",
    TcNo: 0,
    SellerName: "",
    SellerPhone: 0,
    SellerEmail: "",
    BuyerName: "",
    BuyerPhone: 0,
    BuyerEmail: "",
    SellerIban: "",
    Licence: "",
    Amount: 0,
  });

  const checkForm = () => {
    if (
      form.TcNo.toString().length === 11 &&
      form.SellerName.length > 3 &&
      form.SellerPhone.toString().length === 10 &&
      form.SellerEmail.length > 3 &&
      form.BuyerPhone.toString().length === 10 &&
      form.BuyerEmail.length > 3 &&
      form.SellerIban.length > 3 &&
      form.Licence.length > 3 &&
      form.Amount.toString().length > 3 &&
      form.checkbox1 === true &&
      form.checkbox2 === true
    ) {
      setStage(2);
    } else {
      alert("Lütfen Tüm Alanları Eksiksiz Doldurunuz");
    }
  };

  return (
    <div className=" mx-auto  w-[600px] mt-20 flex flex-wrap ">
      <h2 className=" font-bold text-lg w-full ml-3">ARAÇ ÖDEME TALEP FORMU</h2>
      <select
        name="kisiTuru"
        className=" border w-[270px] h-[44px] border-gray-300 mt-5 mx-3 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500  p-2.5"
        onChange={(e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        }}
      >
        <option value="Gerçek Kişi" className="">
          Gerçek Kişi
        </option>
        <option value="Tüzel Kişi">Tüzel Kişi</option>
      </select>
      {formItems.map((item) => {
        return (
          <div className="mt-5  mx-3 box-border" key={item.id}>
            <input
              type="text"
              name={item.id}
              placeholder={item.placeholder}
              className="border-2 border-gray-300 p-2 rounded-md w-[270px]"
              onChange={(e) => {
                setForm({ ...form, [item.id]: e.target.value });
              }}
            />
          </div>
        );
      })}
      <div className="flex">
        <input
          type="checkbox"
          className="mt-5 ml-3"
          name="checkbox1"
          value="true"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.checked });
          }}
        />
        <label className="ml-2 mt-5 text-gray-700 text-sm">
          {" "}
          Tarafıma hizmet sunulması amacıyla ,bulut tabanlı yazılımların yurt
          dışında tutulması nedeniyle kişisel verilerimin yurt dışına
          aktarılmasına ilişkin{" "}
          <strong className="hover:underline hover:cursor-pointer">
            {" "}
            Açık Rıza Metni{" "}
          </strong>
          'ni okudum{" "}
        </label>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="mt-5 ml-3"
          name="checkbox2"
          value="true"
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.checked });
          }}
        />
        <label className="ml-2 mt-5 text-gray-700 text-sm">
          {" "}
          TURK Elektronik Para A.Ş. tarafından ; yukarıda yer alan iletişim
          bilgilerime bilgilendirme,mal ve hizmet tanıtımı ve pazarlama amaçlı
          elektronik ileti gönderilmesine onay veriyorum.{" "}
        </label>
      </div>
      <p className="ml-2 mt-5 text-gray-700 text-sm">
        Kişisel verileriniz talebinizin gerçekleşmesi amacıyla 6698 sayılı kanun
        kapsamında işlenmektedir.Aydınlatma metnine{" "}
        <strong className="hover:underline hover:cursor-pointer">
          buradan{" "}
        </strong>{" "}
        ulaşabilirsiniz
      </p>
      <div className="border-t-2 w-full mt-7">
        <button
          className="bg-teal-400 px-5 py-2 rounded-md mt-7 "
          onClick={checkForm}
        >
          Talep Oluştur
        </button>
      </div>
    </div>
  );
};

export default SellerStage1;
