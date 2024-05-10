export const getCategoriesUrl = () => {
    return `${process.env.API_URL}categories?populate=*&sort[0]=id:desc`;
};
