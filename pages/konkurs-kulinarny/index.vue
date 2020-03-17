<template>
  <div id="konkurs">
    <img src="/assets/konkurs-kulinarny/chef_hat.svg" />
    <h1>Konkurs Kulinarny</h1>
    <!--<google-drive-link
      text="Zagłosuj!"
      link="https://forms.gle/CCqiSr7Gt3fNWsqo6"
      style="max-width: 900px; margin: 60px 0"
    />-->
    <div class="alert">
      Z woli ludu konkurs został przedłużony do jutra
    </div>
    <section>
      <h2>Druhowie!</h2>

      <p>
        Z powodu wirusa wszyscy musimy siedzieć w swoich domach. Nie znaczy to
        jednak że mamy siedzieć bezczynnie! Dlatego rusza “Konkurs Kulinarny” -
        pierwszy z serii aktywności “wirusowych”. Zasady konkursu są
        następujące:
      </p>

      <p>
        Ugotuj z tego co masz posiłek / deser dla całej rodziny. Nagraj film
        prezentujący twoją potrawę (mile widziane są opinie domowników 😉). Film
        razem z przepisem prześlij na adres
        <a href="mailto:patryk.niedzwiedzinski@zhr.pl"
          >patryk.niedzwiedzinski@zhr.pl</a
        >
        do <b>środy</b> godz. 18:30.
      </p>

      <h3>Głosowanie</h3>
      <p>
        Wszystkie przesłane filmy pojawią się na tej stronie, a
        <b>w środę</b> o godzinie 19:00 pojawi się tutaj możliwość głosowania.
        Głosować może każdy. Głosowanie będzie trwać do godziny 21:30.
      </p>

      <h3>Nagroda</h3>
      <p>
        Za każde przystąpienie jest 10 punktów do punktacji zastępów, a dla
        zwycięzcy 30 punktów do punktacji zastępów + NIESPODZIANKA.
      </p>
    </section>
    <img id="knifes" src="/assets/konkurs-kulinarny/knifes.svg" />
    <section id="submissions">
      <h2>Przesłane filmy</h2>
      <div>
        <div v-for="{ title, id } in submissions" :key="id" class="link">
          <a :href="id">
            {{ title }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleDriveLink from '~/components/GoogleDriveLink'

export default {
  name: 'KonkursKulinarny',
  components: { GoogleDriveLink },
  head() {
    return {
      title: 'Konkurs Kulinarny - 19 PDH Puszcza',
    }
  },
  data() {
    return {
      submissions: [
        {
          title: 'Tymoteusz Jóźwiak - Risotto',
          id: 'https://we.tl/t-Osxf2TEjiX',
        },
        {
          title: 'Paweł Nowak - Ciasto czekoladowe z kaszy',
          id: 'https://we.tl/t-Mw0BwkkDor',
        },
        {
          title: 'Krzysztof Śmiechowski - Serce z jajka i parówki',
          id: 'https://youtu.be/kO2UvFuKmPg',
        },
        {
          title: 'Tymon Litewka - Jajo w chlebie',
          id: 'https://we.tl/t-aRzZloihvo',
        },
      ],
    }
  },
}
</script>

<style scoped>
.alert {
  background: #eeeeee;
  padding: 20px;
  margin: 40px 0;
}

#konkurs {
  padding: 80px 10px;
}

h1 {
  letter-spacing: 0.175em;
  text-transform: uppercase;
}

section {
  max-width: 900px;
  text-align: left;
}

#submissions {
  text-align: center;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 25px 0;
}

#submissions img {
  max-width: 80%;
}

#knifes {
  margin: 50px 25px;
  max-width: 35vw;
}
</style>
