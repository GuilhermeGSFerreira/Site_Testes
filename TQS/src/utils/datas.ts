export function obterProximoDiaUtil() {
  const data = new Date()
  data.setDate(data.getDate() + 1)

  while (data.getDay() === 0) {
    data.setDate(data.getDate() + 1)
  }

  return `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}-${String(data.getDate()).padStart(2, '0')}`
}

export function formatarData(data: string) {
  if (!data) return ''

  return new Intl.DateTimeFormat('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${data}T12:00:00`))
}
