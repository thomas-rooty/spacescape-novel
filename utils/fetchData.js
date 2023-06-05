const api = 'http://10.74.1.120:5000/api'

// Get all characters from API
export const getAllCharacters = async () => {
  const uri = `${api  }/characters`
  const response = await fetch(uri)
  return response.json()
}

// Get all the scenarios from API
export const getAllScenarios = async () => {
  const uri = `${api  }/scenarios`
  const response = await fetch(uri)
  return response.json()
}

// Get all the unplanned from API
export const getAllUnplanned = async () => {
  const uri = `${api  }/unplanned`
  const response = await fetch(uri)
  return response.json()
}
