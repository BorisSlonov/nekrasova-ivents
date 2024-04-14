"use server";
export const getImageSrc = (imgSrc: string) => {
  return process.env.CMS_URL + imgSrc;
};
