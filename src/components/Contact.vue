<template>
  <div id="contact" :class="contact">
      <p :class="contactTitle">
        CONTACT
      </p>
    <div :class="contactBOX">
      <form method="POST" ref="form" @submit.prevent="sendEmail">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            name="name"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Message</label
          >
          <textarea
            name="message"
            class="form-control"
            id="textarecontact"
            rows="3"
            required
          ></textarea>
        </div>
          <button type="submit" value="Send" :class="btnContact">send</button>
      </form>
    </div>
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      contact: "contact",
      contactBOX: "contactBOX",
      contactTitle: "contactTitle",
      contactICON: "contactICON",
      btnContact: ["btn", "btnContact"],
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_t8lzply",
          "template_8mwsf0l",
          this.$refs.form,
          "user_cq1cZKRpoD19o5TelMAxy"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);

            this.$toast.success("send successfully!", {
              position: "top-right",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
<style>
.contactBOX {
  margin: 5% 20% 10% 20%;
}

@media screen and (max-width: 700px) {
  .contactBOX {
    margin: 5% 10% 10% 10%;
  }
}
.contactTitle {
  font-size: 40px;
  font-weight: bold;
  color: #0caeeb;
  text-align: center;
  padding-top: 5%;
}

#contactICON {
  font-size: 25px;
}

.form-control:focus {
  border-color: #0caeeb;

  box-shadow: inset 0 1px 1px rgba(168, 164, 164, 0.075), 0 0 4px #689397;
}
input[type="text"],
input[type="email"],
#textarecontact {
  border: #0caeeb solid 2px;
}
.btnContact {
  background-color: #0caeeb;
  color: #fff;
}
.btnContact:hover {
  border-color: #0caeeb;
  color: #fff;
}
</style>