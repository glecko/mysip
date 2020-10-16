export function sameDay(dateA: Date, dateB: Date) {
  return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear();
}
