<template>
  <div :class="footer">
    <span :class="copyRight"
      >Copyright {{ new Date().getFullYear() }} All Rights Reserved</span
    >
    <span :class="Developer">Developed by Yan Paing Oo</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footer: "footer",
      copyRight: "copyRight",
      Developer: "Developer",
    };
  },
};
</script>

<style>
.footer {
  background-color: #000;
  height: 3rem;
}
.copyRight {
  font-size: 14px;
  color: #fff;
  padding-left: 2%;
  padding-top: 1%;
  float: left;
}
.Developer {
  font-size: 14px;
  padding-right: 2%;
  padding-top: 1%;
  color: #fff;
  float: right;
  font-style: italic;
}

@media screen and (max-width: 442px) {
  .copyRight {
    font-size: 12px;
    color: #fff;
    padding-left: 2%;
    padding-top: 1%;
    float: left;
  }
  .Developer {
    font-size: 12px;
    padding-right: 2%;
    padding-top: 1%;
    color: #fff;
    float: right;
    font-style: italic;
  }
}
</style>