<template>
  <v-container>
    <v-card
      color="#FFFFFF"
      elevation=2
      height="1100px"
      width="1188px"
      rounded="xl"
    >
      <div>
        <v-row>
          <v-col
          cols="12"
          lg="8"
          class="pa-8" >
            <h1>Register</h1>
          </v-col>
        </v-row>
      </div>

      <v-row no-gutters>
        <v-col
        cols="12"
        lg="6"
        class="pa-8" >
          <v-text-field filled label="Username"></v-text-field>
        </v-col>
      </v-row>
      <v-row
        :align="align"
        no-gutters >
        <v-col
          cols="12"
          lg="6"
          class="pa-8" >
          <v-text-field filled label="Password"></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          lg="6"
          class="pa-8" >
          <v-text-field filled label="Birthday"></v-text-field>
        </v-col>
      </v-row>

      <v-row
        :align="align"
        no-gutters >
        <v-col
          class="pa-8" >
          <v-text-field filled label="Full Name"></v-text-field>
        </v-col>
      </v-row>

      <v-row
        :align="align"
        no-gutters >
        <v-col
          class="pa-8" >
          <v-textarea
           filled
           label="About me"></v-textarea>
         </v-col>
       </v-row>

      <div class="text-center">
         <v-btn
           height=84
           width=266
           color="#0D1A8F"
         >
         Register
         </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<style>
.hometext {
  border-right: 70px solid transparent;
  border-left: 70px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.buttonregister {
  background-color: #0D1A8F;
}

.bigrect {
  border-top: 120px solid transparent;
  border-bottom: 120px solid transparent;
}
</style>
