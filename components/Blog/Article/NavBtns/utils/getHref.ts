import { articlesConfig } from "@/components/Blog/articlesConfig";

export const getHref = (btnType: "prev" | "next", pageId: string) => {
  const configKeys = Object.keys(articlesConfig);

  const isStart = configKeys[0] === pageId;
  const isEnd = Number(pageId) === configKeys.length;

  if (btnType === "prev") {
    if (isStart) {
      return pageId;
    }

    return Number(pageId) - 1;
  } else {
    if (isEnd) {
      return pageId;
    }

    return Number(pageId) + 1;
  }
};
