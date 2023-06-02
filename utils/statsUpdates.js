export const updateCharWithBonus = async (choice, selectedCharacter, updateAttribute) => {
  // Bonus handler
  if (choice.bonus) {
    switch (choice.bonus.attribut) {
      case 'vie':
        updateAttribute('vie', selectedCharacter.vie + choice.bonus.value)
        break
      case 'charisme':
        updateAttribute('charisme', selectedCharacter.charisme + choice.bonus.value)
        break
      case 'force':
        updateAttribute('force', selectedCharacter.force + choice.bonus.value)
        break
      case 'intelligence':
        updateAttribute('intelligence', selectedCharacter.intelligence + choice.bonus.value)
        break
      case 'courage':
        updateAttribute('courage', selectedCharacter.courage + choice.bonus.value)
        break
      case 'energie':
        updateAttribute('energie', selectedCharacter.energie + choice.bonus.value)
        break
      case 'dexterite':
        updateAttribute('dexterite', selectedCharacter.dexterite + choice.bonus.value)
        break
      default:
        break
    }
  }
}

export const updateCharWithMalus = async (choice, selectedCharacter, updateAttribute) => {
  // Malus handler
  if (choice.malus) {
    switch (choice.malus.attribut) {
      case 'vie':
        updateAttribute('vie', selectedCharacter.vie + choice.malus.value)
        break
      case 'charisme':
        updateAttribute('charisme', selectedCharacter.charisme + choice.malus.value)
        break
      case 'force':
        updateAttribute('force', selectedCharacter.force + choice.malus.value)
        break
      case 'intelligence':
        updateAttribute('intelligence', selectedCharacter.intelligence + choice.malus.value)
        break
      case 'courage':
        updateAttribute('courage', selectedCharacter.courage + choice.malus.value)
        break
      case 'energie':
        updateAttribute('energie', selectedCharacter.energie + choice.malus.value)
        break
      case 'dexterite':
        updateAttribute('dexterite', selectedCharacter.dexterite + choice.malus.value)
        break
      default:
        break
    }
  }
}
