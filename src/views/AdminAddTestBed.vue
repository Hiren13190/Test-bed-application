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
                  <h3 class="mb-0">Add Test Bed</h3>
                </div>
              </div>
            </div>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Name
                  </label>
                  <v-text-field
                    v-model="name"
                    placeholder="Name"
                    :rules="[v => !!v || 'Name is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Operating System
                  </label>
                  <v-text-field
                    v-model="os"
                    placeholder="Operating System"
                    :rules="[v => !!v || 'Operating System is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Ram
                  </label>
                  <v-text-field
                    v-model="Ram"
                    placeholder="Ram"
                    :rules="[v => !!v || 'Ram is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Rom
                  </label>
                  <v-text-field
                    v-model="Rom"
                    placeholder="Rom"
                    :rules="[v => !!v || 'Rom is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Web Server
                  </label>
                  <v-text-field
                    v-model="webServer"
                    placeholder="Web Server"
                    :rules="[v => !!v || 'Web Server is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <label class="form-control-label">
                    Database
                  </label>
                  <v-text-field
                    v-model="database"
                    placeholder="Database"
                    :rules="[v => !!v || 'Database is required!']"
                    required
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="form-control-label">
                    Hardware Description
                  </label>
                  <v-textarea
                    v-model="hardwareDescription"
                    solo
                    name="input-7-4"
                    :rules="[v => !!v || 'Hardware description is required!']"
                    placeholder="Hardware Description"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <label class="form-control-label">
                    Software Description
                  </label>
                  <v-textarea
                    v-model="softwareDescription"
                    solo
                    name="input-7-4"
                    :rules="[v => !!v || 'Software description is required!']"
                    placeholder="Software Description"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">Create Test Bed</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonSection from "../components/CommonHeader";

export default {
  name: "app",
  components: {
    CommonSection
  },
  data: function() {
    return {
      valid: true,
      name: "",
      os: "",
      Ram: "",
      Rom: "",
      webServer: null,
      database: null,
      softwareDescription: null,
      hardwareDescription: null
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
