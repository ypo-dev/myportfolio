<template>
  <Header />
  <Home />
  <About />
  <Clients />
  <Projects />
  <Contact />
  <Footer />
  <router-view />
</template>
<script>
import Header from "./components/layout/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Clients from "./components/Clients.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Clients,
    Projects,
    Contact,
    Footer,
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
  font-family: 'Overpass', sans-serif;
}
</style>