import Legal from "@/components/Legal";
import { riskDisclaimer } from "@/legalText/riskDisclaimer";
import React from "react";

const RiskDisclaimer = () => {
  return <Legal data={riskDisclaimer} />;
};

export default RiskDisclaimer;
