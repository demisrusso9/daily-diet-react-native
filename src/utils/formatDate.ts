interface Props {
  date: string;
  dotFormat: boolean
}

export function formatDate({ date, dotFormat }: Props) {
  const dateObject = new Date(date)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'numeric',
    year: '2-digit',
  });

  const formattedDate = formatter.format(dateObject);

  if (dotFormat) {
    return formattedDate.replaceAll('/', '.');
  }

  return formattedDate
}