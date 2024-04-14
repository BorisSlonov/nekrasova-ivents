import { getLegalPage } from "@/actions/getLegalPage";
import Legal from "@/components/Legal";

import React from "react";

const PrivacyPolicy = async () => {
  const pageIdInStrapi = 6;
  const pageData = await getLegalPage(pageIdInStrapi);
  return <Legal data={pageData} />;
};

export default PrivacyPolicy;
