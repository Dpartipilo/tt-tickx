export interface IData {
  center: string;
  date_created: string;
  description: string;
  location: string;
  media_type: string;
  nasa_id: string;
  title: string;
}

export interface IItemLinks {
  href: string;
  rel: string;
  render: string;
}

export interface IItem {
  data: IData[];
  href: string;
  links: IItemLinks[]
}

export interface IItems {
  items: IItem[]
}

export interface ICollectionLinks {
  href: string;
  prompt: string;
  rel: string;
}

export interface nasaCollectionProps {
  href: string;
  items: IItems;
  links: ICollectionLinks;
  metadata: { total_hits: number };
  version: string;
}