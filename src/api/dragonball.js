import axios from "axios";

const BASE = "https://dragonball-api.com/api";

export async function getCharacters({ page = 1, limit = 20 } = {}) {
  const url = `${BASE}/characters?page=${page}&limit=${limit}`;
  const { data } = await axios.get(url);
  return Array.isArray(data) ? data : (data?.items ?? data?.characters ?? []);
}
