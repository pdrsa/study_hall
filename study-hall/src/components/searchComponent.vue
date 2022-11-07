<template>
    <v-container>
      <v-card
        color="#FFFFFF"
        elevation=2
        height="1300px"
        width="1188px"
        rounded="xl"
        class="bigrect"
      >
        <div>
            <v-row>
                <v-col
                class="searchtext" >
                    <h1>Filtros</h1>
                </v-col>

                <v-col
                class="searchfilter">
                    <v-select
                    :items="filtros"
                    filled
                    label="Filtro 1"
                    style="width:200px"
                    ></v-select>
                </v-col>

                <v-col
                class="searchfilter">
                    <v-select
                    :items="filtros"
                    filled
                    label="Filtro 2"
                    style="width:200px"
                    ></v-select>
                </v-col>
            </v-row>

            <v-row>
              <v-divider intern class="divider"></v-divider>
            </v-row>

            <v-row
                v-for="(item) in toRender"
                class="groupcards"
            >
                    <v-card
                        :color="item.color"
                        dark
                        height="200px"
                        width="1000px"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                            class="text-h5"
                            v-text="item.title"
                            ></v-card-title>
                        </div>
                        </div>
                    </v-card>
            </v-row>
            <v-row>
                <button @click="loadnext()">next</button>
            </v-row>
        </div>
      </v-card>
    </v-container>
  </template>
  
  <script>
    export default {
        data: () => ({
            filtros: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            items: [
                {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
                {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
                },
            ],
            start: 0, // Lower limit 
            end: 5, // Upper Limit
            questions: [], // Array containing all the questions.
            toRender: []
        }),

        mounted() {
            for (let i = this.start; i < this.end; i++){
                this.toRender.push(this.items[i])
            }
            this.start = this.start + this.toRender.length;
            this.end =  this.start + this.toRender.length;
        },

        methods: {
            loadnext() {
                this.toRender = [];
                for (let i = this.start; i < this.end; i++){
                    this.toRender.push(this.items[i])
                }
            }
        } 

    }
  </script>

  <style>
  .searchtext {
    border-right: 70px solid transparent;
    border-left: 70px solid transparent;
    border-top: 50px solid transparent;
    border-bottom: 15px solid transparent;
  }

  .searchfilter {
    border-right: 0px solid transparent;
    border-left: 30px solid transparent;
    border-top: 50px solid transparent;
    border-bottom: 15px solid transparent;
  }

  .groupcards {
    border-right: 70px solid transparent;
    border-left: 70px solid transparent;
    border-top: 20px solid transparent;
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

    .divider {
        margin-left: 50px;
        margin-right: 50px;
    }
  </style>
  