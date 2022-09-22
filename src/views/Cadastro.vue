<template>
  <body>
    <b-container class="loginPage">
      <b-row align-v="center">
        <b-col class="log"
          ><div class="logo">
            <img src="../assets/images/logoopjgnovo.png" />
          </div>
        </b-col>
        <b-col>
          <b-form class="formCadastro" @submit.prevent="login" v-if="show">
            <div class="Pjg">PJG Plantas</div>
            <div class="subTitle">Prmeiro Nome:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                v-model="form.first_name"
                type="text"
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira seu primeiro nome"
              >
              </b-form-input>
            </b-form-group>
            <div class="emsen">Sobrenome:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="text"
                v-model="form.last_name"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              ></b-form-input>
            </b-form-group>
            <div class="emsen" style="white-space: nowrap">Email:</div>
            <b-form-input
              type="email"
              v-model="form.email"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira seu email"
            ></b-form-input>
            <div class="emsen" style="white-space: nowrap">Usuario:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="text"
                v-model="form.username"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              ></b-form-input>
            </b-form-group>
            <div class="emsen" style="white-space: nowrap">Senha:</div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="password"
                v-model="form.password"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              ></b-form-input>
            </b-form-group>
            <div class="emsen" style="white-space: nowrap">
              Confirmar Senha:
            </div>
            <b-form-group id="input-group-1">
              <b-form-input
                type="password"
                v-model="form.password_confirmation"
                required
                style="
                  background: white;
                  border-style: none none solid none;
                  border-color: rgba(62, 150, 97, 0.95);
                "
                placeholder="Insira sua senha"
              ></b-form-input>
            </b-form-group>
            <div class="Ircad">
              <a href="/login"> Já tem uma conta? Logue aqui </a>
            </div>
            <div class="buttons">
              <b-button
                class="btnCadastro"
                type="submit"
                @click.prevent="register"
                >Cadastrar</b-button
              >
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </body>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        usuario: {},
      },
      show: true,
    };
  },
  async created() {
    this.getUsuario();
  },
  methods: {
    async getUsuario() {
      this.usuario = await this.$get("auth/");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.logo img {
  width: 400px;
  height: 400px;
  margin: 3% 0% 12vh 22vh;
}
.logo {
  margin: 5% 0% 0% 55%;
}
.loginPage {
  font-family: Jomolhari;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0 10% 0 0;
}
.formCadastro {
  background-color: white;
  border-radius: 8px;
  margin: -1% -167% 0 0%;  
  padding: 50px;
  width: 500px;
  height: 86vh;
  align-items: center;
  box-shadow: 0px 4px 10px 10px rgba(15, 52, 6, 0.42);
}
span {
  padding: 0 10px;
}
body {
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
}
.Pjg {
  font-size: 40px;
  line-height: 29px;
  text-align: center;
  font-weight: 500;
  margin: -2% 0 0 0;
  color: #086a52;
}
.btnCadastro {
  background: -webkit-(
    to top,
    #086a63,
    #086a52
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: #086a52; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 0;
  padding: 10px;
  margin: 10% 0 0 35%;
  width: 120px;
  font-size: 20px;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
}
.btnCadastro:hover {
  background-color: #024435;
}
.emsen {
  padding: 0px;
  margin: 6% 0 0 0;
  font-size: 18px;
}
.btnCadastro::after {
  border: 0;
}
.subTitle {
  padding: 8px;
  margin: 10% 0 0 0;
  font-size: 18px;
}

#div-diagonal {
  width: 2px;
  height: 200px;
  background: black;
  transform: skew(20deg);
}
.titulo {
  position: absolute;
  color: #fff7f7;
  font-size: 80px;
  font-weight: 500;
  line-height: 70px;
  mix-blend-mode: screen;
  font-family: Jomolhari;
  margin: 15% 3% 0 0%;
}
.hr1 {
  position: absolute;
  width: 2100.46px;
  height: 0px;
  border: 1px solid #000000;
  transform: rotate(128.93deg);
}
.hr2 {
  position: absolute;
  width: 306px;
  height: 0px;
  border: 1px solid #42c623;
  transform: rotate(89.85deg);
  size: 5rem;
}
.hr4 {
  position: absolute;
  width: 326.17px;
  height: 0px;
  border: 1px solid #42c623;
  transform: rotate(-146.5deg);
}
.custom-control-label {
  margin: 18px 0 0 3px;
}
.custom-control-label::after {
  border: 1px solid #000000;
}
.form-control {
  padding: 1;
  font-size: 16px;
  font-weight: bold;
  margin: 0% 5% 0 0;
}
.Ircad {
  margin: 2% 0 0 0;
}
a {
  color: #00bf8f;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 20% 0 0 0%;
}
a:hover {
  color: #086a52;
  opacity: 50%;
  text-decoration: none;
}

@media (max-width: 844px) {
  body {
    background-color: #001510;
  }
  .formCadastro {
    width: 340px;
    margin: 0% 0% 0 0;
    padding: 59px;
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
    margin: 5% 25% 0 0;
  }
  .btnCadastro {
    padding: 10px;
    height: 50px;
    width: 110px;
  }
  .logo img {
    width: 200px;
    height: 200px;
  }
  .logo {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .col {
    padding: 10px;
    margin: 0 2% 0 0;
  }

  .loginPage {
    font-family: Jomolhari;
    height: 129vh;
    display: flex;
    padding: 0;
    margin: 0 10% 0 0;
  }
}
</style>
