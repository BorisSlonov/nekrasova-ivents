export const getFaqPageData = async () => {
  try {
    const result = await fetch(`${process.env.API_URL}faq/?populate=deep`, {
      cache: "no-store",
    });

    const pageData = await result.json();

    return pageData.data.attributes;
  } catch (error) {
    return;
  }
};
