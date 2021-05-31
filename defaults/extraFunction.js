export const  replaceDate = (val) => {
  return String(val).replace(/[^A-Z0-9]/g, '')
}

export const addMonthtoDate = month => {
  const currentDate = new Date()
  const finalDate = currentDate.setMonth(currentDate.getMonth() + month)

  return finalDate;
}
export const parseDate = (val) => {
  const finalDate = addMonthtoDate(val)
  const dateparse = new Intl.DateTimeFormat('ru-Ru', { year: 'numeric', month: 'short', day: '2-digit' }).format(finalDate)
  return dateparse;
}

export const amountSpace = (val) => {
  if(val && val!== undefined) {
    val = val.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')
  }else {
    val = ''
  }
  return val
}
