export const getMainPageFaq = async () => {
  try {
    const result = await fetch(
      `${process.env.API_URL}main-page-faq?populate=deep`,
      {
        cache: "no-store",
      }
    );

    const faqData = await result.json();
    return faqData.data.attributes.mainPageFaqItems;
  } catch (error) {
    return;
  }
};
