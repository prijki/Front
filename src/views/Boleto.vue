<template>
  <b-container class="container">
    <b-row class="row">
      <b-icon
        variant="success"
        icon="check-circle"
        scale="2.5"
        class="icon"
      ></b-icon>
      <h1>Sua transação foi concluída com sucesso!</h1>
      <div class="boleto">
        <img src="../assets/images/Boleto.jpg" alt="" />
        <div class="v-line"></div>
        <hr />
        <h3 class="finalizar">Finalize o pagamento usando o Boleto!</h3>
      </div>
    </b-row>
    <b-button v-model="downloadWithCSS" class="botaoconcluir">
      Concluir</b-button
    >
  </b-container>
</template>

<script>
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
export default {
  methods: {
    downloadWithCSS() {
      /** WITH CSS */
      domtoimage
        .toPng(this.$refs.content)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          const doc = new jsPDF({
            orientation: "portrait",
            // unit: "pt",
            format: [900, 1400],
          });
          doc.addImage(img, "JPEG", 20, 20);
          const date = new Date();
          const filename =
            "timechart_" +
            date.getFullYear() +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            ("0" + date.getDate()).slice(-2) +
            ("0" + date.getHours()).slice(-2) +
            ("0" + date.getMinutes()).slice(-2) +
            ("0" + date.getSeconds()).slice(-2) +
            ".pdf";
          doc.save(filename);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
  },
};
</script>
<style>
.container {
  width: 100%;
}
.row {
  margin: 5% 0 0 0;
}
.boleto {
  display: flex;
  margin: 0 15% 0 0;
}
img {
  margin: 10% 0 0 0;
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
.finalizar {
  color: #ff691e;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  margin: 25% 0 0 25%;
  text-align: center;
  white-space: nowrap;
}

.botaoconcluir {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  justify-content: center;
  border: 0px solid transparent;
  border-radius: 6px;
  font-weight: 500;
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
  font-size: 20px;
  width: 20vh;
  height: 6vh;
  margin: 5% 0 0 50%;
}
.icon {
  margin: 0 0 0 25%;
}
.v-line {
  border-left: 1px solid #000;
  height: 45vh;
  position: absolute;
  margin: 5% 0 0 40%;
}
</style>
