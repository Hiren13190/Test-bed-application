<template>
  <div id="chart_div" style="height: 500px;"></div>
</template>
<script>
export default {
  name: "BarChart",
  mounted() {
    google.charts.load("current", { packages: ["corechart", "bar"] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
      var data = google.visualization.arrayToDataTable([
        ["Country", "TestBeds"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["Australia", 700]
      ]);

      var options = {
        title: "",
        chartArea: { width: "50%" },
        hAxis: {
          minValue: 0
        },
        vAxis: {}
      };

      var chart = new google.visualization.BarChart(
        document.getElementById("chart_div")
      );

      chart.draw(data, options);
    }
  }
};
</script>