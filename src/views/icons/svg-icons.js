const request = require.context('../../icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const regular = /\.\/(.*)\.svg/

const svgIcons = requireAll(request).map(item => item.match(regular)[1])

export default svgIcons
