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
  title: string;
  description: string;
  header: string;
  categories: string;
  publickDate: string;
  author: [IAuthor];
  readTime: string;
}
