import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";
import React from "react";

const AmlPolicy = async () => {
  const pageIdInStrapi = 3;
  const pageData = await getLegalPage(pageIdInStrapi);

  return <Legal data={pageData} />;
};

export default AmlPolicy;
