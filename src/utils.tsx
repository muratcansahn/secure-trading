export const buttons = [
  {
    name: "Satıcı Başvurusu Oluştur",
    id: "button1",
    path: "/seller-application",
  },
  {
    name: "Alıcı Başvurusu Oluştur",
    id: "button2",
    path: "/buyer-application",
  },
  {
    name: "Başvuru Durum Sorgula",
    id: "button3",
    path: "/application-status",
  },
  {
    name: "Başvuru İptal",
    id: "button4",
    path: "/application-cancel",
  },
];
interface IFormItems {
  id: string;
  placeholder: string;
  name?: any;
}

export const formItems: IFormItems[] = [
  {
    id: "TcNo",
    placeholder: "T.C. Kimlik Numarası ",
  },
  {
    id: "SellerName",
    placeholder: "Satıcı Adı ve Soyadı",
  },
  {
    id: "SellerPhone",
    placeholder: "Satıcı Telefon Numarası",
  },
  {
    id: "SellerEmail",
    placeholder: "Satıcı E-posta  adresi",
  },
  {
    id: "BuyerPhone",
    placeholder: "Alıcı Cep Telefonu",
  },

  {
    id: "BuyerEmail",
    placeholder: "Alıcı E-Posta Adresi",
  },
  {
    id: "SellerIban",

    placeholder: "Satıcı IBAN",
  },
  {
    id: "Licence",
    placeholder: "Araç Plakası",
  },
  {
    id: "Amount",
    placeholder: "Satış Tutarı",
  },
];
interface ISeller {
  Name: string;
  Phone: number;
  Plaka: string;
  SellPrice: number;
  RefCode: string;
}

export const seller: ISeller = {
  Name: "EMRE ALTIN",
  Phone: 5555555555,
  Plaka: "34 A 1234",
  SellPrice: 500000,
  RefCode: "GTX45ETC",
};
interface IApplicationStatus {
  Ref: string;
  ApplicationStatus: string;
  PaymentStatus: string;
}
export const applicationStatus: IApplicationStatus = {
  Ref: "GTX45ETC",
  ApplicationStatus: "Alıcı Başvurusu Yapıldı",
  PaymentStatus: "Ödeme Bekleniyor",
};
export const smsCode: number = 165145;
export const refCode: string = "GTX45ETC";
