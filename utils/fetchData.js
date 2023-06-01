// Get all characters from API
export const getAllCharacters = async () => {
  const uri = 'http://10.74.1.120:5000/api/characters'
  const response = await fetch(uri)
  return response.json()
}
