export const formatDate = oldDate => {
  const date = new Date(oldDate)

  const dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  const mm =
    date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  const yyyy = date.getFullYear()

  return `${dd}-${mm}-${yyyy}`
}
