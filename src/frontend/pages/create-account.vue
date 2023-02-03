<template>
  <v-container fluid fill-height>
    <div class="d-flex align-center justify-center fill-width">
      <v-card width="500" max-width="100%">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Create Account</v-toolbar-title>
        </v-toolbar>

        <v-form @submit.prevent="create_account" novalidate>
          <v-card-text>
            <v-alert outlined type="error" v-if="errors.non_field_errors || errors.detail">
              <ul>
                <li v-for="(error, i) in errors.non_field_errors" :key="i">{{ error }}</li>
              </ul>
              {{ errors.detail }}
            </v-alert>

            <v-text-field
              v-model="form.email"
              label="Email"
              name="email"
              :error="!!errors.email"
              :error-messages="errors.email"
              prepend-icon="person"
              type="text"></v-text-field>
            <v-text-field
              v-model="form.password"
              label="Password"
              name="password"
              :error="!!errors.password"
              :error-messages="errors.password"
              prepend-icon="lock"
              ref="password"
              onfocus="this.select()"
              type="password"></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn type="button" depressed @click="$router.push('/login')">Go to login</v-btn>
            <v-spacer></v-spacer>
            <v-btn type="submit" depressed class="primary" :loading="loading">Create Account</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>

  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      errors: {},
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    async create_account() {
      try {
        this.loading = true
        await this.$store.dispatch('users/create_user', this.form)
        await this.$router.push('/login')
      } catch (e) {
        if (e.response) {
          this.errors = e.response.data
        } else {
          console.error(e)
        }
        // focus on in the input to easily re-enter password
        this.$refs.password.focus()
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

