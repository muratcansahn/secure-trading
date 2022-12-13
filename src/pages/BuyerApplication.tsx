import { useState } from "react";
import {
  BuyerStage1,
  BuyerStage2,
  BuyerStage3,
  BuyerStage4,
  BuyerStage5,
} from "../components";

const BuyerApplication = () => {
  const [stage, setStage] = useState(5);
  return (
    <>
      {stage === 1 ? (
        <BuyerStage1 setStage={setStage} />
      ) : stage === 2 ? (
        <BuyerStage2 setStage={setStage} />
      ) : stage === 3 ? (
        <BuyerStage3 setStage={setStage} />
      ) : stage === 4 ? (
        <BuyerStage4 setStage={setStage} />
      ) : (
        <BuyerStage5 />
      )}
    </>
  );
};

export default BuyerApplication;
