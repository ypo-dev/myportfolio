<template>
  <div id="skills" :class="clients">
    <p :class="clientsTitle">SKILLS</p>
    <div style="padding: 0; margin: 0" class="row">
      <div
        class="col-lg-3 col-md-3 col-sm-6 text-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img :class="clientLOGO" src="@/assets/images/1.png" />
      </div>
      <div
        class="col-lg-3 col-md-3 col-sm-6 text-center"
        data-aos="fade-right"
        data-aos-duration="1300"
      >
        <img :class="clientLOGO" src="@/assets/images/2.png" />
      </div>
      <div
        class="col-lg-3 col-md-3 col-sm-6 text-center"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img :class="clientLOGO" src="@/assets/images/3.png" />
      </div>
      <div
        class="col-lg-3 col-md-3 col-sm-6 text-center"
        data-aos="fade-right"
        data-aos-duration="1700"
      >
        <img :class="clientLOGO" src="@/assets/images/4.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: "clients",
      clientsTitle: "clientsTitle",
      clientsICON: "clientsICON",
      clientLOGO: "clientLOGO",
      Cdotline: "Cdotline",
    };
  },
};
</script>
<style>
.clients {
  background-color: #fff;
  padding-top: 5%;
  padding-bottom: 10%;
}
.clientsTitle {
  font-size: 40px;
  font-weight: bold;
  color: rgb(75, 75, 75);
  text-align: center;
}

#clientsICON {
  font-size: 25px;
}

.clientLOGO {
  width: 110px;
  height: auto;
  margin-top: 20%;
  padding-bottom: 5%;
}
@media screen and (max-width: 575px) {
  .clientLOGO {
    width: 110px;
    height: auto;
    margin-top: 5%;
    padding-bottom: 5%;
  }
}
</style>