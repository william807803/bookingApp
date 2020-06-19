<template>
  <div class="w-container">
    <Card style="width:500px;">
      <Row>
        <Col>
          <div class="b-form-1">
            <h2 style="text-align:center;margin-bottom:20px;">BOOKING APP</h2>
            <Form :model="formData" :label-width="80" style="margin:0px 20px;">
              <FormItem label="Email:">
                <Input type="email" v-model="formData.email" required placeholder="Enter email" />
              </FormItem>
              <FormItem label="Password:">
                <Input
                  type="password"
                  v-model="formData.pass"
                  required
                  placeholder="Enter Password"
                />
              </FormItem>

              <div style="display:flex;justify-content: space-between;align-items: center;">
                <router-link to="signUp">Create an account</router-link>
                <Button type="primary" :loading="loading" @click="signIn">Sign In</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert />
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

export default {
  components: { Alert },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        pass: ""
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signIn() {
      this.loading = true;
      await store.dispatch("auth/signIn", {
        username: this.formData.email,
        password: this.formData.pass
      });
      this.loading = false;
      if (!this.hasAuthenticationStatus) {
        router.push("/myProfile");
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
