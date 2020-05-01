<template>
  <div>
    <CommonSection />
    <div class="container-fluid">
      <v-row>
        <v-col>
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>Test Bed</v-expansion-panel-header>
              <v-expansion-panel-content>Angular Now UI Kit PRO</v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Operating System</v-expansion-panel-header>
              <v-expansion-panel-content>Linux</v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Ram / Rom</v-expansion-panel-header>
              <v-expansion-panel-content>8GB / 1TB</v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Date / Time</v-expansion-panel-header>
              <v-expansion-panel-content>15-02-2020 to 18-02-2020 / 6pm to 10pm</v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>Web Server</v-expansion-panel-header>
              <v-expansion-panel-content>Apache</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col>
          <v-card>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card-title class="green lighten-2 white--text font-weight-black title">
                PAYMENT
                <br />DETAILS
                <v-spacer></v-spacer>

                <v-img aspect-ratio="3.075" max-height="40" :src="URL_IMAGE" position="right" contain />
              </v-card-title>

              <v-card-text class="ma-0">
                <v-row>
                  <v-col cols="6">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARDHOLDER’S NAME</v-subheader>
                    <v-text-field outlined label="Name" v-model="name" :rules="[v => !!v || 'Name is required!']" required />
                  </v-col>

                  <v-col cols="6">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CARD NUMBER</v-subheader>
                    <v-text-field
                      outlined
                      mask="credit-card"
                      label="Card Number"
                      placeholder="4242 4242 4242 4242"
                      v-model="cardNumber"
                      :rules="[v => !!v || 'Card number is required!']"
                      required
                    />
                  </v-col>

                  <v-col col="4">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader">EXPIRY DATE</v-subheader>
                    <v-select
                      :items="MonthList"
                      label="Month"
                      outlined
                      append-icon="keyboard_arrow_down"
                      v-model="month"
                      :rules="[v => !!v || 'Month is required!']"
                      required
                    />
                  </v-col>

                  <v-col col="4">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader"></v-subheader>
                    <v-select
                      :items="YearList"
                      label="Year"
                      outlined
                      append-icon="keyboard_arrow_down"
                      v-model="year"
                      :rules="[v => !!v || 'Year is required!']"
                      required
                    />
                  </v-col>

                  <v-col col="4">
                    <v-subheader class="grey--text text--lighten-1 pl-0 subheader">CVV</v-subheader>
                    <v-text-field outlined label="CVV" v-model="cvv" :rules="[v => !!v || 'CVV is required!']" required />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn :disabled="!valid" color="primary" class="float-right white--text" @click="validate"
                      >Continue</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import CommonSection from "../components/CommonHeader";
export default {
  components: { CommonSection },
  data() {
    this.URL_IMAGE = URL_IMAGE;
    this.YearList = ["2030", "2029", "2028", "2017", "whatever"];
    this.MonthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Jully",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return {
      panel: [0, 1, 2, 3, 4],
      disabled: false,
      readonly: false,
      name: null,
      cardNumber: null,
      year: null,
      month: null,
      cvv: null,
      valid: true
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push("/orders");
      }
    }
  }
};
const URL_IMAGE = "https://i.imgur.com/lY1wk82.png";
</script>
