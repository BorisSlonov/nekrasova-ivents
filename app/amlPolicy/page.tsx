import Legal from "@/components/Legal";
import { amlPolicy } from "@/legalText/amlPolicy";
import React from "react";

const AmlPolicy = () => {
  return <Legal data={amlPolicy} />;
};

export default AmlPolicy;
