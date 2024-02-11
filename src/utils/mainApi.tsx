const auth = {
  baseUrl: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "no-cors",
  },
};

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res.json();
}

export async function getCategories() {
  /*   const res = await fetch(`${auth.baseUrl}/categories`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse); */

  return [
    {
      name: "fsdfs",
      description: "fsdfsdf",
    },
  ];
}

export async function getCategory(id: string) {
  /*   const res = await fetch(`${auth.baseUrl}/categories/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse); */

  return [
    {
      name: "fsdfs",
      description: "fsdfsdf",
    },
  ];
}

export async function getPages() {
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

export async function postPage(page) {
  console.log(page)
  const postPage = fetch(`${auth.baseUrl}/pages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "no-cors",
    },
    body: JSON.stringify({ text: `${page}` }),
  }).then(checkResponse);

  return postPage;
}
