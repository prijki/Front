<template>
  <b-container>
    <b-row class="row">
      <b-icon
        variant="success"
        icon="check-circle"
        scale="2.5"
        class="icon"
      ></b-icon>
      <h1>Sua transação foi concluída com sucesso!</h1>
      <div class="pix">
        <h4>Finalize o pagamento usando o Pix!</h4>
        <hr />
        <h5>
          Você pode utilizar a câmera do seu celular para ler o
          <b>
            QR Code <br />
            ou copiar o código
          </b>
          e pagar no aplicativo de seu banco:
        </h5>
        <div class="segundoPix">
          <img src="../assets/images/qrcode.jpg" alt="" />
          <b-form-textarea id="textarea" plaintext :value="text">
          </b-form-textarea>
          <br />
        </div>
        <b-button> Concluir</b-button>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: "00020126330014br.gov.bcb.pix0111133136789125204000053039865802BR5925Carlos Henrique De Fraga 6009Sao Paulo62070503***630442E4",
    };
  },
};
</script>

<style>
.row {
  margin: 5% 0 5% 0;
}
.pix {
  width: 90%;
  height: 75vh;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 5% 0 0 0;
}
h4 {
  color: #ff691e;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 7% 0 0 0%;
  text-align: center;
}
h5 {
  color: grey;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 5% 0 0 0%;
  font-size: 1.05rem;
  text-align: center;
}
h1 {
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0 0 3%;
  display: inline-block;
  color: #47ac5b;
  vertical-align: middle;
}

hr {
  margin: 7% 0 0 0;
}
.segundoPix {
  display: flex;
  margin: 5% 0 0 0;
}

img {
  width: 30vh;
  height: 30vh;
  margin: 0 0 0 5%;
}
#textarea {
  margin: 0 4% 0 4%;
  border: 1px solid lightgray;
  height: 7vh;
  border-radius: 7px;
  padding: 5px;
}
.btn {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  justify-content: center;
  border: 0px solid transparent;
  border-radius: 6px;
  font-weight: 700;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 18px;
  margin: 0 0 0 55%;
  width: 20vh;
  height: 6vh;
}
.icon {
  margin: 0 0 0 25%;
}

@media (max-width: 390px){
  #footer {
    color: #3e9661;
    font-size: 16px;
    margin: 5% 0 1% 0;
  }
  .pix {
  width: 100%;
  height: 86vh;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 5% 0 0 0;
  }
  h4 {
  color: #ff691e;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 5% 10% 5% 10%;
  text-align: center;
  }
  h5{
    color: grey;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    margin: 5% 5% 5% 5%;
    font-size: 1.05rem;
    text-align: center;
  }
  .btn {
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  justify-content: center;
  border: 0px solid transparent;
  border-radius: 6px;
  font-weight: 700;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-transform: uppercase;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 18px;
  margin: 5% 27% 0 26%;
  width: 20vh;
  height: 6vh;
  }
  .segundoPix {
  display: block;
  margin: 5% 0 0 0;
  }
  #textarea {
  margin: 5% 4% 0 4%;
  border: 1px solid lightgray;
  height: 14vh;
  border-radius: 7px;
  padding: 5px;
  max-width: 39vh;
  }
  img {
    width: 30vh;
    height: 30vh;
    margin: 0 0 0 14%;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;

}
  .row h1{
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0;
}
.navbar-toggler {

    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #47ac5b;
    border: 1px solid transparent;

}
}
</style>
