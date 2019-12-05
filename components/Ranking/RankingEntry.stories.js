import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import RankingEntry from './RankingEntry'

export const rankingEntry = {
  troop: 'Test',
  points: 32
}

storiesOf('Ranking/RankingEntry', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { RankingEntry },
      template: `<ranking-entry :troop="troop" :points="points" />`,
      data: () => rankingEntry
    }
  })
