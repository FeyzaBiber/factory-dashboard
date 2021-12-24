import Vue from "vue";
import Vuex from "vuex";
import axios from "@/plugins/AxiosInstance.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginname: "",
    token: "",
  },
  mutations: {
    SET_LOGINNAME(state, payload) {
      state.loginname = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },

  actions: {
    SingIn(context, payload) {
      console.log(payload);
      return axios
        .post("/user/signin", {
          params: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            datatype: "json",
          },
        })
        .then((resp) => {
          console.log([resp]);
          if (resp.status === 200) {
            context.commit("SET_TOKEN", resp.data.bestMatches);
            console.log(this.token);
          }
        })
        .catch((err) => console.log([err.response.data.errors]));
    },
    Register(context, payload) {
      return axios
        .post("/user/signup", payload)
        .then((resp) => {
          console.log([resp]);
          if (resp.status === 200) {
            context.commit("SET_TOKEN", resp.data.bestMatches);
          }
        })
        .catch((err) => console.log([err]));
    },
  },
  getters: {},
  modules: {},
});
