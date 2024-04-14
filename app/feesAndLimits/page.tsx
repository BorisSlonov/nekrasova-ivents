import Legal from "@/components/Legal";
import { feesAndLimits } from "@/legalText/feesAndLimits";
import React from "react";

const FeesAndLimits = () => {
  return <Legal data={feesAndLimits} />;
};

export default FeesAndLimits;
