import Legal from "@/components/Legal";
import { termsOfService } from "@/legalText/termsOfService";
import React from "react";

const TermsOfService = () => {
  return <Legal data={termsOfService} />;
};

export default TermsOfService;
