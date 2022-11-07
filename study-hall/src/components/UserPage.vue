<template>
  <v-container>
    <v-card
      color="#FFFFFF"
      elevation=2
      height="1200px"
      width="2100px"
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

              <v-row class="subheadertext">
                <h1>Interests</h1>
              </v-row>

              <v-row>
              <v-item-group multiple>
                <v-item
                  v-for="n in 3"
                  :key="n"
                  v-slot="{ active, toggle }"
                >
                  <v-chip
                    active-class="purple--text"
                    :input-value="active"
                    @click="toggle"
                  >
                    Tag {{ n }}
                  </v-chip>
                </v-item>
              </v-item-group>
              </v-row>

              <v-row class="subheadertext">
                <h1>Groups Favorited</h1>
              </v-row>

              <v-row
                v-for="(item) in groups" :key="item"
              >
                <h2>{{ item }}</h2>
              </v-row>
          </v-col>

          <v-col cols="1">
            <v-divider vertical></v-divider>
          </v-col>

          <v-col cols="auto" class="middletext">
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

<script>
  export default {
    data: () => ({
      groups: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<style>
.hometext {
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.middletext {
  border-right: 70px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.subheadertext {
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
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
