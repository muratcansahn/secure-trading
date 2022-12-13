import { useState } from "react";
import {
  ApplicationStatus1,
  ApplicationStatus2,
  ApplicationStatus3,
} from "../components";

const ApplicationStatus = () => {
  const [stage, setStage] = useState(3);
  return (
    <>
      {stage === 1 ? (
        <ApplicationStatus1 setStage={setStage} />
      ) : stage === 2 ? (
        <ApplicationStatus2 setStage={setStage} />
      ) : (
        <ApplicationStatus3 setStage={setStage} />
      )}
    </>
  );
};
export default ApplicationStatus;
