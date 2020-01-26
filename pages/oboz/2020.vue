<template>
  <section class="oboz">
    <div class="header">
      <div class="logo">
        <img style="z-index: 1" src="/assets/2020.svg" alt="" />
        <h1 style="z-index: 9">Obóz 2020</h1>
      </div>
      <div class="troops">
        <h3>19 PDH Puszcza</h3>
        <h3>7 PDH Binduga</h3>
        <h3>7 PDH Watra</h3>
      </div>
    </div>
    <day-countdown
      v-if="awaiting"
      text="Do obozu zostało:"
      :end-date="endDate"
    />
    <google-drive-link
      v-else-if="photos"
      text="Zobacz zdjęcia z obozu"
      :link="photos"
    />
    <camp-map
      src="https://maps.google.com/maps?q=Jezioro%20Spore&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
    <div v-if="posts" style="width: 100%">
      <h3 class="story" style="margin: 10vh 10vmin">
        To się działo na obozie
      </h3>
      <pure-post-list :posts="posts" style="margin-bottom: 30px" />
    </div>
    <empty-camp-story v-else />
  </section>
</template>

<script>
import axios from 'axios'

import PurePostList from '~/components/Posts/PostList/PurePostList'
import DayCountdown from '~/components/DayCountdown'
import CampMap from '~/components/CampMap'
import EmptyCampStory from '~/components/Posts/EmptyCampStory'
import GoogleDriveLink from '~/components/GoogleDriveLink'

import { parsePosts } from '~/components/Posts/PostList'

export default {
  components: {
    PurePostList,
    DayCountdown,
    CampMap,
    GoogleDriveLink,
    EmptyCampStory,
    PurePostList,
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Obóz 2020',
        },
      ],
    }
  },
  async asyncData() {
    try {
      let posts = await axios.get(
        `https://puszcza.netlify.com/api/category/oboz2020.json`
      )
      console.log(posts)
      return {
        posts: parsePosts(posts.data),
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      posts: null,
      endDate: new Date(2020, 6, 7),
    }
  },
  computed: {
    days() {
      let now = new Date(Date.now())
      return Math.round((this.endDate.getTime() - now.getTime()) / 86400000)
    },
    awaiting() {
      return this.days > 0
    },
  },
}
</script>

<style scoped>
.oboz {
  position: relative;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10vmax 0 5vmax 0;
}

h1 {
  font-size: 3em;
  background: black;
  color: white;
  padding: 0.25em 0.75em;
  width: max-content;
  margin-top: -4px;
}

.troops {
  display: flex;
  flex-direction: row;
}

.troops h3 {
  margin: 10px;
}

@media (max-width: 480px) {
  .troops {
    flex-direction: column;
  }

  .logo img {
    width: 100px;
  }

  h1 {
    font-size: 2em;
  }
}

.oboz::after {
  width: 100px;
  height: 200px;
  background: url('/assets/fether.svg');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  right: 5%;
}

@media (min-width: 750px) {
  .oboz::after {
    content: '';
  }
}

@media (min-width: 910px) {
  .oboz::after {
    content: none;
  }
}

@media (min-width: 1210px) {
  .oboz::after {
    content: '';
  }
}

.story::before,
.story::after {
  content: '';
  background-image: url('/assets/tomahawk.svg');
  background-size: contain;
  width: 70px;
  height: 70px;
  display: block;
  top: 30px;
  margin: auto;
  margin-bottom: 20px;
}

.story::after {
  display: none;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipX;
  -ms-filter: 'FlipX';
}

@media (min-width: 510px) {
  .story::before,
  .story::after {
    display: inline-block;
    position: relative;
    margin: 0 10px;
  }
}
</style>
