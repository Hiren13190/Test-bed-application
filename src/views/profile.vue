<template>
  <div>
    <base-header class="header pt-5 pt-lg-8 d-flex align-items-center">
      <!-- Mask -->
      <span class="mask bg-gradient-info opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center mt-10 mb-10">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello John</h1>
            <p class="text-white mt-0 mb-5">
              This is your profile page. You can see the progress you've made with your work and manage your projects or
              assigned tasks
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="img/theme/profile-pic.jpg" class="rounded-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <base-button size="sm" type="info" class="mr-4">Connect</base-button>
                <base-button size="sm" type="default" class="float-right">Message</base-button>
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  John Petric
                  <span class="font-weight-light">, 27</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>University of Computer Science
                </div>
                <hr class="my-4" />
                <p>
                  Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of
                  his own music.
                </p>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-8 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">My Profile</h3>
                </div>
              </div>
            </div>
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">Username</label>
                    <v-text-field
                      v-model="username"
                      :rules="[v => !!v || 'Username is required!']"
                      placeholder="Username"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">Email address</label>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      placeholder="Email address"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">First Name</label>
                    <v-text-field
                      v-model="firstName"
                      :rules="[v => !!v || 'First name is required!']"
                      placeholder="First Name"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">Last Name</label>
                    <v-text-field
                      v-model="lastName"
                      :rules="[v => !!v || 'Last name is required!']"
                      placeholder="Last Name"
                      required
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label class="form-control-label">Address</label>
                    <v-textarea
                      v-model="address"
                      solo
                      name="input-7-4"
                      :rules="[v => !!v || 'Address is required!']"
                      placeholder="Software Description"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <label class="form-control-label">City</label>
                    <v-text-field
                      v-model="city"
                      placeholder="City"
                      :rules="[v => !!v || 'City is required!']"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <label class="form-control-label">Country</label>
                    <v-text-field
                      v-model="country"
                      placeholder="Country"
                      :rules="[v => !!v || 'Country is required!']"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <label class="form-control-label">Postal Code</label>
                    <v-text-field
                      v-model="zipCode"
                      placeholder="Postal Code"
                      :rules="[v => !!v || 'Postal Code is required!']"
                      required
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label class="form-control-label">About Me</label>
                    <v-textarea
                      v-model="about"
                      solo
                      name="input-7-4"
                      :rules="[v => !!v || 'About Me is required!']"
                      placeholder="About Me"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      :disabled="!valid"
                      color="primary"
                      class="mr-4"
                      @click="validate"
                    >Update Profile</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      valid: true,
      username: "",
      email: "",
      emailRules: [
        v => !!v || "E-mail is required!",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid!"
      ],
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      about: ""
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
<style></style>
