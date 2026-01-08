export function formatDate(inputDate) {
  const date = new Date(inputDate);

  if (isNaN(date)) {
    throw new Error("Invalid Date");
  }

  const day = date.getDate();
  const month = date.toLocaleString("en-IN", { month: "short" }); // Jan, Feb, etc.
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
