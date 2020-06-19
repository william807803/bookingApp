<template>
      <h2>Sign Out...</h2>
</template>

<script>
import router from "@/router";

export default {
  async created() {
    await this.$store.dispatch("auth/signOut");
    router.push("/");
  }
};
</script>
