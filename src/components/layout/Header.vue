<template>
  <nav data-bs-spy="scroll" data-bs-target="#navbarScroll" id="list-example" :class="navBar">
    <div class="container-fluid">
      <a  href="#"><img :class="NavLogo" src="@/assets/images/logo.png" /></a>
      <div
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        class="hamburger"
      >
        <input type="checkbox" class="hamburger-init" />
        <div class="menu">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li :id="navHome" class="nav-item nav-hover">
            <a class="nav-link" href="#"
              ><span class="nav-text"> Home </span>
            </a>
          </li>
          <li :id="navAbout" class="nav-item nav-hover">
            <a class="nav-link" href="#about"
              ><span class="nav-text"> About Me </span></a
            >
          </li>
          <li class="nav-item nav-hover">
            <a class="nav-link" href="#skills"
              ><span class="nav-text"> Skills </span></a
            >
          </li>
          <li class="nav-item nav-hover">
            <a class="nav-link" href="#projects"
              ><span class="nav-text"> Projects </span></a
            >
          </li>
          <li class="nav-item nav-hover">
            <a class="nav-link" href="#contact"
              ><span class="nav-text"> Contact Me </span></a
            >
          </li>
        </ul>
      </div>
      <div class="mailBox-hide">
        <form class="d-flex">
          <p :class="mailBox">
            <i class="fas fa-envelope"></i> Email: yanpaingoo.dev@gmail.com
          </p>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navBar: [
        "navbar",
        "navbar-expand-lg",
        "navbar-light",
        "fixed-top",
        "navbar-bg",
      ],
      NavLogo: "NavLogo",
      mailBox: "mail-box",
      navHome: "navHome",
      navAbout: "navAbout",
    };
  },
  
};
</script>
<style scoped>
body {
  color: #fff;
  position: relative;
}
.navbar-bg {
  background-color: #fff;
  box-shadow: -1px 1px 15px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 15px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 15px -8px rgba(0, 0, 0, 0.75);
}
.NavLogo{

  width: 40px;
  height: auto;
}

/* MENU */
.hamburger {
  width: 60px;
  height: 60px;
  margin: 0;
  display: none;
  float: right;
}

@media only screen and (max-width: 991px) {
  .hamburger {
    display: flex;
  }
}
.hamburger-init {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
  outline: none;
}

.menu {
  position: relative;
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
}

.menu .bar1,
.menu .bar2,
.menu .bar3 {
  width: 25px;
  height: 4px;
  background: #0caeeb;
  transition: all 0.3s;
}

.hamburger-init:checked + .menu .bar1 {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-init:checked + .menu .bar2 {
  opacity: 0;
}

.hamburger-init:checked + .menu .bar3 {
  transform: translateY(-9px) rotate(-45deg);
}

/* menu end */

.navbar-toggler {
  float: right;
}
.mail-box {
  color: #0caeeb;
  font-size: 15px;
  margin-bottom: 0;
  padding-right: 10px;
}
@media only screen and (max-width: 991px) {
  .nav-symbol {
    display: none;
  }
  .nav-item {
    width: 100%;
    text-align: center;
  }
  .nav-link {
    background-color: #0caeeb;
    margin-top: 5px;
  }
  .nav-link:hover {
    background-color: #000;
  }
  .nav-text {
    color: #fff;
  }
  .mailBox-hide {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .nav-item {
    margin-left: 10px;
    margin-right: 10px;
  }
  .nav-text {
    color: rgb(75, 75, 75);
  }
  .nav-text:hover {
    color: rgb(196, 196, 196);
  }

  .active a span {
    color: rgb(196, 196, 196);
    font-weight: bold;
  }
}
</style>
