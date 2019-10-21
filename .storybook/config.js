import { configure } from '@storybook/vue'

import '../assets/css/main.css'

const req = require.context('../components', true, /\.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
