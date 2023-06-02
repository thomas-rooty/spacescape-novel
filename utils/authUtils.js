import jwt_decode from 'jwt-decode'

const api = 'http://192.168.1.61:5000/api'

// Function that log in an admin
export const loginUser = async (email, password) => {
  const uri = `${api}/users/login?email=${email}&password=${password}`
  const response = await fetch(uri)
  const res = await response.json()

  // Handle no user found
  if (res.nouserfound) {
    return false
  }

  // Return the decoded token and the user
  const decodedInfos = jwt_decode(res.token)
  return { user: decodedInfos, token: res.token }
}
