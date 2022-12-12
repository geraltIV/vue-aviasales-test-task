import { createStore } from "vuex";
import { SERVER_ERROR_MESSAGE } from "../constants/messages.js";
import axios from "axios";

export default createStore({
  state: {
    allTickets: [],
    error: "",
  },
  getters: {
    getAllTickets: (state) => state.allTickets,
    getError: (state) => state.error,
  },
  mutations: {
    ALL_TICKETS(state, data) {
      state.allTickets = data;
    },
    ERROR(state, data) {
      state.error = data;
    },
  },
  actions: {
    async fetchAllTickets({ commit }) {
      try {
        const { data } = await axios.get("https://avs-backend.now.sh/search");

        const response = await axios.get(
          `https://avs-backend.vercel.app/tickets?searchId=${data.searchId}`
        );

        commit("ALL_TICKETS", response.data.tickets);
      } catch (e) {
        commit("ERROR", SERVER_ERROR_MESSAGE);
      }
    },
  },
});
