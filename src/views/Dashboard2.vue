<template>
  <v-container style="max-width:100%;background-color:#F4F5F9;" class="py-0">
    <v-row>
      <v-col cols="12" sm="6" md="7" lg="12" class="py-0">
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
                <v-row>
                  <v-col>
                    <stats-card
                      title="Network Bandwidth consumed"
                      type="gradient-red"
                      sub-title="800mbps"
                      icon="ni ni-active-40"
                    >
                      <template slot="footer">
                        <span class="text-success mr-2">
                          <i class="fa fa-arrow-up"></i> 3.48%
                        </span>
                        <span class="text-nowrap">Since last month</span>
                      </template>
                    </stats-card>
                  </v-col>

                  <v-col>
                    <stats-card
                      title="Latency measurements"
                      type="gradient-orange"
                      sub-title="300ms"
                      icon="ni ni-time-alarm"
                    >
                      <template slot="footer">
                        <span class="text-success mr-2">
                          <i class="fa fa-arrow-up"></i> 12.18%
                        </span>
                        <span class="text-nowrap">Since last month</span>
                      </template>
                    </stats-card>
                  </v-col>

                  <v-col>
                    <stats-card
                      title="Round Trip Time"
                      type="gradient-green"
                      sub-title="4m:35s"
                      icon="ni ni-watch-time"
                      style="height:100%;"
                    >
                      <template slot="footer">
                        <span class="text-danger mr-2">
                          <i class="fa fa-arrow-down"></i> 5.72%
                        </span>
                        <span class="text-nowrap">Since last month</span>
                      </template>
                    </stats-card>
                  </v-col>

                  <v-col>
                    <stats-card
                      title="No. of connections to network tested"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32"
                    >
                      <template slot="footer">
                        <span class="text-success mr-2">
                          <i class="fa fa-arrow-up"></i> 54.8%
                        </span>
                        <span class="text-nowrap">Since last month</span>
                      </template>
                    </stats-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card flat color="primary">
              <v-card-title>Test Bed Locations</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="4">
                    <bar-chart></bar-chart>
                  </v-col>
                  <v-col cols="8">
                    <div id="regions_div"></div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="8">
            <v-card flat color="primary">
              <v-card-title>Network Diagram</v-card-title>
              <v-card-text>
                <img src="@/assets/lab.jpg" style="height:100%;width:100%;" />
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card flat color="primary">
              <v-card-title>Testcase % Progress</v-card-title>
              <v-card-text>
                <div id="piechart_3d"></div>
              </v-card-text>
            </v-card>
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
import BarChart from "./Dashboard/BarChart";

export default {
  name: "Home",
  components: { BarChart },
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
  },
  mounted() {
    window.google.charts.load("current", {
      packages: ["geochart"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });
    window.google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = window.google.visualization.arrayToDataTable([
        ["Country", "Test Beds"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["Australia", 700]
      ]);

      var options = {};

      var chart = new window.google.visualization.GeoChart(
        document.getElementById("regions_div")
      );

      chart.draw(data, options);
    }

    window.google.charts.load("current", { packages: ["corechart"] });
    window.google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = window.google.visualization.arrayToDataTable([
        ["Test Beds", "Process"],
        ["Finished", 310],
        ["Unfinished", 75]
      ]);

      var options = {
        is3D: true,
        legend: { position: "top", alignment: "start" }
      };

      var chart = new window.google.visualization.PieChart(
        document.getElementById("piechart_3d")
      );
      chart.draw(data, options);
    }
  }
};
</script>

<style >
.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  margin-bottom: 0;
}
</style>