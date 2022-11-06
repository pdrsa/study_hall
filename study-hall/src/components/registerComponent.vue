<template>
  <v-container>
    <v-card
      color="#FFFFFF"
      elevation=2
      height="950px"
      width="1188px"
      rounded="xl"
      class="bigrect"
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
        <v-spacer></v-spacer>
        <v-col
        cols="12"
        lg="6"
        class="pa-8" >
          <v-select
            :items="items"
            filled
            label="Interests"
          ></v-select>
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
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="computedDateFormatted"
                  filled
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
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
          cols="12"
          lg="6"
          class="pa-8">
            <div>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Avatar"
            ></v-file-input>
           </div>
       </v-col>
       <v-spacer></v-spacer>
       <v-col
         cols="12"
         lg="6"
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
           color="primary"
         >
         Register
         </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>

<script>
  export default {
    data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>

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
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: -5px;
}

.uploading-image{
     display:flex;
   }
</style>
