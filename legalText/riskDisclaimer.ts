import { ILegalPageData } from "@/components/Legal/types";

export const riskDisclaimer: ILegalPageData = {
  pageTitle: "RISK DISCLAIMER",
  date: "Apr 5, 2023",
  pageDescr: `This Risk Disclaimer ("Disclaimer") is provided to you by Cryptopayments, a Virtual Asset Service Provider ("VASP"), to inform you of the potential risks associated with engaging in transactions involving virtual assets. By using our services, you acknowledge and accept the risks outlined in this Disclaimer.`,

  accordeonContent: [
    {
      accordTitle: "",
      accordItems: [
        {
          title: "Regulatory and Legal Risks",
          descr: `The regulatory landscape surrounding virtual assets is constantly evolving and may vary significantly from one jurisdiction to another. Changes in regulations or the imposition of new regulations may adversely affect your ability to engage in virtual asset transactions and may result in financial losses. `,
        },
        {
          title: `Technology Risks ?`,
          descr: `Virtual asset transactions rely on complex technology systems, including blockchain technology. These systems are susceptible to hacking, technological glitches, and other operational issues that may result in the loss or theft of your virtual assets. 
        `,
        },

        {
          title: `Market Risks`,
          descr: `The market for virtual assets is relatively young and may be less liquid than traditional financial markets. This can lead to increased price volatility and may make it difficult to buy or sell virtual assets at favorable prices. 
        `,
        },

        {
          title: `Security Risks`,
          descr: `The security of your virtual assets is your responsibility. Failure to implement adequate security measures, such as using strong passwords and enabling two-factor authentication, may result in the unauthorized access to and loss of your virtual assets. `,
        },
        {
          title: `Liquidity Risks`,
          descr: `There may be periods of limited or no liquidity in the market for certain virtual assets, which may make it difficult for you to buy or sell those assets at a desired price or at all.  `,
        },
        {
          title: `Exchange Risks `,
          descr: `When engaging with other parties on virtual asset trading platforms or exchanges, you are exposed to the credit risk of those parties. In the event of a default by a counterparty, you may incur financial losses. 
        `,
        },
        {
          title: `Operational Risks `,
          descr: `Our services may be subject to operational risks, including but not limited to, system failures, network disruptions, and cyber-attacks. These risks may result in interruptions to our services and may affect your ability to engage in virtual asset transactions. `,
        },
        {
          title: `No Financial Advice `,
          descr: `Our services are provided for informational purposes only and do not constitute financial, investment, or tax advice. You should seek independent professional advice before making any financial decisions.  `,
        },
        {
          title: `Acknowledgment and Acceptance  `,
          descr: `By using our services, you acknowledge that you have read, understood, and accepted the risks outlined in this Disclaimer. You further acknowledge that you are solely responsible for your own financial decisions and that Cryptopayments shall not be held liable for any losses incurred as a result of your engagement with virtual assets. `,
        },
      ],
    },
  ],
};
