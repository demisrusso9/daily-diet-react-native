export function formatDate(date: string) {
  const dateObject = new Date(date)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'numeric',
    year: '2-digit',
  });

  return formatter.format(dateObject).replaceAll('/', '.');
}