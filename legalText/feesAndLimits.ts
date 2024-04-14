import { ILegalPageData } from "@/components/Legal/types";

export const feesAndLimits: ILegalPageData = {
  pageTitle: "Fees and limits",
  date: "Apr 5, 2023",
  pageDescr: ``,
  accordeonContent: [
    {
      accordTitle: "",
      accordItems: [
        {
          title: "Fees",
          descr: `<p>
        
        Accepting funds in cryptocurrency — Free of charge
        <p>Storage of funds in cryptocurrency — Free of charge</p>
        Sending funds in cryptocurrency — 0.5% + Blockchain fee
        </p>
        <br/>
        Fiat to Crypto via SEPA/SWIFT — from 0.9%
  <p>Crypto to Fiat via SEPA/SWIFT — from 0.9%</p>`,
        },

        {
          title: `Limits`,
          descr: `<p>0 lvl — 100 EUR per transaction; 1 000 EUR per month</p>
        <p> 1 lvl — 5 00 EUR per transaction; 5 000 EUR per month</p>
       <p> 2 lvl — 5 000 EUR per transaction; 10 000 EUR per month</p>
  <p>3 lvl — individual conditions</p>`,
        },

        {
          title: `Exchange minimum`,
          descr: `<p>SEPA — 300 EUR</p>
        <br/>
        SWIFT — 300 EUR`,
        },
      ],
    },
  ],
};
