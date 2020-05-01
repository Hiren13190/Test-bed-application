<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Recent Test Beds</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template slot="columns">
          <th>Referral</th>
          <th>Visitors</th>
          <th>Progress</th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            {{ row.name }}
          </th>
          <td>
            {{ row.visitors }}
          </td>
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{ row.progress }}%</span>
              <base-progress :type="row.progressType" class="pt-0" :show-percentage="false" :value="row.progress" />
            </div>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "social-traffic-table",
  data() {
    return {
      tableData: [
        {
          name: "Angular Now UI Kit PRO",
          visitors: "1,480",
          progress: 60,
          progressType: "gradient-danger"
        },
        {
          name: "React Material Dashboard",
          visitors: "5,480",
          progress: 70,
          progressType: "gradient-success"
        },
        {
          name: "Vue Paper UI Kit PRO",
          visitors: "4,807",
          progress: 80,
          progressType: "gradient-primary"
        },
        {
          name: "Argon Design System",
          visitors: "3,678",
          progress: 75,
          progressType: "gradient-info"
        },
        {
          name: "Black Dashboard",
          visitors: "2,645",
          progress: 30,
          progressType: "gradient-warning"
        }
      ]
    };
  }
};
</script>
<style></style>
