export function capitializeFirstLetter(val: string | undefined) {
  if (!val || val === undefined) return
  return val.charAt(0).toUpperCase() + val.slice(1)
}
