<template>
  <div class="w-container">
    <Card style="width:500px;">
      <Row class="justify-content-md-center">
        <Col>
          <div class="b-form-1">
            <h2 style="text-align:center;margin-bottom:20px;">Confirm Sign Up</h2>
            <Form :model="formData" :label-width="80" style="margin:0px 20px;">
              <FormItem label="Username:" label-for="usernameInput">
                <Input
                  id="usernameInput"
                  type="text"
                  v-model="formData.username"
                  required
                  autofocus
                  placeholder="Enter username"
                />
              </FormItem>
              <FormItem label="Code:" label-for="codeInput">
                <Input
                  id="codeInput"
                  type="password"
                  v-model="formData.code"
                  required
                  placeholder="Enter Code"
                />
              </FormItem>
              <div style="display:flex;justify-content: flex-end;align-items: center;">
                <Button style="margin-right:10px;" @click="confirmResend">Resend Code</Button>
                <Button type="primary" :loading="loading" @click="confirmSignUp">Submit</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row class="justify-content-md-center">
        <Col>
          <v-alert />
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import Vue from "vue";

import { mapGetters } from "vuex";
import router from "@/router";
import store from "@/store";

import Alert from "@/components/auth/Alert.vue";

Vue.component("v-alert", Alert);

export default {
  data() {
    return {
      loading: false,
      formData: {
        username: "",
        code: ""
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async confirmSignUp() {
      this.loading = true;
      await store.dispatch("auth/confirmSignUp", {
        username: this.formData.username,
        code: this.formData.code
      });
      this.loading = false;
      if (!this.hasAuthenticationStatus) {
        router.push("signIn");
      }
    },
    async confirmResend() {
      await store.dispatch("auth/confirmResend", {
        username: this.formData.username
      });
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