interface AccordItem {
  title: string;
  descr: string;
}

export interface IAccordeonData {
  accordTitle: string;
  accordItems: AccordItem[];
}

export interface ILegalPageData {
  pageTitle: string;
  date: string;
  pageDescr: string;
  accordeonContent: IAccordeonData[];
}
