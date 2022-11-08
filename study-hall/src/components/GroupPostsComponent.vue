<template>
  <v-container>
    <v-card
      rounded="xl"
      color="#FFFFFF"
      elevation="10"
      max-width="800px"
      height="550px"
      class="bigrect"
    >

      <v-row>
        <h1 class="pa-8"> Posts </h1>
        <v-spacer></v-spacer>
      </v-row>

      <v-sheet
        class="ma-5"
        outlined
        rounded
      >
        <v-responsive
          class="overflow-y-auto"
          max-height="380px"
        >
          <v-row
            v-for="(post) in posts" :key="posts.findIndex(x=>x==post)"
          >
            <v-card class="pa-6">
              <v-row>
                <v-col cols="2">
                  <v-img :src="user_avatar"
                  height="90px"
                  width="90px"
                  class="ma-4"
                  ></v-img>
                </v-col>
                <v-col>
                  <v-row>
                    <p class="date-post"> {{ post.date }} </p>
                  </v-row>
                  <v-row>
                    <p class="content-post"> {{ post.content }} </p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-responsive>
      </v-sheet>

    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    user_avatar: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
    posts: [
      {
        username: "banana",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis. Id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        date: "24/12/2006 16:36"
      },
      {
        username: "laranja",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis. Id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        date: "24/12/2006 15:36"
      },
      {
        username: "kiwi",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis. Id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        date: "24/12/2006 14:36"
      },
      {
        username: "uva",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis.",
        date: "24/12/2006 13:36"
      },
      {
        username: "pidamonha",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis. Id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        date: "24/12/2006 12:36"
      },
      {
        username: "coreto",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis. Habitasse platea dictumst quisque sagittis. Id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam.",
        date: "24/12/2006 11:36"
      }
    ]
  }),
}
</script>
<style>
.bigrect {
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 170px;
}
.date-post {
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 4px;
  margin-right: 4px;
}
.content-post {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
}
</style>
