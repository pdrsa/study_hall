<template>
  <v-container>
    <v-card
      rounded="xl"
      color="#FFFFFF"
      elevation="10"
      max-width="800px"
      height="450px"
      class="bigrect"
    >

      <v-row>
        <v-spacer></v-spacer>
        <h1 class="pa-8">Login</h1>
        <v-spacer></v-spacer>
      </v-row>

      <v-row>
      <v-spacer></v-spacer>
        <v-text-field
        v-model="username"
        label="Username"
        filled
        clearable
        dense
        rounded
        >
        </v-text-field>
      <v-spacer></v-spacer>
      </v-row>
      <v-row>
      <v-spacer></v-spacer>
        <v-text-field
        v-model="password"
        label="Password"
        filled
        clearable
        rounded
        >
        </v-text-field>
      <v-spacer></v-spacer>
      </v-row>
      <v-row>
      <v-spacer></v-spacer>
        <v-btn
          depressed
          elevation="2"
          large
          width="192px"
          color="blue"
          class="align-button"
        >
          <b>Login</b>
        </v-btn>
      <v-spacer></v-spacer>
        <v-btn
          depressed
          elevation="2"
          large
          color="blue"
          width="192px"
          class="align-button"
        >
          <b>Register</b>
        </v-btn>
      <v-spacer></v-spacer>
      </v-row>

    </v-card>
  </v-container>
</template>

<style>
.bigrect {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 170px;
}

.align-button {
  margin-top: 80px;
}

</style>
