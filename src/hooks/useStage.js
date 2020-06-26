import { useState } from "react";
import { createStage } from "../gameConfig";

const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
export default useStage;
