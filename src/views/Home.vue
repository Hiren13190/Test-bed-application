<template>
  <v-container style="max-width:100%;background-color:#F4F5F9;" class="py-0">
    <v-row>
      <v-col cols="12" sm="8" class="py-0">
        <v-row>
          <v-col>
            <v-toolbar flat color="primary">
              <v-btn depressed color="secondary" class="mr-4">Home</v-btn>
              <v-btn depressed color="secondary" class="mr-4">Services</v-btn>
              <v-btn depressed color="secondary" class="mr-4">Portfolio</v-btn>
              <v-btn depressed color="secondary" class="mr-4">SANDBOX</v-btn>
            </v-toolbar>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-text>
                <div class="white">
                  <v-card-text>
                    <v-radio-group v-model="radios" background-color="white" row hide-details>
                      <v-radio label="N/W APP" value="radio-1"></v-radio>
                      <v-radio label="UE APP" value="radio-2"></v-radio>
                      <v-radio label="CONTENT" value="radio-3"></v-radio>
                    </v-radio-group>
                  </v-card-text>

                  <v-card-title class="py-1">Upload File</v-card-title>
                  <v-card-title class="pt-0 body-2">You can upload or drop multiple files</v-card-title>

                  <v-card-text>
                    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                  </v-card-text>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-text>
                <v-tabs v-model="tab" background-color="primary" color="white">
                  <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="item in items" :key="item.tab">
                    <v-card flat color="primary">
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" md="12" lg="7">
            <v-card flat color="primary" style="height: 100%;" :to="{ name: 'dashboard' }">
              <v-card-title>Test Dashboard</v-card-title>
              <v-card-text></v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="12" md="12" lg="5">
            <v-card flat color="primary">
              <v-card-title>
                Payment details
                <v-spacer></v-spacer>

                <v-img
                  aspect-ratio="3.075"
                  max-height="40"
                  src="https://i.imgur.com/lY1wk82.png"
                  position="right"
                  contain
                />
              </v-card-title>
              <v-card-text>
                <v-text-field
                  solo
                  flat
                  placeholder="Name"
                  v-model="payment.name"
                  :rules="[v => !!v || 'Name is required!']"
                  required
                />

                <v-text-field
                  solo
                  flat
                  mask="credit-card"
                  label="Card Number"
                  placeholder="4242 4242 4242 4242"
                  v-model="payment.cardNumber"
                  :rules="[v => !!v || 'Card number is required!']"
                  required
                />

                <v-row>
                  <v-col cols="12" sm="4" class="pr-1 py-0">
                    <v-select
                      solo
                      flat
                      :items="MonthList"
                      label="Month"
                      append-icon="keyboard_arrow_down"
                      v-model="payment.month"
                      :rules="[v => !!v || 'Month is required!']"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="4" class="px-1 py-0">
                    <v-select
                      solo
                      flat
                      :items="YearList"
                      label="Year"
                      append-icon="keyboard_arrow_down"
                      v-model="payment.year"
                      :rules="[v => !!v || 'Year is required!']"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="4" class="pl-1 py-0">
                    <v-text-field
                      solo
                      flat
                      label="CVV"
                      v-model="payment.cvv"
                      :rules="[v => !!v || 'CVV is required!']"
                      required
                    />
                  </v-col>
                </v-row>

                <v-btn block depressed color="secondary">Pay now</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-title>Testbed History</v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="3" v-for="item in 4" :key="item">
                    <v-card flat>
                      <v-img height="100px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>

                      <v-card-subtitle>Number 10</v-card-subtitle>

                      <v-card-text class="caption">
                        <div>Whitehaven Beach</div>

                        <div>Whitsunday Island, Whitsunday Islands</div>
                        <v-rating dense v-model="rating"></v-rating>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="4" class="py-0">
        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-text>
                <v-text-field solo flat placeholder="Your email address..."></v-text-field>
                <v-btn block depressed color="secondary">Subscibe</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-title>
                Your Profile
                <v-spacer></v-spacer>
                <v-btn depressed color="secondary">
                  <i class="ni ni-settings"></i>&nbsp;Edit Profile
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-row class="ma-0 white">
                  <v-col cols="4">
                    <v-avatar size="100" tile>
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                  </v-col>

                  <v-col cols="8" class="py-0">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                        <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                        <v-list-item-subtitle>
                          <a href="mailto:test@example.com">test@example.com</a>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          <a href="tel:+91 9999999999">+91 999 9999 999</a>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-date-picker full-width v-model="date" color="primary"></v-date-picker>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" sm="6" md="6" lg="4" v-for="item in buttons" :key="item">
            <v-btn block depressed color="secondary">{{item}}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Home",
  components: { vueDropzone },
  data() {
    return {
      tab: null,
      date: "2018-03-02",
      radios: "radio-1",
      rating: 3,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        { tab: "Network Testing", content: "Tab 1 Content" },
        { tab: "Edge Cloud Testing", content: "Tab 2 Content" },
        { tab: "User Equipment Emulation", content: "Tab 3 Content" },
        { tab: "Content Testing", content: "Tab 4 Content" }
      ],
      buttons: [
        "Gallery",
        "Profile",
        "Message",
        "Search",
        "NO",
        "Yes",
        "Info",
        "Blog",
        "Chat"
      ],
      YearList: ["2030", "2029", "2028", "2017", "whatever"],
      MonthList: [
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
      ],
      payment: {
        name: null,
        cardNumber: null,
        year: null,
        month: null,
        cvv: null
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>

<style >
.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  margin-bottom: 0;
}
</style>