<template>
  <v-container>
    <v-card
      color="#FFFFFF"
      elevation=2
      height="1200px"
      width="2000px"
      rounded="xl"
      class="bigrect"
    >
    <v-row>
        <v-col cols="auto" class="hometext">
            <v-row class="bigrect" justify-md>
                <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="324"
                max-width="360"
                src="https://picsum.photos/id/11/500/300"
                ></v-img>
              </v-row>
              <v-row class="bigrect" >
                <h2>Interests</h2>
              </v-row>
              <v-row>
                <h2>Groups Favorited</h2>
              </v-row>
          </v-col>

          <v-col cols="auto" class="hometext">
              <v-container>
              <v-row>
                      <h1>Full Name</h1>
              </v-row>
              <v-row>
                      <h2>Age</h2>
              </v-row>
              <v-row class="bigrect">
                <v-card
                  class="d-flex justify-center mb-6"
                  color="#D9D9D9"
                  elevation=2
                  height="900px"
                  width="500px"
                  rounded="xl"
                >
                  <h2>About Me</h2>
                </v-card>
                </v-row>
              </v-container>
          </v-col>
      </v-row>

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
  color: white;
}

.bigrect {
  border-top: 30px solid transparent;
  border-bottom: 120px solid transparent;
}

.uploading-image{
     display:flex;
   }
</style>
