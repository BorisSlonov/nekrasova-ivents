import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";

import React from "react";

const CookiesPolicy = async () => {
  const pageIdInStrapi = 5;
  const pageData = await getLegalPage(pageIdInStrapi);

  return <Legal data={pageData} />;
};

export default CookiesPolicy;
