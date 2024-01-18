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
  const res = await fetch(`${auth.baseUrl}/categories`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}

export async function getCategory(id) {
  const res = await fetch(`${auth.baseUrl}/categories/${id}`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  return res;
}
