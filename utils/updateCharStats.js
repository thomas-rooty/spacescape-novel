export const updateCharStats = async (choice, selectedCharacter, updateSelectedCharacter) => {
  switch (choice.bonus.attribut) {
    case 'vie':
      updateSelectedCharacter({
        ...selectedCharacter,
        vie: selectedCharacter.vie + choice.bonus.value,
      })
      break
    case 'charisme':
      updateSelectedCharacter({
        ...selectedCharacter,
        charisme: selectedCharacter.charisme + choice.bonus.value,
      })
      break
    case 'dexterite':
      updateSelectedCharacter({
        ...selectedCharacter,

        dexterite: selectedCharacter.dexterite + choice.bonus.value,
      })
      break
    case 'courage':
      updateSelectedCharacter({
        ...selectedCharacter,
        courage: selectedCharacter.courage + choice.bonus.value,
      })
      break
    case 'energie':
      updateSelectedCharacter({
        ...selectedCharacter,
        energie: selectedCharacter.energie + choice.bonus.value,
      })
      break
    case 'force':
      updateSelectedCharacter({
        ...selectedCharacter,
        force: selectedCharacter.force + choice.bonus.value,
      })
      break
    case 'intelligence':
      updateSelectedCharacter({
        ...selectedCharacter,
        intelligence: selectedCharacter.intelligence + choice.bonus.value,
      })
      break
    default:
      break
  }
}
