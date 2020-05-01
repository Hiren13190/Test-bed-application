<template>
  <div>
    <CommonSection />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <cart-table title="Carts"></cart-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonSection from "../components/CommonHeader";
import CartTable from "./Tables/CartTable";
export default {
  name: "Carts",
  components: {
    CartTable,
    CommonSection
  }
};
</script>
<style></style>
