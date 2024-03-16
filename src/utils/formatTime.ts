export function formatTime(time: string) {
  const date = new Date(time)

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}
