// Function to generate initials from a name
export function getInitials(name: string, length: 1 | 2 = 2): string {
  const parts = name.trim().split(' ').filter(Boolean);
  if (length === 1) {
    return parts[0]?.[0]?.toUpperCase() || '';
  }
  return parts
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 70%, 50%)`;
};
