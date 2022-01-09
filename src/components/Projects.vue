<template>
  <section :id="projects">
    <p :class="ProjectsTitle">PROJECTS</p>
    <div class="row" style="margin: 0; padding: 0; margin-top: 10%">
      <div class="col-lg-4">
        <div :class="cardBox" data-aos="fade-up"
        data-aos-duration="1000">
          <img
            src="@/assets/images/auro.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">VOICEOVERS By Auro <a :class="ViewLink" target="_blank" href="https://aurokarshinevoiceover.com/">view</a></p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div :class="cardBox" data-aos="fade-up"
        data-aos-duration="1300">
          <img
            src="@/assets/images/moviesproject.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">
              Movies Download MM Project <a :class="ViewLink" target="_blank" href="http://moviesdownloadmm.42web.io/index.php">view</a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div :class="cardBox" data-aos="fade-up"
        data-aos-duration="1600">
          <img
            src="@/assets/images/portfolio.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">Portfoloi <a :class="ViewLink" target="_blank" href="http://yanpaingoo.dev/">view</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: "projects",
      ProjectsTitle: "ProjectsTitle",
      cardBox: ["card", "cardBox"],
      ViewLink: "ViewLink",
    };
  },
};
</script>
<style>
#projects {
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: rgb(29, 29, 29);
}
.ProjectsTitle {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.cardBox {
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 5%;
  box-shadow: 3px 5px 0px 4px rgba(214, 214, 214, 0.13);
  -webkit-box-shadow: 3px 5px 0px 4px rgba(214, 214, 214, 0.13);
  -moz-box-shadow: 3px 5px 0px 4px rgba(214, 214, 214, 0.13);
}
.ViewLink{
    margin-left: 3%;
    text-decoration: none;
    color: #0caeeb;
}
.ViewLink:hover{

    color: #91d9f3;
}
</style>