import { useState } from "react";
import { SellerStage1, SellerStage2, SellerStage3 } from "../components";
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
  const [stage, setStage] = useState(1);
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
      {stage === 1 ? (
        <SellerStage1 setStage={setStage} />
      ) : stage === 2 ? (
        <SellerStage2 setStage={setStage} />
      ) : (
        <SellerStage3 />
      )}
    </div>
  );
};

export default SellerApplication;
