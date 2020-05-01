<template>
  <div>
    <CommonSection />
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Upload File</h3>
                  <small>You can upload or drop multiple files</small>
                </div>
              </div>
            </div>
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" class="mt-5 mb-10"></vue-dropzone>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonSection from "../components/CommonHeader";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "app",
  components: {
    vueDropzone: vue2Dropzone,
    CommonSection
  },
  data: function() {
    return {
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
<style></style>
