<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!-- <side-bar :background-color="'primary'" short-title="innovate5g" title="innovate5g">
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />
        <sidebar-item
          :link="{ name: 'Profile', icon: 'ni ni-single-02 text-primary', path: '/profile' }"
        />
        <sidebar-item
          :link="{ name: 'Test Bed List', icon: 'ni ni-bullet-list-67 text-primary', path: '/test-bed-list' }"
        />
        <sidebar-item :link="{ name: 'Carts', icon: 'ni ni-cart text-primary', path: '/carts' }" />

        <sidebar-item
          :link="{ name: 'Orders', icon: 'ni ni-bullet-list-67 text-primary', path: '/orders' }"
        />
        <sidebar-item
          :link="{ name: 'Upload Prototype Artifact', icon: 'ni ni-cloud-upload-96 text-primary', path: '/upload' }"
        />
        <sidebar-item
          :link="{ name: 'Admin (Add Test Bed)', icon: 'ni ni-fat-add text-primary', path: '/admin-add-test-bed' }"
        />
      </template>
    </side-bar>-->
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="scss"></style>
