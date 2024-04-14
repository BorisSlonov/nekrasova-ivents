interface AccordItem {
  title: string;
  descr: string;
  id: number;
}

export interface IAccordeonData {
  accordTitle: string;
  accordItems: AccordItem[];
}

export interface ILegalPageData {
  pageTitle: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageDescr: string;
  Accordeon: AccordItem[];
}
