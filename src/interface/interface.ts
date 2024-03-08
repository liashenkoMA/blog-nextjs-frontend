export interface ICategories {
  url: string;
  metaTitle: string;
  metaDescription: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface IAuthor {
  author: string;
  avatarLink: string;
}

export interface IPage {
  text: string;
  url: string;
  postImage: string;
  postAltImage: string;
  title: string;
  description: string;
  header: string;
  categories: string;
  publickDate: string;
  author: [IAuthor];
  tags: [ITags]
  readTime: string;
}

export interface ITags {
  url: string;
  metaTitle: string;
  metaDescription: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}
