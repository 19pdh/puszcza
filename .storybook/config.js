import { configure } from '@storybook/vue'

if (!process.env.JEST_WORKER_ID) {
  require('../assets/css/main.css')
}

const req = require.context('../components', true, /\.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
