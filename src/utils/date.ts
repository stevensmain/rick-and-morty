export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formatDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return formatDate;
};
