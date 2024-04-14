export const getLegalPage = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.API_URL}legal-pages/${id}?populate=*`,
      {
        cache: "no-store",
      }
    );

    const pageData = await result.json();
    return pageData.data.attributes;
  } catch (error) {
    return;
  }
};
