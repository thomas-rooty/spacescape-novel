export const minAttributeMeet = (condition, selectedCharacter) => {
  const { attribut, min } = condition
  const characterAttribut = selectedCharacter[attribut]
  return characterAttribut >= min
}
