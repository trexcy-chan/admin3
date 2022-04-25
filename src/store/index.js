import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase";
import { signOut,} from "firebase/auth";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async signin({ commit }) {
      commit("SET_USER", auth.currentUser);
      router.push("/homepage");
      // this.$router.push("/");

    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/loginpage");
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (router.isReady() && router.currentRoute.value.path === "/login") {
            router.push("/homepage");
          }
        }
      });
    },
  },
  modules: {
  }
})
