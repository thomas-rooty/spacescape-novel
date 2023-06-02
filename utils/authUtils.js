const api = 'http://192.168.1.61:5000/api'

// Function that log in an admin
export const loginUser = async (email, password) => {
  const uri = `${api}/users/login?email=${email}&password=${password}`
  const response = await fetch(uri)
  const data = await response.json()
  if (data.nouserfound) {
    return false
  }
  return data
}
