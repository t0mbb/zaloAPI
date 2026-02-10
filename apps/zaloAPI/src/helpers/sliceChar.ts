export function limitTextUnicode(text: string, max = 80) {
  if (!text) return '';
  const chars = Array.from(text);
  return chars.length > max
    ? chars.slice(0, max - 3).join('') + '...'
    : text;
}