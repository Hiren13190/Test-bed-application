<template>
  <div class="col-xl-4">
    <card header-classes="bg-transparent">
      <div slot="header" class="row align-items-center">
        <div class="col">
          <h5 class="h3 mb-0">Testcase % Progress</h5>
        </div>
      </div>
      <div id="piechart_3d" style="width: 500px; height: 500px;"></div>
    </card>
  </div>
</template>
<script>
export default {
  name: "TestbedProcess",
  mounted() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Test Beds", "Process"],
        ["Finished", 310],
        ["Unfinished", 75]
      ]);

      var options = {
        is3D: true,
        legend: { position: "top", alignment: "start" }
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("piechart_3d")
      );
      chart.draw(data, options);
    }
  }
};
</script>