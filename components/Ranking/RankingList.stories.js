import { storiesOf } from '@storybook/vue'
import { center } from '../../.storybook/decorators'

import RankingList from './RankingList'

import { rankingEntry } from './RankingEntry.stories'

const rankingList = {
  scores: Array.from(Array(3).keys()).map(i => ({
    ...rankingEntry,
    troop: `Troop${i}`
  }))
}

storiesOf('Ranking/RankingList', module)
  .addDecorator(center)
  .add('default', () => {
    return {
      components: { RankingList },
      template: `<ranking-list :scores="scores" />`,
      data: () => rankingList
    }
  })
