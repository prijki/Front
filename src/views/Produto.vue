<template>
  <div class="pageTotal">
    <b-container fluid class="produto">
      <b-row class="row">
        <b-col class="col1">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
            alt=""
          />
        </b-col>
        <b-col class="col2">
          <h1><div class="nome">Nome do Produto</div></h1>
          <br />
          <br />
          <h4>
            <div class="descricao">
              Produto de não sei oq la entendeu e simplesmente é isso. silencio
              e trabalho, e não se esqueça... FORGET!
            </div>
          </h4>
          <div class="subdescricao">
            Por R$50,00 a vista <br />
            ou 3x de R$ 19,50. <br />
            <p></p>
            Quantidade:
          </div>
          <div class="spinb">
            <b-form-spinbutton
              id="demo-sb"
              v-model="value"
              min="1"
              max="10"
              inline
            ></b-form-spinbutton>
          </div>
          <div class="Total">
            <h3>
              TOTAL:<code class="value">R${{ value * 50 }},00 </code>
            </h3>
          </div>
          <br />
          <b-button class="btncad" type="submit" href="/dadoscompra"
            >Finalizar</b-button
          >
        </b-col>
      </b-row>
      <div class="Comentarios">
        <h1><div class="TituloComentario">Comentários</div></h1>
        <div class="FazerComentario">
          <b-form-textarea
            class="TextoComentario"
            id="textarea-formatter"
            max-rows="5"
            no-resize
          >
          </b-form-textarea>
          <b-button class="BotaoComentario" type="submit">Comentar</b-button>
        </div>
        <div
          class="Respostas"
          v-for="comentario in comentarios"
          :key="comentario.id"
        >
          <b-avatar icon="people-fill" size="4em"></b-avatar>
          <div class="RespostasCliente">
            <div class="aResposta">
              {{ comentario.texto }}
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Comentarios",
  data() {
    return {
      value: 1,
      comentario: [],
      comentarios: {},
    };
  },
  async created() {
    this.getComentarios();
  },
  methods: {
    async getComentarios() {
      this.plantas = await this.$get("comentarios/");
    },
  },
};
</script>

<style>
.value {
  color: #000000;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-style: initial;
}

.pageTotal {
  background: #00bf8f;
  background: -webkit-linear-gradient(to top, #001510, #00bf8f);
  background: linear-gradient(to top, #038264, #00bf8f);
  height: 1950px;
}
.row {
  background: #ffffff;
  border-radius: 5px;
}
.produto {
  padding: 30px;
  font-family: "Jomolhari", serif;
}
.col1 {
  border-radius: 4px;
  padding: 1px;
  display: grid;
}
.col2 {
  border-radius: 4px;
  display: grid;
}
.nome {
  margin: 15% 0 0 0;
  color: #0f3406;
  text-align: center;
}
.descricao {
  text-align: left;
  color: #0f3406;
  padding: 20px;
  margin: 0 0 0 10%;
}
.subdescricao {
  text-align: left;
  color: #3e9661;
  opacity: 80%;
  font-size: 22px;
  padding: 18px;
  margin: 0 0 0 10%;
}
.Total {
  margin: 0 0 0 12%;
  padding: 10px;
}
.btncad {
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: #ff691e;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 20px;
  margin: 8% 0 0 45%;
  width: 150px;
  height: 50px;
}
.btncad:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
img {
  height: 820px;
  border-radius: 5px 0px 0px 5px;
}
.spinb {
  margin: 0 0 0 12%;
}
.Comentarios {
  position: absolute;
  width: 193vh;
  height: 105vh;
  background: #ffffff;
  border-radius: 4px;
  margin: 1% 0% 0 0%;
}
.TituloComentario {
  font-family: "Jomolhari";
  margin: 4% 0 0 5%;
}
.FazerComentario {
  display: flex;
  justify-content: center;
}
.TextoComentario {
  margin: 2% 0 0 4%;
  width: 1950px;
  height: 97px;
  background: rgba(226, 255, 238, 0.95);
  box-shadow: 0px 4px 4px rgba(35, 184, 94, 0.63);
  margin-bottom: 0 0% 0 5%;
}
.BotaoComentario {
  width: 300px;
  height: 50px;
  background: rgba(62, 150, 97, 0.95);
  border-radius: 5px;
  margin: 2% 25% 0 3%;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 5px;
  border-color: rgba(62, 150, 97, 0.95);
}
.BotaoComentario:hover {
  opacity: 80%;
  background: rgba(62, 150, 97, 0.95);
  border-color: rgba(62, 150, 97, 0.95);
}
.Respostas {
  display: flex;
  margin: 5% 0 0 4%;
}
.Respostas2 {
  display: flex;
  margin: 1% 0 0 0;
}
.RespostasCliente {
  width: 120vh;
  height: 119px;
  background: rgba(228, 255, 239, 0.95);
  border-radius: 5px;
  margin: 0 0% 0 3%;
}
.aResposta {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  text-align: justify;
  padding: 25px;
  color: #000000;
}
.avatar {
  margin: 1% 0 0 11%;
}
.icon {
  margin: 2% 0 0 1%;
}

.hrlay {
  margin: 0 0 0 0;
}
#footer {
  margin: 5% 0 0 25%;
  padding: 10px;
}

@media (max-width: 390px) {
  .row {
    border: 0;
    width: 350px;
    height: 120vh;
    margin: 4% 5%;
    flex-direction: column;
  }
  .produto {
    padding: 1%;
  }
  .col1 {
    width: 360px;
    box-shadow: none;
    border-style: solid none solid none;
    border-color: #0f3406;
    margin: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }
  .navpr {
    box-shadow: none;
  }
  img {
    width: 300px;
    height: 300px;
    margin-left: 7%;
  }
  .col2 {
    width: 390px;
    box-shadow: none;
    height: 100px;
    margin: 0;
    padding: 0;
    margin: 0%;
    flex-grow: 2;
  }
  .dprincipal {
    width: 390px;
  }
  .nome {
    text-align: center;
    font-size: 30px;
  }
  .descricao {
    font-size: 20px;
  }
  .btncad {
    margin: 9% 0 0 35%;
  }
  #footer {
    color: #3e9661;
    font-size: 16px;
    margin: 5% 0 1% 0;
  }
  .footer1 {
    margin: 5%;
    width: 270px;
    padding: 5%;
  }
  .footer2 {
    margin: 5%;
    width: 270px;
    padding: 5%;
  }
  .container {
    width: 0%;
  }
  .Comentarios {
    border: 0;
    width: 350px;
    height: 150vh;
    margin: 4% 5%;
    flex-direction: column;
  }
  .TituloComentario {
    text-align: center;
    font-size: 30px;
  }
  .FazerComentario {
    display: grid;
    width: 367px;
    justify-content: flex-start;
    flex-grow: 1;
  }
  .TextoComentario {
    width: 250px;
    height: 20px;
  }
  #textarea {
    resize: none;
  }

  .b-avatar {
    width: 50px;
    height: 1rem;
  }
  .Respostas {
    height: 300px;
    flex-grow: 1;
  }
  .aResposta {
    display: grid;
    font-size: 10px;
  }
  .Respostas2 {
    display: grid;
    flex-grow: 2;
  }
  .RespostasCliente {
    width: 400px;
    height: 90px;
  }

  .BotaoComentario {
    width: 80px;
    height: 40px;
  }
}
</style>
