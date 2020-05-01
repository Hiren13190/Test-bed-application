<template>
  <div>
    <CommonSection />
    <div class="container-fluid">
      <div class="row">
        <testbed-location></testbed-location>
      </div>
      <div class="row mt-5">
        <network-diagram></network-diagram>
        <testbed-process></testbed-process>
      </div>
    </div>
  </div>
</template>
<script>
import TestbedLocation from "./Dashboard/TestbedLocation";
import TestbedProcess from "./Dashboard/TestbedProcess";
import NetworkDiagram from "./Dashboard/NetworkDiagram";
import CommonSection from "../components/CommonHeader";

export default {
  name: "TestDashboard",
  components: {
    NetworkDiagram,
    CommonSection,
    TestbedLocation,
    TestbedProcess
  },
  data() {
    return {};
  }
};
</script>
<style></style>
