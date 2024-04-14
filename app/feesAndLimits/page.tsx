import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";

const FeesAndLimits = async () => {
  const pageIdInStrapi = 9;
  const pageData = await getLegalPage(pageIdInStrapi);
  return <Legal data={pageData} />;
};

export default FeesAndLimits;
