import Legal from "@/components/Legal";
import { cookiesPolicy } from "@/legalText/cookiesPolicy";
import React from "react";

const CookiesPolicy = () => {
  return <Legal data={cookiesPolicy} />;
};

export default CookiesPolicy;
