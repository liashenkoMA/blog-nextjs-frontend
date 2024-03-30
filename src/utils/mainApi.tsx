import { ITags } from "@/interface/interface";
import { stringify } from "querystring";

const auth = {
  baseUrl: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "no-cors",
  },
};

const author = {
  author: "Максим Ляшенко",
  avatarLink:
    "http://localhost:3000/photos/upload/belka-61-1024x768_1710594974058.jpg",
};

function checkResponse(res) {
  if (!res.ok) {
    return res.status;
  }
  return res.json();
}

/* User */

export async function postUser(
  email: string,
  password: string,
  name: string,
  avatarLink: string,
  admin: boolean
) {
  const postTag = fetch(`${auth.baseUrl}/user`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      email,
      password,
      name,
      avatarLink,
      admin,
    }),
  }).then(checkResponse);

  return postUser;
}

export async function onLogin(email, password) {
  const res = await fetch(`${auth.baseUrl}/auth/signin`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  })
    .then(checkResponse)
    .then((user) => {
      localStorage.setItem("jwt", user.access_token);
      return user;
    });

  return res;
}

export async function getUser(id) {
  const res = await fetch(`${auth.baseUrl}/user/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

/* Tags */

export async function postTags(
  urlTags: string,
  metaTitleTags: string,
  metaDescriptionTags: string,
  nameTags: string,
  descriptionTags: string,
  imageUrlTags: string,
  imageAltTags: string
) {
  const postTag = fetch(`${auth.baseUrl}/tags`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      url: urlTags,
      metaTitle: metaTitleTags,
      metaDescription: metaDescriptionTags,
      name: nameTags,
      description: descriptionTags,
      imageUrl: imageUrlTags,
      imageAlt: imageAltTags,
    }),
  }).then(checkResponse);

  return postTag;
}

export async function getTags() {
  const res = await fetch(`${auth.baseUrl}/tags`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getTag(id: string) {
  const res = await fetch(`${auth.baseUrl}/tags/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCountTag(id: string) {
  const res = await fetch(`${auth.baseUrl}/tags/count/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

/* Categories */

export async function getCategories() {
  const res = await fetch(`${auth.baseUrl}/categories`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCategoryPages(id: string) {
  const res = await fetch(`${auth.baseUrl}/categories/pages/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCategoryCountPages(id: string, params: string) {
  const queryPar = {
    id,
    params,
  };

  const res = await fetch(
    `${auth.baseUrl}/categories/pages/count/${stringify(queryPar)}`,
    {
      headers: auth.headers,
      next: { revalidate: 1 },
    }
  ).then(checkResponse);

  return res;
}

export async function getCategory(id: string) {
  const res = await fetch(`${auth.baseUrl}/categories/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCountCategories(id: string) {
  const res = await fetch(`${auth.baseUrl}/categories/count/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function postCategory(
  urlCategory: string,
  metaTitleCategory: string,
  metaDescriptionCategory: string,
  nameCategory: string,
  descriptionCategory: string,
  imageUrlCategory: string,
  imageAltCategory: string
) {
  const postCategory = fetch(`${auth.baseUrl}/categories`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      url: urlCategory,
      metaTitle: metaTitleCategory,
      metaDescription: metaDescriptionCategory,
      name: nameCategory,
      description: descriptionCategory,
      imageUrl: imageUrlCategory,
      imageAlt: imageAltCategory,
    }),
  }).then(checkResponse);

  return postCategory;
}

/* Files */

export async function postFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${auth.baseUrl}/photos/upload`, {
    method: "POST",
    body: formData,
  }).then(checkResponse);

  return res;
}

/* Blog */

export async function getAllPages() {
  const res = await fetch(`${auth.baseUrl}/blogs/`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getLimitPages(id) {
  const res = await fetch(`${auth.baseUrl}/blogs/pages/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCountPages() {
  const res = await fetch(`${auth.baseUrl}/blogs/count`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

/* Pages */

export async function postComment(url, name, comment, publickDate) {
  const res = await fetch(`${auth.baseUrl}/pages/comments/${url}`, {
    method: "PATCH",
    headers: auth.headers,
    body: JSON.stringify({
      author: name,
      textComment: comment,
      publickDate: publickDate,
    }),
  });
}

export async function getFeaturedPages() {
  const res = await fetch(`${auth.baseUrl}/pages`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getLimitFeaturedPages(id) {
  const res = await fetch(`${auth.baseUrl}/blogs/featlimit/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCountFeaturedPages() {
  const res = await fetch(`${auth.baseUrl}/blogs/featcount`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getTagPages(id) {
  const res = await fetch(`${auth.baseUrl}/pages/tag/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getTagCountPages(id: string, params: string) {
  const queryPar = {
    id,
    params,
  };

  const res = await fetch(
    `${auth.baseUrl}/pages/tag/count/${stringify(queryPar)}`,
    {
      headers: auth.headers,
      next: { revalidate: 1 },
    }
  ).then(checkResponse);

  return res;
}

export async function getPage(id: string) {
  const res = await fetch(`${auth.baseUrl}/pages/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function postPage(
  markdownVal: string,
  urlPage: string,
  postImage: string,
  postAltImage: string,
  pageTitle: string,
  pageDescription: string,
  pageHeader: string,
  categoriesPage: string,
  readTime: string,
  popularPage: boolean,
  checkTags: ITags
) {
  const postPage = fetch(`${auth.baseUrl}/pages`, {
    method: "POST",
    headers: auth.headers,
    body: JSON.stringify({
      url: urlPage,
      postImage: postImage,
      postAltImage: postAltImage,
      metaTitle: pageTitle,
      metaDescription: pageDescription,
      header: pageHeader,
      categories: categoriesPage,
      text: `${markdownVal}`,
      author: author,
      publickDate: new Date().toISOString().slice(0, 10),
      changekDate: new Date().toISOString().slice(0, 10),
      readTime: readTime,
      popularPage: popularPage,
      tags: checkTags,
    }),
  }).then(checkResponse);

  return postPage;
}
