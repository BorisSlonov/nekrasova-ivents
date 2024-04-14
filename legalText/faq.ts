import { ILegalPageData } from "@/components/Legal/types";

export const faq: ILegalPageData = {
  pageTitle: "Faq",
  date: "Apr 5, 2023",
  pageDescr: ``,
  accordeonContent: [
    {
      accordTitle: `Part 1: Integration`,
      accordItems: [
        {
          title: `How much time does it take to get started with Crypto payments?`,
          descr: `<p style="margin-top:0pt; margin-bottom:0pt;"><span>Signup takes less than 10 minutes. If the documents are in place, the account will get approved within 24 hours.</span></p>`,
        },
        {
          title: `What are the requirements to open a Cryptopayments account?`,
          descr: `To open a Cryptopayments account, you will need to provide the following information: your company's official formation documents; the government ID of the person who will be authorized to sign on behalf of the company. `,
        },

        {
          title: `What does the corporate account verification process consist of?`,
          descr: `<p style="margin-top:0pt; margin-bottom:0pt;"><span>The corporate account verification process consists of two steps:</span></p>
          <ol type="1" style="margin:0pt; padding-left:0pt;">
              <li style="margin-left:32.11pt; padding-left:3.89pt;">Verification of corporate data (verification of legal documents and company information).</li>
              <li style="margin-left:32.11pt; padding-left:3.89pt;">Verification of company individuals</li>
          </ol>`,
        },
        {
          title: `How do I enable cryptoprocessing on my site?`,
          descr: `<p style="margin-top:0pt; margin-bottom:0pt;"><strong><span ">Pre-settings</span></strong></p>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span>Before proceeding with the form of payment, please provide:</span></p>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span>- Your company logo in PNG format, no more than 2mb size</span></p>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span>- Payment description</span></p>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span>- Website address where the payment form will be placed</span></p>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span>After submitting the data to the platform manager, in return you will receive a code to embed on your website. You can place this code on the page of your website to ensure that cryptocurrency payments are accepted.</span></p>`,
        },

        {
          title: `Does Cryptopayments provide services in my country?`,
          descr: `<a href="termsOfService#Restricted%20jurisdictions">
          We will be able to provide you with our services if your country is not on the list of restricted ones, you can check it on the Terms of Service page. 
          </a> `,
        },
      ],
    },
    {
      accordTitle: "Part 2: Merchant Account",
      accordItems: [
        {
          title: "How to activate my account security?",
          descr: `<p>
          We recommend that our users protect their accounts by following these security procedures:
          Be sure to set a strong and unique password. The use of numbers, symbols, and upper and lower case letters in your password makes it difficult to guess.
          Email or 2FA confirmation: We recommend the use of email confirmations for all transactions for added security.
          </p>
          <br/>
          Device and connection security: We recommend that you use updated anti-virus and anti-malware software on your computer and mobile devices. Never open emails, attachments or other files from untrusted sources.`,
        },
        {
          title: "Can I change my email address?",
          descr: `<p>
          If you wish to change your current email address, please go to the Settings page and click on the Edit icon next to your email in the block where your account ID is written. In the ‘Change Email’ field, enter your current email address as well as a new email address and confirm it.
          </p>
<br/>
          A notification will be sent to your mail. It will contain a link, upon clicking on which we will confirm the change of your email address.`,
        },
        {
          title: "Can I change my account password?",
          descr: `<p>
          If you wish to change your password, please go to the Settings page and click on the Edit icon next to Password in the block where your account ID is written. In the ‘Change Password’ field, enter your current password as well as a new password and confirm it.

          </p>
          <br/>
          If you are not logged in to your account and want to reset your password to log in, use the password reset form at the bottom of the Sign In page.`,
        },
        {
          title: "I am not receiving email notifications from Connectee",
          descr: `<ul type="disc" style="margin:0pt; padding-left:0pt;">
          <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">Check your email settings and make sure there are no filters and/or other security systems which are blocking Connectee emails.</span></li>
          <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">Please also check your spam/junk folder.</span></li>
      </ul>
      <p style="margin-top:0pt; margin-bottom:0pt;"><br><span style="">The issue hasn&rsquo;t been resolved? Please open a support ticket or contact our support team at&nbsp;</span><a href="mailto:support@cryptopayments.com" style="text-decoration:none;"><u><span style=" color:#0563c1;">support@cryptopayments.com</span></u></a><span style="">. Our Support Team will be happy to assist you.</span></p>`,
        },
      ],
    },
    {
      accordTitle: "Part 3: Payments & Billing",
      accordItems: [
        {
          title: "How much does the service cost?",
          descr:
            '<a href="/feesAndLimits">You can create an account for free. Transaction fees can be seen in the Fees and Limits</a>',
        },
        {
          title: "What cryptocurrencies are supported?",
          descr:
            "Bitcoin (BTC), Bitcoin Cash (BCH), Chainlink (LINK), Dai (DAI), Ethereum (ETH), Litecoin (LTC), Tether (USDT) (ERC-20) (TRC-20)), Uniswap Token (UNI), USD Coin (USDC (ERC-20)), Wrapped Bitcoin (WBTC), Tron (TRX). ",
        },
        {
          title: "Are there any transaction limits?",
          descr: `<a href="/feesAndLimits">All details concerning transaction limits you can find on Fees and Limits page</a>`,
        },
        {
          title: "How long does it take to process a crypto payment?",
          descr:
            "Usually, it takes from several minutes to several dozens of minutes to gather a sufficient amount of confirmations for a transaction in the blockchain and be credited to the receiver’s balance after that, but our service provides you with an instant depositing feature that helps you and your users waist no time waiting till their funds arrive.",
        },
      ],
    },
    {
      accordTitle: "Part 4: Currency conversion",
      accordItems: [
        {
          title: "How do I convert cryptocurrency into fiat currency?",
          descr: `<p style="margin-top:0pt; margin-bottom:0pt;"><span style="">Follow the steps below to withdraw funds:</span></p>
          <ul type="disc" style="margin:0pt; padding-left:0pt;">
              <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">Enter your bank details or cryptocurrency wallet address in the Bank Details section and save them</span></li>
              <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">Select a wallet in the Wallets section and choose Crypto or Withdraw by wire as your withdrawal method.</span></li>
              <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">Enter the amount you want to withdraw, select the bank details you have entered and complete the request</span></li>
              <li style="margin-left:27.6pt; padding-left:8.4pt; ; font-size:10pt;"><span style=" font-size:12pt;">The created transaction will be submitted for processing and will be executed in the shortest possible time</span></li>
          </ul>
          <p style="margin-top:0pt; margin-bottom:0pt;"><span style="">An international bank wire transfer typically takes 2-5 business days, while a SEPA transfer takes 1-3 business days (with the exception of weekends and holidays) to reach your bank account.</span><br><span style="">Depending on your chosen currency and blockchain load, the average withdrawal time for a crypto transaction takes from several minutes to several hours.</span></p>`,
        },
        {
          title: "Which fiat currencies do you support?",
          descr:
            "Currently, we support the following currencies: EUR, USD, GBP. ",
        },
        {
          title: "What are the conversion fees?",
          descr:
            `<a href="/feesAndLimits">All details concerning the fees you can find on Fees and Limits page.</a>`,
        },
      ],
    },
  ],
};
