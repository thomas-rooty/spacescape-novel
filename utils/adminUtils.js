const api = 'http://192.168.1.61:5000/api'

// Function that adds a scenario using the api
export const addScenario = async (scenario, token) => {
  const uri = `${api}/scenarios`
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': token,
    },
    body: JSON.stringify(scenario),
  })
  return await response.json()
}
