import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";

const RiskDisclaimer = async () => {
  const pageIdInStrapi = 8;
  const pageData = await getLegalPage(pageIdInStrapi);
  return <Legal data={pageData} />;
};

export default RiskDisclaimer;
