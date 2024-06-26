export const selectAllInlinetext = (e: React.FocusEvent<HTMLInputElement>) => {
  e.target.focus()
  e.target.select()
}

//OnKeyDown
export const saveAfterEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement
  if (e.key === 'Enter') {
    e.preventDefault()
    target.blur()
  }
}
