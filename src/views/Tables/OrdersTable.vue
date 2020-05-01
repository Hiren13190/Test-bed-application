<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent' : ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">{{ title }}</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>Test Bed</th>
          <th>OS</th>
          <th>Ram / Rom</th>
          <th>Date / Time</th>
          <th>Payment</th>
          <th>Status</th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.img" />
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.title }}</span>
              </div>
            </div>
          </th>
          <td>
            <span class="status">{{ row.os }}</span>
          </td>
          <td>
            <span class="status">{{ row.ram_rom }}</span>
          </td>
          <td>
            <span class="status">{{ row.date_time }}</span>
          </td>
          <td>
            <span class="status">{{ row.budget }}</span>
          </td>
          <td>
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{ row.status }}</span>
            </badge>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String
    },
    title: String
  },
  data() {
    return {
      tableData: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "Argon Design System",
          budget: "$2500 USD",
          ram_rom: "8GB / 1TB",
          os: "Linux",
          date_time: "15-02-2020 to 18-02-2020 / 6pm to 10pm",
          status: "completed",
          statusType: "success"
        },
        {
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          budget: "$1800 USD",
          ram_rom: "8GB / 1TB",
          os: "Mac",
          date_time: "26-02-2020 to 28-02-2020 / 6pm to 10pm",
          status: "completed",
          statusType: "success"
        }
      ]
    };
  }
};
</script>
<style></style>
