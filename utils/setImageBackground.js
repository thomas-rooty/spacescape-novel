export const setImageBackground = ({ scenario }) => {
  // Get the selected scenario level and histoire
  const level = scenario?.niveau
  const histoire = scenario?.histoire

  // Add a leading 0 to the level if needed
  const histoireWithLeadingZero = histoire < 10 ? `0${histoire}` : histoire

  // Build the image URL
  return `https://github.com/thomas-rooty/spacescape-novel/blob/master/assets/scenarios/${histoireWithLeadingZero}/${level}.jpeg?raw=true`
}
