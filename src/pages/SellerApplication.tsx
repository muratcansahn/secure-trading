import { formItems } from "../utils";
import { useState } from "react";
const SellerApplication = () => {
  interface IFormItems {
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
  }

  const [form, setForm] = useState<IFormItems>({
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  const checkSubmit = () => {
    if (
      form.TcNo === 0 ||
      form.SellerName === "" ||
      form.SellerPhone === 0 ||
      form.SellerEmail === "" ||
      form.BuyerName === "" ||
      form.BuyerPhone === 0 ||
      form.BuyerEmail === "" ||
      form.SellerIban === "" ||
      form.Licence === "" ||
      form.Amount === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="h-screen ">
      <div className=" mx-auto  w-[600px] mt-20 flex flex-wrap ">
        <h2 className=" font-bold text-lg w-full ml-3">
          ARAÇ ÖDEME TALEP FORMU
        </h2>
        {formItems.map((item) => {
          return (
            <div className="mt-5  mx-3 box-border">
              <input
                type="text"
                placeholder={item.placeholder}
                className="border-2 border-gray-300 p-2 rounded-md w-[270px]"
              />
            </div>
          );
        })}
        <div className="flex">
          <input type="checkbox" className="mt-5 ml-3" />
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
          <input type="checkbox" className="mt-5 ml-3" />
          <label className="ml-2 mt-5 text-gray-700 text-sm">
            {" "}
            TURK Elektronik Para A.Ş. tarafından ; yukarıda yer alan iletişim
            bilgilerime bilgilendirme,mal ve hizmet tanıtımı ve pazarlama amaçlı
            elektronik ileti gönderilmesine onay veriyorum.{" "}
          </label>
        </div>
        <p className="ml-2 mt-5 text-gray-700 text-sm">
          Kişisel verileriniz talebinizin gerçekleşmesi amacıyla 6698 sayılı
          kanun kapsamında işlenmektedir.Aydınlatma metnine{" "}
          <strong className="hover:underline hover:cursor-pointer">
            buradan{" "}
          </strong>{" "}
          ulaşabilirsiniz
        </p>
        <div className="border-t-2 w-full mt-7">
          <button className="bg-teal-300 px-5 py-2 rounded-md mt-7 ">
            Talep Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerApplication;
