<template>
  <section>
    <div>
      Principal {{ loggedIn }}
    </div>
    <b-carousel
      id="carousel-1"
      :interval="3000"
      background=""
      style="text-shadow: 1px 1px 2px #333"
      fade
    >
      <b-carousel-slide
        id="c1"
        img-src="https://img.freepik.com/fotos-gratis/fundo-de-folhas-verdes-tropicais_53876-88891.jpg?t=st=1655655273~exp=1655655873~hmac=130a104d203ac8ab45624aaaa9f7d5fb5dea77ef494644a3636d38a0f738fc3a&w=1380"
      >
      </b-carousel-slide>
      <b-carousel-slide
        id="c2"
        img-src="https://img.freepik.com/fotos-gratis/foto-detalhada-de-uma-bela-folha-de-samambaia-iluminada-por-raios-de-sol-raios-de-sol-de-primavera-brilham-atraves-das-folhas-verdes-de-samambaias-nas-profundezas-de-uma-pitoresca-floresta-de-pinheiros-nas-montanhas_661209-107.jpg?t=st=1655656374~exp=1655656974~hmac=1dfe80525fb4a93927ca945d17d6590923c797d847a3623393ae8bdb99fc28d1&w=1380"
      >
      </b-carousel-slide>
    </b-carousel>
    <div v-for="planta in plantas" :key="planta.id">
      <div class="titlepl">{{ planta.tipo_planta }}</div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-card
              img-src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
              img-alt="Image"
              img-top
              tag="article"
              style="height: 550px"
              class="titlep mb-2"
            >
              <hr class="hrH" />
              <div class="titulo5">{{ planta.nome }}</div>
              <b-card-text class="textop"> {{ planta.preco }} </b-card-text>
              <b-button class="btn1" href="/produto" variant="primary"
                >Adicionar ao Carrinho</b-button
              >
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
// import axios from "axios";
import { mapState } from 'vuex' ;

export default {
  name: "Planta",
  computed:{
    ...mapState('auth', ['loggedIn'])
  },
  data() {
    return {
      planta: {},
      plantas: [],
    };
  },
  async created() {
    this.getPlanta();
  },
  methods: {
    async getPlanta() {
      this.plantas = await this.$get("plantas/");
    },
  },
};
</script>



<style>
a.btn.btn1.btn-primary {
  background: #15d5a5;
  background: linear-gradient(7deg, #1d583b 0%, #41a17b 66%);
  border-radius: 5px;
  border: 0;
  padding: 10px;
  font-size: 17px;
  margin: 10% 0 0 5%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  white-space: nowrap;
}

a.btn.btn1.btn-primary:hover {
  background: #328051a1;
}
.imgpr {
  width: 300px;
  height: 300px;
}
.card {
  height: 400px;
  width: 400px;
}

.card-img-top {
  height: 300px;
  width: 300px;
  border-radius: 3px;
}
.titlep {
  text-align: left;
  box-shadow: 0 0 2px 1px rgb(17, 63, 17);
  border-radius: 5px;
}
.card-text {
  font-family: "Jomolhari", serif;
  font-size: 22px;
}
.titlepl {
  margin: 5% 0 0 20%;
  font-size: 29px;
  color: #05701c;
  padding: 30px;
  font-style: normal;
  font-weight: 400;
}

.titlepl2 {
  margin: 5% 0 0 22%;
  font-size: 29px;
  color: #05701c;
  font-style: normal;
  font-weight: 400;
}
.titulo5 {
  color: #328051a1; /* fallback for old browsers */
  color: -webkit-(to top, #001510, #00bf8f); /* Chrome 10-25, Safari 5.1-6 */
  color: #328051a1; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 100%;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  max-width: 306px;
  font-size: 21px;
  font-weight: bold;
  white-space: nowrap;
}
.hrH {
  border-color: black;
}
.textop {
  margin: 3% 0 3% 0;
  text-align: left;
}
#c1 {
  height: 620px;
}
#c2 {
  height: 620px;
}
@media (max-width: 844px) {
  .dprincipal {
    width: auto;
    height: auto;
  }
  .row {
    margin: 0;
  }
  .navpr {
    box-shadow: none;
  }

  .navbar-nav {
    margin-right: 100px;
  }
  #c1 {
    height: 280px;
  }
  #c2 {
    height: 280px;
  }
  .section {
    margin: 0 0 30% 0;
  }
  #footer {
    margin: 0% 10% 10% 0%;
    display: flex;
  }
  .titlepl {
    font-size: 25px;
    text-align: left;
    margin: 0 0 5% 5%;
    padding: 10px;
  }
  .titlepl2 {
    white-space: nowrap;
    font-size: 25px;
    text-align: left;
    margin: 10% 0 5% 6%;
    padding: 10px;
  }
  .col {
    padding: 20px;
    margin: 0px 8% -5px -50px;
  }
  .card {
    margin-left: 50px;
    width: 270px;
  }
}
</style>
