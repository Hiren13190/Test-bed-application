<template>
  <div>
    <CommonSection />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <orders-table title="Orders"></orders-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonSection from "../components/CommonHeader";
import OrdersTable from "./Tables/OrdersTable";
export default {
  name: "Orders",
  components: {
    OrdersTable,
    CommonSection
  }
};
</script>
<style></style>
