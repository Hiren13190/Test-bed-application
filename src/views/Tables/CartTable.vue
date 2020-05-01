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
          <th>Project</th>
          <th>Status</th>
          <th>Users</th>
          <th>Date / Time</th>
          <th>Action</th>
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
            <badge class="badge-dot mr-4" :type="row.statusType">
              <i :class="`bg-${row.statusType}`"></i>
              <span class="status">{{ row.status }}</span>
            </badge>
          </td>
          <td>
            <div class="avatar-group">
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                <img alt="Image placeholder" src="img/theme/team-1-800x800.jpg" />
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
                <img alt="Image placeholder" src="img/theme/team-2-800x800.jpg" />
              </a>
              <a
                href="#"
                class="avatar avatar-sm rounded-circle"
                data-toggle="tooltip"
                data-original-title="Alexander Smith"
              >
                <img alt="Image placeholder" src="img/theme/team-3-800x800.jpg" />
              </a>
              <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
                <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg" />
              </a>
            </div>
          </td>

          <td>
            <span class="status">{{ row.date_time }}</span>
          </td>

          <td class="text-right">
            <div class="d-flex align-items-center">
              <router-link to="/booking">Booking</router-link>
            </div>
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
          img: "img/theme/angular.jpg",
          title: "Angular Now UI Kit PRO",
          budget: "$1800 USD",
          status: "pending",
          statusType: "success",
          date_time: "15-02-2020 to 20-02-2020 / 1pm to 4pm"
        },
        {
          img: "img/theme/react.jpg",
          title: "React Material Dashboard",
          budget: "$4400 USD",
          status: "pending",
          statusType: "info",
          date_time: "20-02-2020 to 28-02-2020 / 6pm to 10pm"
        },
        {
          img: "img/theme/vue.jpg",
          title: "Vue Paper UI Kit PRO",
          budget: "$2200 USD",
          status: "pending",
          statusType: "success",
          date_time: "15-02-2020 to 18-02-2020 / 3pm to 5pm"
        }
      ]
    };
  }
};
</script>
<style></style>
