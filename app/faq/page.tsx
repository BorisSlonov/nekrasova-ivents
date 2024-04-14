import { getFaqPageData } from "@/actions/getFaqPageData";
import FaqLegal from "@/components/FaqLegal";

import React from "react";

const Faq = async () => {
  const faqData = await getFaqPageData();

  return <FaqLegal data={faqData} />;
};

export default Faq;
