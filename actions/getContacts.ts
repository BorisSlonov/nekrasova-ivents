import { IContactData } from "@/components/Footer/Social/types";

export const getContacts = async (): Promise<IContactData> => {
  try {
    const result = await fetch(`${process.env.API_URL}contact`, {
      cache: "no-store",
    });

    const contacts = await result.json();

    return contacts.data;
  } catch (error) {
    return {
      id: 1,
      attributes: {
        email: "support@decornekrasova.com",
        Instagram:
          "https://www.instagram.com/crypto_payments?igsh=MXh6Y3EydXhwaDV2aA==",
        telegram: "https://t.me/decornekrasova_B2B",
        facebook:
          "https://www.facebook.com/profile.php?id=61555951127771&mibextid=LQQJ4d",
        LinkedIn: "https://www.linkedin.com/company/decornekrasova-com/",
      },
    };
  }
};
