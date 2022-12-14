import { useState } from "react";
import {
  ApplicationCancel1,
  ApplicationCancel2,
  ApplicationCancel3,
} from "../components";
const ApplicationCancel = () => {
  const [stage, setStage] = useState(1);
  console.log(stage);
  return (
    <>
      {stage === 1 ? (
        <ApplicationCancel1 setStage={setStage} />
      ) : stage === 2 ? (
        <ApplicationCancel2 setStage={setStage} />
      ) : (
        <ApplicationCancel3 setStage={setStage} />
      )}
    </>
  );
};

export default ApplicationCancel;
