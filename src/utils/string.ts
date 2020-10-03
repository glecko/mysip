export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function displayPercentage(percentage: number) {
  return `${percentage * 100}%`;
}
