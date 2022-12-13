<template>
  <div>
    <div class="tickets__header">
      <img class="header__logo" :src="logo" />
    </div>
    <div class="tickets__body">
      <filters :transfers="transfers" @setFilters="changeFilters($event)" />
      <div class="tickets__container">
        <div class="buttons__container">
          <v-button
            v-for="button in sortButtons"
            :key="button.selector"
            @click="sortTickets(button.selector)"
            :class="{
              active: sort === button.selector,
              disabled: !sortedTickets.length,
            }"
            :disabled="!sortedTickets.length"
            >{{ button.label }}</v-button
          >
        </div>
        <loader v-if="loading" />
        <ticket-list-view
          v-else
          :tickets="sortedTickets.slice(0, slicedIndex)"
          :error-text="message"
        />
        <div
          v-if="sortedTickets.length"
          @click="loadMoreTickets()"
          class="more-button"
        >
          <v-button>Показати ще 5 квитків</v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { BUTTONS, TRANSFERS } from "./constants/tickets.js";
import {
  NO_MATHCED_TICKETS_MESSAGE,
  FILTERS_NAMES,
} from "./constants/messages.js";
import TicketListView from "./components/TicketList.vue";
import Filters from "./components/Filters.vue";
import VButton from "./components/ui/VButton.vue";
import Loader from "./components/ui/Loader.vue";
import { sort } from "./utils/sort.js";
import logo from "./assets/images/logo.svg";

export default {
  components: { TicketListView, Filters, VButton, Loader },
  data: () => ({
    loading: false,
    logo,
    tickets: [],
    sort: FILTERS_NAMES.CHEAP,
    filters: [],
    transfers: TRANSFERS,
    sortButtons: BUTTONS,
    slicedIndex: 5,
  }),
  async mounted() {
    this.loading = true;
    await this.fetchAllTickets();
    this.loading = false;
  },
  computed: {
    ...mapGetters(["getAllTickets", "getError"]),
    message() {
      return this.getError.length ? this.getError : NO_MATHCED_TICKETS_MESSAGE;
    },
    filtersIds() {
      const selected = this.transfers.filter((t) => t.selected);
      return selected.reduce((sum, t) => [...sum, t.number], []);
    },
    filteredTickets() {
      let arr = [];

      this.getAllTickets.forEach((ticket) => {
        ticket.segments.forEach((seg) => {
          if (
            this.filtersIds.includes(seg.stops.length) ||
            (this.filtersIds.length === 1 && this.filtersIds[0] === 100)
          ) {
            if (!arr.includes(ticket)) {
              arr.push(ticket);
            }
          }
        });
      });

      return arr;
    },
    sortedTickets() {
      return sort(this.filteredTickets, this.sort);
    },
  },
  methods: {
    ...mapActions(["fetchAllTickets"]),
    changeFilters(id) {
      const filtered = this.transfers.find((el) => el.id === id);
      filtered.selected = !filtered.selected;

      this.transfers[0].selected = !this.filtersIds.length;
    },
    sortTickets(param) {
      this.sort = param;
    },
    loadMoreTickets() {
      this.slicedIndex += 5;
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/base.scss";

.inside__view {
  @extend %display-center;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
.full__view {
  @extend %display-center;
  box-sizing: content-box;
  width: 100vw;
  height: 98vh;
}

.buttons__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.tickets {
  &__header {
    margin-bottom: 30px;
  }
  &__body {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    height: 100%;
  }
  &__container {
    max-width: 502px;
    width: 100%;
  }
}
.more-button .sort-button {
  margin-top: 30px;
  background-color: $highlight-color;
  color: $white-color;
}
</style>
