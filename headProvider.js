const React = require(`react`)
const { HeadProvider } = require(`react-head`)

const headTags = []

const wrapRootElement = ({ element }, { whitelist }) => {
  const props = { headTags }
  if (whitelist) props.whitelist = whitelist
  return <HeadProvider {...props}>{element}</HeadProvider>
}

module.exports = {
  headTags,
  wrapRootElement,
}
