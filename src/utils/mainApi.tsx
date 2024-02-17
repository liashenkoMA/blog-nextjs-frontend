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
  avatarLink: "fsdfsdf",
};

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${auth.baseUrl}/categories`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCategory(id: string) {
  const res = await fetch(`${auth.baseUrl}/categories/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getAllPages() {
  const res = await fetch(`${auth.baseUrl}/blogs`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCategoriesPages() {
  const res = await fetch(`${auth.baseUrl}/pages`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

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
  markdownVal,
  urlPage,
  pageTitle,
  pageDescription,
  pageHeader,
  categoriesPage,
  readTime
) {
  const postPage = fetch(`${auth.baseUrl}/pages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "no-cors",
    },
    body: JSON.stringify({
      url: urlPage,
      metaTitle: pageTitle,
      metaDescription: pageDescription,
      header: pageHeader,
      categories: categoriesPage,
      text: `${markdownVal}`,
      author: author,
      publickDate: new Date().toISOString().slice(0, 10),
      readTime: readTime,
    }),
  }).then(checkResponse);

  return postPage;
}
