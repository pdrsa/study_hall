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
        <h1 class="pa-8"> {{ group.group_name }} </h1>
        <v-spacer></v-spacer>
      </v-row>

      <v-row>
        <v-col cols="7">
          <v-img :src="photo_src"
          height="250px"
          width="250px"
          class="group_avatar"
          ></v-img>
        </v-col>
        <v-col>
          <p>Organizador: {{ group.organizer_name }}</p>
          <p>Contato: {{ group.organizer_contact }}</p>
          <p class="vertical_spacer"></p>
          <p>Interesse do Grupo:</p>
          <v-item
            v-slot="{ active, toggle }"
          >
            <v-chip
              active-class="yellow--text"
              :input-value="active"
              @click="toggle"
              draggable
            >
            {{ group.interest }}
            </v-chip>
          </v-item>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
      photo_src: "https://geodash.gov.bd/uploaded/people_group/default_group.png",
      group: {
        group_name: "Nome do Grupo",
        organizer_name: "João Antônio",
        organizer_contact: "(11) 11111-1111",
        interest: "Geografia",
      }
  }),
}
</script>
<style>
.bigrect {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 170px;
}

.group_avatar {
  margin-left: 120px;
}

.vertical_spacer {
  margin-top: 115px;
}
</style>
