<template>
  <div v-if="tickets.length" class="tickets">
    <ticket-list-item
      v-for="ticket in tickets"
      :key="ticket.ticketEntityId"
      :ticket="ticket"
    />
  </div>
  <div v-else class="ticket" v-html="errorText"></div>
</template>

<script>
import TicketListItem from "./TicketListItem.vue";

export default {
  name: "TicketList",
  components: {
    TicketListItem,
  },
  props: {
    tickets: {
      type: Array,
      default: () => [],
    },
    errorText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/base.scss";

.tickets {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.ticket {
  @extend %rounded-shadowed;
  width: 91.5%;
  padding: 20px;
}
</style>
