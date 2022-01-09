<template>
  <section :id="about">
    <div :class="About">
      <p :class="AboutTitle">ABOUT</p>
      <div class="row" style="margin: 0; padding: 0">
        <div
          style="margin: 0; padding: 0"
          class="col-lg-6 col-md-12 col-sm-12 text-center"
        >
          <div data-aos="fade-right" data-aos-duration="1000">
            <img src="@/assets/images/me.png" :class="aboutImg" alt="..." />
          </div>
          <div class="flex-container text-center">
            <div :class="IconCenter" data-aos="fade-up" data-aos-duration="1000">
              <a target="_blank" :class="IconSocial" href="https://github.com/ypo-dev/"><i class="fab fa-github"></i></a>
            </div>
            <div :class="IconCenter" data-aos="fade-up" data-aos-duration="1300">
              <a target="_blank" :class="IconSocial" href="https://twitter.com/yanpaing21"><i class="fab fa-twitter"></i></a>
            </div>
            <div :class="IconCenter" data-aos="fade-up" data-aos-duration="1600">
              <a target="_blank" :class="IconSocial" href="https://www.linkedin.com/in/yanpaingoo1998/"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          style="margin: 0; padding: 0"
          class="col-lg-6 col-md-12 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p :class="AboutText">
            I'm a Laravel Developer and interested in UI/UX Design. In front
            end, I can use VUE.js and Bootstrap. I enjoy working with coding and
            debugging errors. Full Stack web Developer is my Goal and Future.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      about: "about",
      About: "About",
      AboutTitle: "AboutTitle",
      aboutImg: ["aboutImg", "img-fluid"],
      AboutText: "AboutText",
      AboutTextSecond: "AboutTextSecond",
      aboutMail: "aboutMail",
      aboutICON: "aboutICON",
      IconSocial: "IconSocial",
      IconCenter: "IconCenter",
    };
  },
};
</script>
<style>
.About {
  background-color: #0caeeb;
  padding-top: 2%;
}
.AboutTitle {
  font-size: 40px;
  font-weight: bold;
  padding-top: 2%;
  color: #fff;
  text-align: center;
}

.aboutImg {
  width: 230px;
  height: auto;
  margin-bottom: 3%;
  transform: rotateY(180deg);
}

@media screen and (max-width: 991px) {
  .aboutImg {
    padding-top: 5%;
    width: 230px;
    height: auto;
    margin-bottom: 3%;
    transform: rotateY(180deg);
  }
}

.AboutText {
  color: rgb(241, 241, 241);
  font-size: 19px;
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 5%;
  margin-bottom: 25%;
  text-align: left;
}
.flex-container {
  display: flex;
  justify-content: center;
}
.IconSocial {
  font-size: 30px;
  color: #fff;
}

.IconSocial:hover {
  font-size: 30px;
  color: #000;
}

.IconCenter{

  margin-left: 3%;
  margin-right: 3%;
}
</style>