export const callGreenApi = async (
  id: string,
  token: string,
  method: string,
  body?: any
): Promise<any> => {
  const url = `https://api.green-api.com/waInstance${id}/${method}/${token}`;
  const options: RequestInit = body
    ? {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    : { method: "GET" };

  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};
