<template>
    <div>
        <CommonSection />
        <div class="container-fluid">
            <div class="row">
                <v-card class="mx-auto mb-10" max-width="400">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

                    <v-card-title>Angular Now UI Kit PRO</v-card-title>
                    <v-card-subtitle>$1050</v-card-subtitle>
                    <v-card-text>
                        Test bed consists of specific hardware, software, Operating system, network configuration, the product under
                        test, other system software and application software.
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text>Share</v-btn>

                        <v-btn color="purple" text>Explore</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider class="ma-0 pa-0"></v-divider>
                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-row class="ma-0 pa-0">
                                        <v-col cols="12" sm="6">
                                            <v-menu
                                                v-model="menu1"
                                                :close-on-content-click="false"
                                                :nudge-right="40"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                            >
                                                <template v-slot:activator="{ on }">
                                                    <label class="form-control-label">From Date</label>
                                                    <v-text-field
                                                        v-model="startDate"
                                                        placeholder="From Date"
                                                        readonly
                                                        v-on="on"
                                                        solo
                                                        prepend-inner-icon="event"
                                                        :rules="[v => !!v || 'From date is required!']"
                                                        required
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="startDate"
                                                    @input="menu1 = false"
                                                    no-title
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>

                                        <v-col cols="12" sm="6">
                                            <v-menu
                                                v-model="menu2"
                                                :close-on-content-click="false"
                                                :nudge-right="40"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                            >
                                                <template v-slot:activator="{ on }">
                                                    <label class="form-control-label">To Date</label>
                                                    <v-text-field
                                                        v-model="endDate"
                                                        placeholder="To Date"
                                                        readonly
                                                        v-on="on"
                                                        prepend-inner-icon="event"
                                                        solo
                                                        :rules="[v => !!v || 'To date is required!']"
                                                        required
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="endDate"
                                                    @input="menu2 = false"
                                                    no-title
                                                ></v-date-picker>
                                            </v-menu>
                                        </v-col>

                                        <v-col cols="12" sm="6">
                                            <label class="form-control-label">From Time</label>
                                            <time-select
                                                v-model="day.startTime"
                                                first-option="From time"
                                            ></time-select>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <label class="form-control-label">To Time</label>
                                            <time-select
                                                v-model="day.endTime"
                                                first-option="To time"
                                                :start-time="day.startTime"
                                            ></time-select>
                                        </v-col>
                                    </v-row>
                                    <v-row class="ma-0 pa-0">
                                        <div class="col-lg-12">
                                            <v-btn
                                                :disabled="!valid"
                                                block
                                                color="primary"
                                                class="white--text"
                                                @click="validate"
                                            >Add to Cart</v-btn>
                                        </div>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import CommonSection from "../components/CommonHeader";
import TimeSelect from "../components/TimeSelect";
export default {
    name: "Reservations",
    components: {
        TimeSelect,
        CommonSection
    },
    data: vm => ({
        valid: true,
        startDate: null,
        endDate: null,
        menu1: false,
        menu2: false,
        show: false,
        day: {
            startTime: "",
            endTime: ""
        }
    }),

    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date);
        }
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date);
        }
    },

    methods: {
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                this.$router.push("/carts");
            }
        }
    }
};
</script>
