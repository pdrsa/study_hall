<template>
  <v-container>
    <v-card
      color="#FFFFFF"
      elevation=2
      height="1100"
      width="1188"
      rounded="xl"
    >
      <div>
        <v-row>
          <v-col
          cols="12"
          lg="8">
            <h1>Register</h1>
          </v-col>
        </v-row>
      </div>
      <v-text-field filled label="Username"></v-text-field>
      <v-text-field filled label="Password"></v-text-field>
      <v-text-field filled label="Birthday"></v-text-field>
      <v-text-field filled label="Full Name"></v-text-field>
      <v-textarea
       filled
       label="About me"></v-textarea>

      <div class="text-center">
         <v-btn
           height=84
           width=266
           color="primary"
           dark
         >
         Register
         </v-btn>
      </div>
    </v-card>
  </v-container>
</template>
