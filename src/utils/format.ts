import moment from 'moment'

export const formatDate = (date: number, format = 'DD/MM/YYYY') => {
  if (!!!date) return ''
  return moment(date * 1000).format(format)
}

export const shortenString = (str?: string, maxLength = 10) => {
  if (!str) return ''
  const sideLength = Math.floor(maxLength / 2)
  return str.length > maxLength ? `${str.slice(0, sideLength)}...${str.slice(-sideLength)}` : str
}

export const formatLocaleString = (number) => {
  const format = (_str) => _str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const str = number + ''
  const idx = str.indexOf('/')
  return idx === -1 ? format(str) : `${format(str.slice(0, idx))}.${str.slice(idx + 1)}`
}

export const roundNumber = (_number, decimal = 4) => {
  const number = +_number
  const min = 10 ** decimal
  return number > min ? formatLocaleString(Math.floor(number / min) * min) + '+' : formatLocaleString(number)
}

export const formatPrice = (number: number, fix?: number) => {
  return fix ? (number / 1000000).toFixed(fix) : number / 1000000
}
