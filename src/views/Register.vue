<template>
  <div class="row justify-content-center mt-10">
    <div class="container-fluid mt--10">
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Create Account</h3>
                </div>
              </div>
            </div>
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Client Company Name
                    </label>
                    <v-text-field
                      v-model="clientCompanyName"
                      :rules="clientCompanyNameRules"
                      placeholder="Client Company Name"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Client Company Address
                    </label>
                    <v-text-field
                      v-model="clientCompanyAddress"
                      :rules="clientCompanyAddressRules"
                      placeholder="Client Company Address"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Point of Contact Name
                    </label>
                    <v-text-field
                      v-model="pointOfContactName"
                      :rules="pointOfContactNameRules"
                      placeholder="Point of Contact Name"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Point of Contact Email
                    </label>
                    <v-text-field
                      v-model="pointOfContactEmail"
                      :rules="pointOfContactEmailRules"
                      placeholder="Point of Contact Email"
                      required
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Test Application Name
                    </label>
                    <v-text-field
                      v-model="testApplicationName"
                      placeholder="Test Application Name"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Test Application Description
                    </label>
                    <v-text-field
                      v-model="testApplicationDescription"
                      placeholder="Test Application Description"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Business Type
                    </label>
                    <v-text-field v-model="businessType" placeholder="Business Type" required solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Usage of network per week
                    </label>
                    <v-text-field
                      v-model="networkPerWeek"
                      placeholder="Usage of network per week"
                      required
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Latency Bandwidth
                    </label>
                    <v-text-field v-model="latencyBandwidth" placeholder="Latency Bandwidth" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Network Usage
                    </label>
                    <v-text-field v-model="networkUsage" placeholder="Network Usage" required solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Retaining Content Quality
                    </label>
                    <v-text-field
                      v-model="retainingContentQuality"
                      placeholder="Retaining Content Quality"
                      required
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Features
                    </label>
                    <v-text-field v-model="feature" placeholder="Features" required solo></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <label class="form-control-label">
                      Components
                    </label>
                    <v-text-field v-model="component" placeholder="Components" required solo></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <label class="form-control-label">
                      Client Logo
                    </label>
                    <v-file-input placeholder="Client Logo" solo dense></v-file-input>
                  </v-col>

                  <v-col cols="12">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[v => !!v || 'You must agree to continue!']"
                      label="Do you agree to term and conditions?"
                      required
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12">
                    <v-btn :disabled="!valid" color="primary" class="mr-4" @click="validate">Create Account</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "My Account",
  data() {
    return {
      valid: true,
      clientCompanyName: "",
      clientCompanyNameRules: [v => !!v || "Client company name is required"],
      clientCompanyAddress: "",
      clientCompanyAddressRules: [v => !!v || "Client company address is required"],
      pointOfContactName: "",
      pointOfContactNameRules: [v => !!v || "Point of contact name is required"],
      pointOfContactEmail: "",
      pointOfContactEmailRules: [
        v => !!v || "Point of contact email is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      testApplicationName: "",
      testApplicationDescription: "",
      clientLogo: "",
      networkPerWeek: "",
      businessType: "",
      latencyBandwidth: "",
      networkUsage: "",
      retainingContentQuality: "",
      feature: "",
      component: ""
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push("/login");
      }
    }
  }
};
</script>
<style></style>
