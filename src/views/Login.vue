<template>
  <div>
    <b-card
      title="Login"
      tag="article"
      style="center max-width: 20rem"
      class="mb-2"
    >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-2"
          label="Enter User Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="Your Password:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="User Role:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="usercredentials"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label-for="input-4">
          <b-form-checkbox
            id="input-4"
            v-model="form.checked"
            value="true"
            unchecked-value="false"
          >
            Remember Me
          </b-form-checkbox>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        role: "",
      },
      usercredentials: ["admin", "editor"],
      show: true,
    };
  },
  computed: {
    ...mapState(["loginname"]),
  },
  methods: {
    ...mapActions(["SingIn"]),

    onSubmit(event) {
      event.preventDefault();

      const formData = new FormData();
      formData.username = this.form.name;
      formData.password = this.form.password;
      formData.email = this.form.email;
      const msg = JSON.stringify(formData);
      this.SingIn(msg)
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          alert(err);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
