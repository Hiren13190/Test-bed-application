<template>
  <base-header class="bg-gradient-info pt-5 pt-md-8">
    <!-- Card stats -->
    <div class="row mt-10 mb-10">
      <div class="col-xl-3 col-lg-3">
        <stats-card
          title="Network Bandwidth consumed"
          type="gradient-red"
          sub-title="460 Mbps"
          icon="ni ni-active-40"
          class="mb-4 mb-xl-0"
        >
          <template slot="footer">
            <span class="text-success mr-2">
              <i class="fa fa-arrow-up"></i> 3.48%
            </span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </div>
      <div class="col-xl-3 col-lg-3">
        <stats-card
          title="Latency measurements"
          type="gradient-orange"
          sub-title="40 ms"
          icon="ni ni-time-alarm"
          class="mb-4 mb-xl-0"
        >
          <template slot="footer">
            <span class="text-success mr-2">
              <i class="fa fa-arrow-up"></i> 12.18%
            </span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </div>
      <div class="col-xl-3 col-lg-3">
        <stats-card
          title="Round Trip Time"
          type="gradient-green"
          sub-title="80 ms"
          icon="ni ni-watch-time"
          class="mb-4 mb-xl-0"
        >
          <template slot="footer">
            <span class="text-danger mr-2">
              <i class="fa fa-arrow-down"></i> 5.72%
            </span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </div>
      <div class="col-xl-3 col-lg-3">
        <stats-card
          title="No. of connections to network tested"
          type="gradient-info"
          sub-title="20,000"
          icon="ni ni-chart-bar-32"
          class="mb-4 mb-xl-0"
        >
          <template slot="footer">
            <span class="text-success mr-2">
              <i class="fa fa-arrow-up"></i> 54.8%
            </span>
            <span class="text-nowrap">Since last month</span>
          </template>
        </stats-card>
      </div>
    </div>
  </base-header>
</template>
