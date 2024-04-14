import React from "react";
import styles from "./styles.module.css";
import SectionWrap from "../ui/SectionWrap";
import { ILegalPageData } from "./types";
import LegalAccord from "./LegalAccord";
import ReactMarkdown from "react-markdown";

interface Props {
  data: ILegalPageData;
}

const Legal = ({ data }: Props) => {
  const { date, pageTitle, pageDescr, Accordeon: accordeonContent } = data;

  const showDescr = pageDescr && pageDescr.length > 0;
  const showAccordeon = accordeonContent.length > 0;

  return (
    <SectionWrap tag="main" className={styles.legal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{pageTitle}</h1>
          <span className={styles.date}>Last Update: {date}</span>
        </div>

        {showDescr && (
          <ReactMarkdown className={styles.descr}>{pageDescr}</ReactMarkdown>
        )}
        {showAccordeon && (
          <div className={styles.mainInfo}>
            <LegalAccord data={accordeonContent} />
          </div>
        )}
      </div>
    </SectionWrap>
  );
};

export default Legal;
