const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchPhones(search?: string, page = 1, pageSize = 8) {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  params.append("cursor", String((page - 1) * pageSize));
  params.append("page_size", String(pageSize));

  const res = await fetch(`${API_BASE}/phones/?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch phones");
  return res.json();
}