<template>
    <div class="row justify-content-center mt-10">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent pb-5">
                    <div class="text-muted text-center mt-2 mb-3">
                        <small>Sign in with</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                                <img src="img/icons/common/github.svg" />
                            </span>
                            <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                                <img src="img/icons/common/google.svg" />
                            </span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
                </div>
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                    </div>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <label class="form-control-label">Email</label>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            placeholder="E-mail"
                            required
                            solo
                            prepend-inner-icon="email"
                        ></v-text-field>

                        <label class="form-control-label">Password</label>
                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            placeholder="Password"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                            prepend-inner-icon="lock"
                            solo
                        ></v-text-field>

                        <v-btn
                            :disabled="!valid"
                            color="primary"
                            class="mr-4"
                            @click="validate"
                        >Login</v-btn>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            valid: true,
            email: "",
            emailRules: [
                v => !!v || "E-mail is required!",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],
            show1: false,
            password: "",
            rules: {
                required: value => !!value || "Password is required!",
                min: v => v.length >= 8 || "Min 8 characters required!",
                emailMatch: () =>
                    "The email and password you entered don't match"
            }
        };
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                this.$router.push("/dashboard");
            }
        }
    }
};
</script>
<style></style>
