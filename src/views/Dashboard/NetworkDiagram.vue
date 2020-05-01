<template>
  <div class="col-xl-8 mb-5 mb-xl-0">
    <card header-classes="bg-transparent">
      <div slot="header" class="row align-items-center">
        <div class="col">
          <h5 class="h3 mb-0">Network Diagram</h5>
        </div>
      </div>
      <div class="imgSectionCls">
        <img src="@/assets/lab.jpg" />
      </div>
    </card>
  </div>
</template>
<script>
export default {
  name: "page-visits-table",
  data() {
    return {};
  }
};
</script>
<style scoped>
.imgSectionCls {
  width: 100%;
  height: 750px;
}
.imgSectionCls img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>

