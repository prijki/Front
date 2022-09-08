<template>
  <body>
    <b-container class="login-page" fluid>
      <b-row align-v="center">
        <b-col class="log">
          <div class="logo">
            <img src="../assets/images/logoopjgnovo.png" />
          </div>
        </b-col>
        <b-col>
          <b-form class="cform" v-if="show"
            ><div class="dlogin">PJG Plantas</div>
            <div class="emsen">Email:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                v-model="usuario.username"
                type="text  "
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira seu email"
              >
              </b-form-input>
            </b-form-group>
            <div class="emsen">Senha:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="password"
                v-model="usuario.password"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              >
                <b-icon icon="eye" variant="danger"></b-icon
              ></b-form-input>
            </b-form-group>
            <div class="Ircad">
              <a href="/cadastro"> Não tem conta? Crie a sua aqui </a>
            </div>
            <div class="buttons">
              <b-button class="btncad" type="submit" @click.prevent="submitLogin">Logar</b-button>
              <b-button class="btncad2">Administrar</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
import store from "@/store";

export default {
  created() {
    store.state.token = "";
  },
  data() {
    return {
      usuario: {},
      show: true,
    };
  },
  methods: {
    // async btLogin() {
    //   try {
    //     const data = await this.$post("token/", this.form);
    //     // console.log(data);
    //     store.state.token = data.access;
    //     this.$router.push("/");
    //     // }
    //   } catch {
    //     alert("Email ou senha incorretos");
    //   }
    // },
    ...mapActions('auth', ['login']),
    submitLogin(){
      this.login(this.usuario)
      this.$router.push({ name: 'Home'})
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.logo img {
  width: 400px;
  height: 400px;
}

.logo {
  margin: 20% 0 0 30%;
}

.login-page {
  font-family: Jomolhari;
}
.cform {
  background-color: white;
  border-radius: 8px;
  margin: 20% 40% 0 10%;
  padding: 50px;
  width: 500px;
  height: 500px;
  align-items: center;
  box-shadow: 0px 4px 10px 10px rgba(15, 52, 6, 0.42);
}
span {
  padding: 0 10px;
}
body {
  width: 100%;
  background: #00bf8f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #001510,
    #00bf8f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #001510,
    #00bf8f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  height: 100vh;
}
.dlogin {
  font-size: 35px;
  line-height: 29px;
  text-align: center;
  color: #086a52;
}
a {
  color: #00bf8f;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin: 3% 0 0 1%;
  font-family: "Roboto", sans-serif;
}
a:hover {
  color: #102b1a;
  opacity: 50%;
  text-decoration: none;
}
.btncad {
  background: -webkit-(
    to top,
    #086a63,
    #086a52
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: #086a52; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 0;
  padding: 10px;
  width: 130px;
  font-size: 21px;
  border-radius: 4px;
  margin: 10% 0 0 10%;
  font-family: "Roboto", sans-serif;
}
.btncad:hover {
  background-color: #024435;
}
.emsen {
  padding: 8px;
  margin: 10% 0 0 0;
  font-size: 20px;
}
.btncad2 {
  background: -webkit-(
    to top,
    #086a63,
    #086a52
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: #086a52; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 0;
  padding: 10px;
  width: 150px;
  font-size: 21px;
  font-weight: 500;
  border-radius: 4px;
  margin: 10% 0 0 10%;
  font-family: "Roboto", sans-serif;
}
.btncad2:hover {
  background-color: #024435;
}
.titulo {
  position: absolute;
  color: #fff7f7;
  font-size: 80px;
  font-weight: 500;
  line-height: 70px;
  mix-blend-mode: screen;
  font-family: Jomolhari;
  margin: 0 0 0 35%;
}
.form-control {
  padding: 1;
  font-size: 16px;
  font-weight: bold;
  margin: 0% 5% 0 0;
}
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-image: none !important;
  background-color: -internal-light-dark(rgb(232, 240, 254)) !important;
  color: fieldtext !important;
}

@media (max-width: 844px) {
  body {
    background-color: #001510;
  }
  .cform {
    width: 340px;
    margin: 0% 0% 0 0;
  }
  .form-control {
    margin: 3% 5% 0 0%;
    padding: 1px;
  }

  .titulo {
    margin: 15% 0 0 20%;
  }
  .row {
    margin: 0% 20% 0% 2%;
  }
  .container-fluid {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
  }
  .buttons {
    display: flex;
    margin: 15% 13% 0 0;
  }
  .btncad {
    padding: 10px;
    height: 50px;
    width: 100px;
  }
  .btncad2 {
    padding: 10px;
    height: 50px;
  }
  .logo img {
    width: 200px;
    height: 200px;
  }

  .logo {
    align-items: center;
  }
  .col {
    padding: 10px;
    margin: 0 20% 0 0;
  }
}
</style>
