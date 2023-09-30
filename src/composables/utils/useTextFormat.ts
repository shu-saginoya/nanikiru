export const useTextFormat = () => {
  const fullSpacesToHalf = (text: string): string => {
    return text.replace(/\s+/g, ' ')
  }

  return {
    fullSpacesToHalf
  }
}
