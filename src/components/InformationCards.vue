<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col cols="0" sm="4" v-for="card in cards" :key="card.id">
        <v-card dark color="third"  class="ma-1 pa-1">
          <v-row align="center" justify="center">
            <v-col cols="2">
              <div>
                <v-icon class="ml-8" size="60" :icon="card.icon" />
              </div>
            </v-col>


            <v-col cols="10">
              <h2
                class="mt-4 ml-n4 font-weight-regular hidden-xs-only"
                style="text-align: center"
              >
                {{ card.title }}
              </h2>

              <h4
                class="mt-4 ml-n4 font-weight-regular hidden-sm-and-up"
                style="text-align: center"
              >
                {{ card.title }}
              </h4>

              <p
                class="mt-5 ml-n4 font-weight-black"
                :style="{ 'font-size': '50px' }"
                style="text-align: center"
              >
                {{ card.subtitle }}
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "informationCard",
  data() {
    return {
      cards: [
        {
          id: 0,
          title: "Names",
          subtitle: "foo",
          icon: "mdi:mdi-home-city",
        },
        {
          id: 1,
          title: "Cities",
          subtitle: "Bar",
          icon: "mdi:mdi-bus-articulated-front",
        },
        {
          id: 3,
          title: "Projects",
          subtitle: "0",
          icon: "mdi:mdi-bottle-wine-outline",
        },
        {
          id: 4,
          title: "Owners",
          subtitle: "card",
          icon: "mdi:mdi-card-text",
        },
        {
          id: 5,
          title: "Centers",
          subtitle: "castle",
          icon: "mdi:mdi-castle",
        },
      ],
    };
  },
};
</script>

<style>
</style>