<template>
  <section :id="main" :class="main">
    <div :class="mainPage">
      <div style="margin: 0; padding: 0" class="row">
        <div class="col-lg-6">
          <div class="text-center">
            <div data-aos="fade-down" data-aos-duration="1000">
            <p :class="mainText">
              I am Yan Paing Oo <br />
              PHP Laravel<br />
              Web Developer
            </p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
              <p :class="subText">" With Creative UI/UX Design "</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="text-center" data-aos="fade-up" data-aos-duration="1300">
            <img :class="MainImg" src="@/assets/images/vector.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  setup: () => ({
    greeting: "VOICEOVERS",
  }),
  data() {
    return {
      main: "main",
      mainPage: "main-page",
      mainText: "mainText",
      subText: "subText",
      MainImg: "MainImg",
    };
  },
};
</script>


<style scoped>
.main-page {
  background-image: url("/images/3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4%;
  padding-bottom: 2%;
  padding-top: 8%;
}
.mainText {
  color: rgb(75, 75, 75);
  font-size: 3.5rem;
  line-height: 93%;
  margin-top: 20%;
  margin-bottom: 5%;
}
.subText {
  color: #0caeeb;
  font-size: 1rem;
  font-style: italic;
}
.MainImg {
  width: 25rem;
  height: auto;
  margin-top: 5%;
}

@media screen and (max-width: 480px) {
  .MainImg {
    width: 80vw;
    height: auto;
    margin-top: 5%;
  }

  .mainText {
    color: rgb(75, 75, 75);
    font-size: 10vw;
    line-height: 93%;
    margin-top: 20%;
    margin-bottom: 5%;
  }
}
</style>