<template>
  <div class="dprincipal">
    <b-navbar class="navpr" toggleable="lg" type="dark">
      <b-navbar-brand id="navb" disabled> <h3>PJG</h3></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
            </b-navbar-nav>
          <b-nav-item-dropdown class="drop" text="Produtos" right>
            <b-dropdown-item href="#" class="drop1"
              >Plantas de Áreas Externas</b-dropdown-item
            >
            <b-dropdown-item href="#" class="drop2"
              >Plantas de Sombras
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="Carrinho" text="Carrinho">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
              alt=""
              width="200px"
              height="130px
              "
              class="imgcarrinho"
            />
            <div class="NomeP">
              Areca Bambu
              <div class="PreçoP">Valor = 45,00</div>
            </div>
            <br />
            <hr class="hrc" />
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
              alt=""
              width="200px"
              height="130px
              "
              class="imgcarrinho"
            />
            <div class="NomeP">
              Areca Bambu
              <div class="PreçoP">Valor = 45,00</div>
            </div>
            <br />
            <hr class="hrc" />
            <div>
              <div class="TotalP">Total: 90,00</div>
              <b-button href="/dadoscompra" class="ButtonP">
                FINALIZAR</b-button
              >
            </div>
          </b-nav-item-dropdown>
          <b-navbar-nav>
            <b-nav-item @click="logout">Sair</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    <hr class="hrlay" />
    <b-container id="footer" class="bv-example-row">
      <b-row>
        <b-col class="footer1">
          2021 Pjg Pagamentos S.A - Instituição de Pagamento. -
          12.345.678/0001-01 <br />
          BR-280 - Colégio Agrícola, Araquari - SC, 89245-000</b-col
        >
        <b-col class="footer2">
          Fale com a gente. <br />
          <br />
          0800 123 4567 <br />
          meajuda@pjg.com.br <br />
          Atendimento 24h
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions('auth', ['logout'])
  }
};
  
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Baskervville:ital@1&display=swap");
.hrlay {
  margin: 5% 0 0 0;
  border-color: #00bf8f;
}
.navpr {
  height: 75px;
  width: 100%;
  font-size: 23px;
  padding: 30px;
  background: white;
  box-shadow: 1px 1px 1px 1px #00bf8f;
}
.dprincipal {
  font-family: Jomolhari;
}
#container2 {
  padding: 20px;
}
#footer {
  color: #00bf8f; /* fallback for old browsers */
  color: -webkit-(to top, #001510, #00bf8f); /* Chrome 10-25, Safari 5.1-6 */
  color: #00bf8f; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size: 25px;
  margin: 5% 0 0 20%;
}
#navb {
  font-size: 23px;
  color: #099d78;
  font-weight: bold;
}
.footer2 {
  margin: 0 0 0 15%;
}
ul.dropdown-menu.dropdown-menu-right.show {
  background: #099d78;
  height: 80px;
  width: 220px;
  display: block;
}
.navbar-nav {
  margin: 0 3% 0 0;
  padding: 0;
}
.navbar-dark .navbar-nav .nav-link {
  color: #00bf8f;
}

.navbar-dark .navbar-nav .show > .nav-link {
  color: #00bf8f;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #099d78;
}
ul.dropdown-menu.show {
  background-color: white;
  height: 580px;
  width: 220px;
  display: block;
}
.imgcarrinho {
  margin: 3% 0 0 2%;
}
.NomeP {
  white-space: nowrap;
  margin: 5% 0 0 3%;
  font-weight: bold;
  font-size: 20px;
  font-style: italic;
  font-family: Times, serif;
  text-align: center;
  color: #099d78;
}
.PreçoP {
  font-size: 18px;
  font-weight: lighter;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
.hrc {
  width: 170px;
  border: 1px solid black;
  margin: 0 0 0 10%;
}
.TotalP {
  font-weight: bold;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  margin-top: 1vh;
}
.ButtonP {
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: #ff691e;
  background-image: linear-gradient(315deg, #f3824a 0%, #eb7616 74%);
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 15px;
  margin: 5% 0 0 15%;
  width: 150px;
  height: 40px;
}
.ButtonP:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
.hrc {
  border: #099d78 1px solid;
  width: 23vh;
  margin: 0;
}
@media (max-width: 844px) {
}

@media (max-width: 390px) {
  #footer {
    color: #3e9661;
    font-size: 16px;
    margin: 0% 10% 10% 0%;
  }
  .footer1 {
    margin: 5%;
    width: 150px;
    padding: 5%;
  }
  .footer2 {
    margin: 5%;
    width: 150px;
    padding: 5%;
  }
}
</style>
