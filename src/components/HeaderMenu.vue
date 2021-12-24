<template>
  <div>
    <b-navbar dark toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" style="margin-left: 30px">
        <img
          src="../assets/factory-icon.png"
          width="30px"
          height="30px"
          class="rounded-circle"
        />
        Factory Dashboard</b-navbar-brand
      >

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/usersettings">User Settings</b-nav-item>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-50">
          <b-nav-item-dropdown
            v-model="loginname"
            :text="`User ${loginname.toString()}`"
            right
          >
            <b-dropdown-item href="/login">Login</b-dropdown-item>
            <b-dropdown-item href="/register">Register</b-dropdown-item>
            <b-dropdown-item href="/">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeaderMenu",
  data: () => ({
    loginname: "",
  }),

  watch: {
    isLoginName(val) {
      this.SET_LOGINNAME(val);
    },
  },
  methods: {
    ...mapMutations(["SET_LOGINNAME"]),
  },
};
</script>

<style scoped>
.mr-50 {
  margin-right: 50px;
}
</style>
