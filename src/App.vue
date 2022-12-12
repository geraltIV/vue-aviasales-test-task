<template></template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    await this.fetchAllTickets();
    this.loading = false;
  },
  computed: {
    ...mapGetters(["getAllTickets", "getError"]),
  },
  methods: {
    ...mapActions(["fetchAllTickets"]),
  },
};
</script>

<style scoped></style>
