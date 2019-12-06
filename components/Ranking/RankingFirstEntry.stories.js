import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import RankingFirstEntry from './RankingFirstEntry'

import { rankingEntry } from './RankingEntry.stories'

storiesOf('Ranking/RankingFirstEntry', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { RankingFirstEntry },
      template: `<ranking-first-entry :troop="troop" :points="points" />`,
      data: () => rankingEntry
    }
  })
