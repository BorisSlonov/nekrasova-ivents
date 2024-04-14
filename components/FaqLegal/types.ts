interface AccordItem {
  title: string;
  descr: string;
  id: number;
}

export interface IAccordeonData {
  title: string;
  AccordeonItems: AccordItem[];
}

export interface ILegalPageData {
  pageTitle: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  pageDescr: string | null;
  accordeonContent: IAccordeonData[];
}
