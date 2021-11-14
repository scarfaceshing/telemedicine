export default {
 shortDate(v: string): string {
  const date = new Date(v)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
 },
 shortTime(v: string): string {
  const time = new Date(v)
  let hours = time.getHours()
  let minutes: any = time.getMinutes()

  let ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = parseInt(minutes)
  minutes = minutes < 10 ? '0'+minutes : minutes

  return `${hours}:${minutes} ${ampm}`
 }
}
