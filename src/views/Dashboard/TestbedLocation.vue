<template>
  <div class="col-xl-12 mb-5 mb-xl-0">
    <card header-classes="bg-transparent">
      <div slot="header" class="row align-items-center">
        <div class="col">
          <h5 class="h3 mb-0">Test Bed Locations</h5>
        </div>
      </div>
      <div class="col-xl-4 float-left">
        <bar-chart></bar-chart>
      </div>
      <div class="col-xl-8 float-right">
        <div id="regions_div" style="height: 500px;"></div>
      </div>
    </card>
  </div>
</template>

<script>
import BarChart from "./BarChart";
export default {
  name: "TestbedLocation",
  components: {
    BarChart
  },
  mounted() {
    google.charts.load("current", {
      packages: ["geochart"],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ["Country", "Test Beds"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["Australia", 700]
      ]);

      var options = {};

      var chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );

      chart.draw(data, options);
    }
  }
};
</script>