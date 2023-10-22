export function orderArray(originalArray, orderArray, key) {
  if (!originalArray || !orderArray || !key) return []

  return [...originalArray].sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })
}
