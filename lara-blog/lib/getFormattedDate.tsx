export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString); // Create a Date object from the string
  if (isNaN(date.getTime())) {
    // If the date is invalid, return a fallback
    return "Invalid date";
  }
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);
}
