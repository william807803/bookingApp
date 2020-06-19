<template>
  <div
    :show="hasAuthenticationStatus"
  >{{ authenticationStatus.message }}.</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    // clear existing status message
    this.$store.dispatch("auth/clearAuthenticationStatus");
  },
  computed: {
    ...mapGetters("auth", ["authenticationStatus", "hasAuthenticationStatus"])
  }
};
</script>
