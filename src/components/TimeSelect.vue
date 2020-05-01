<template>
  <v-select
    :items="getHours()"
    placeholder="Select time"
    v-model="timeField"
    solo
    @change="onChange"
    required
    :rules="[v => !!v || firstOption + ' is required!']"
  ></v-select>
</template>

<script>
export default {
  name: "TimeSelect",
  data() {
    return {
      timeField: this.value
    };
  },
  props: {
    value: String,
    startTime: String,
    firstOption: {
      type: String,
      default: "Select"
    },
    step: {
      type: Number,
      default: 15
    }
  },
  methods: {
    getHours() {
      var startHr = 0;
      var startMin = 0;
      if (this.startTime) {
        var timeParts = this.startTime.split(/[\s:]+/);
        startHr = parseInt(timeParts[0]);
        startMin = parseInt(timeParts[1]);
        var ampm = timeParts[2];
        if (ampm == "PM" && startHr < 12) startHr = startHr + 12;
        else if (ampm == "AM" && startHr === 12) startHr = startHr - 12;
      }

      var hours = [];
      var start = new Date(1, 1, 1, startHr, startMin);
      var end = new Date(1, 1, 2, 0, 0);
      if (this.startTime) {
        start.setMinutes(start.getMinutes() + this.step);
      }
      for (var d = start; d < end; d.setMinutes(d.getMinutes() + this.step)) {
        hours.push(this.format(d));
      }

      return hours;
    },
    format(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours < 12 ? "AM" : ((hours = hours % 12), "PM");
      hours = hours == 0 ? 12 : hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var ret = hours + ":" + minutes + " " + ampm;
      return ret;
    },
    onChange(val) {
      this.$emit("input", val);
    }
  }
};
</script>
