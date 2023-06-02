// Function that log in an admin
export const loginUser = async (email, password) => {
  const uri = `http://10.74.1.120:5000/api/users/login?email=${email}&password=${password}`
  const response = await fetch(uri)
  const data = await response.json()
  if (data.nouserfound) {
    return false
  }
  return data
}
