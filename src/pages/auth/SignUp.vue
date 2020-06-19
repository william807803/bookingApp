<template>
  <div class="w-container">
    <Card style="width:500px;">
      <Row>
        <Col>
          <div class="b-form-1">
            <h2 style="text-align:center;margin-bottom:20px;">Sign Up</h2>
            <Form :model="formData" :label-width="80" style="margin:0px 20px;">
              <FormItem label="Username:" label-for="usernameInput">
                <Input
                  type="text"
                  v-model="formData.username"
                  required
                  placeholder="Enter username"
                />
              </FormItem>
              <FormItem label="Name:" label-for="nameInput">
                <Input
                  type="text"
                  v-model="formData.name"
                  required
                  placeholder="Enter your full name"
                />
              </FormItem>
              <FormItem label="Email:" label-for="emailInput">
                <Input type="email" v-model="formData.email" required placeholder="Enter email" />
              </FormItem>
              <FormItem label="Password:" label-for="passwordInput">
                <Input
                  type="password"
                  v-model="formData.pass"
                  required
                  placeholder="Enter Password"
                />
              </FormItem>
              <div style="display:flex;justify-content: flex-end;">
                <Button type="primary" :loading="loading" @click="signUp">Submit</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <v-alert />
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import Vue from "vue";
import router from "@/router";
import { mapGetters } from "vuex";
import Alert from "@/components/auth/Alert.vue";
import Amplify from "@aws-amplify/core";

const Logger = Amplify.Logger;

Vue.component("v-alert", Alert);

const logger = new Logger("SignUpPage");

export default {
  data() {
    return {
      loading: false,
      formData: {
        username: "",
        email: "",
        name: "",
        pass: ""
      }
    };
  },
  mounted() {
    // clear existing status message
    this.$store.dispatch("auth/clearAuthenticationStatus");
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signUp() {
      this.loading = true;
      logger.debug("sign-up");
      await this.$store.dispatch("auth/signUp", {
        username: this.formData.username,
        password: this.formData.pass,
        attributes: {
          name: this.formData.name,
          email: this.formData.email
        }
      });
      this.loading = false;
      if (!this.hasAuthenticationStatus) {
        router.push("SignUpConfirm");
      }
    }
  }
};
</script>
<style  scoped>
.w-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>