export function encodeQueryData(data: Record<string, number | string>): string {
  const res = [];
  for (const d in data) {
    res.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return res.join('&');
}
