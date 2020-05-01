<template>
  <v-container style="max-width:100%;background-color:#F4F5F9;" class="py-0">
    <v-row>
      <v-col cols="12" sm="6" md="7" lg="8" class="py-0">
        <v-row>
          <v-col>
            <v-toolbar flat color="primary">
              <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

              <v-btn
                depressed
                color="secondary"
                class="mr-4 hidden-xs-only"
                v-for="(item, index) in headers"
                :key="index"
              >{{item}}</v-btn>
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
                      <v-card-text>{{ item.content1}}</v-card-text>
                      <v-card-text>{{ item.content2}}.</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="12" md="12" lg="4">
            <v-card class="mx-auto" max-width="375" height="100%" :to="{ path: '/test-dashboard' }">
              <v-img src="@/assets/download.jpeg" height="200px"></v-img>

              <v-card-title class="card-title">Testcase Dashboard</v-card-title>

              <v-card-subtitle>You can find testbed count and other details on Test Dashboard</v-card-subtitle>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="purple" text>Click Here</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="12" md="12" lg="8">
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
                  <v-col cols="12" sm="5" class="py-0">
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
                  <v-col cols="12" sm="4" class="py-0">
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
                  <v-col cols="12" sm="3" class="py-0">
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
      </v-col>

      <v-col cols="12" sm="6" md="5" lg="4" class="py-0">
        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-text>
                <v-text-field solo flat placeholder="Your email address..."></v-text-field>
                <v-btn block depressed color="secondary">Subscribe</v-btn>
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

    <v-navigation-drawer class="bg-gradient-info" v-model="drawer" absolute style="height: 100vh;">
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-for="item in headers" :key="item" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>-->

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
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
      drawer: false,
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
      headers: ["Home", "Services", "Portfolio", "Sandbox"],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          tab: "Network Testing",
          content1:
            "Measure the response time of a device to an invite request for session initiation",
          content2:
            "Ensure that network has sustain high loads and still remain operational"
        },
        { tab: "Edge Cloud Testing", content1: "", content2: "" },
        {
          tab: "User Equipment Emulation",
          content1: "",
          content2: ""
        },
        { tab: "Content Testing", content1: "", content2: "" }
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
      YearList: ["2020", "2021", "2022", "2023", "2024"],
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
.v-card__title {
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
}
.card-title {
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  color: black;
}
.v-tab {
  font-weight: bold;
  font-size: 18px;
}
.v-card__text {
  font-size: 17px;
}
</style>