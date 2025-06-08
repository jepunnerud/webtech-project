export const slugify = (text: string): string => {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export const normalizeDecadeToSlug = (decadeInput: string): string => {
  const cleanedInput = decadeInput.replace(/'s/g, 's').replace(/'/g, '')
  if (cleanedInput.endsWith('s')) {
    const numPart = cleanedInput.substring(0, cleanedInput.length - 1)
    if (numPart.length === 2) return `19${numPart}s`
    return `${numPart}s`
  }
  if (cleanedInput.length === 2) return `19${cleanedInput}0s`
  return slugify(decadeInput)
}
