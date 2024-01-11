import { notFound } from "next/navigation";

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

export async function getCategories(url) {
  const res = await fetch(`${auth.baseUrl}/categories`, {
    headers: auth.headers,
    next: { revalidate: 1 },
  }).then(checkResponse);

  const pagefound = res.some((item) => item.id === url);

  if (!pagefound) {
    notFound();
  }

  return res;
}
