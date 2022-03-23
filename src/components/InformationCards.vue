<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col cols="6" sm="4" v-for="card in cards" :key="card.id">
        <v-card dark color="third" height="auto " class="ma-1 pa-1">
          <v-row>
            <v-col cols="12">
              <h2
                class="mt-4 font-weight-regular hidden-xs-only"
                style="text-align: center"
              >
                {{ card.title }}
              </h2>

              <h4
                class="mt-4 font-weight-regular hidden-sm-and-up"
                style="text-align: center"
              >
                {{ card.title }}
              </h4>

              <p
                class="mt-5 font-weight-black"
                :style="{ 'font-size': '50px' }"
                style="text-align: center"
              >
                {{ card.subtitle }}
              </p>
            </v-col>
            <v-col cols="12">
              <v-icon class="mx-8" size="60" :icon="card.icon" />
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
          icon: "mdi:mdi-home-city",
        },
        {
          id: 3,
          title: "Projects",
          subtitle: "0",
          icon: "mdi:mdi-home-city",
        },
        {
          id: 4,
          title: "Owners",
          subtitle: "Placeholder",
          icon: "mdi:mdi-home-city",
        },
        {
          id: 5,
          title: "Centers",
          subtitle: "Another place",
          icon: "mdi:mdi-home-city",
        },
      ],
    };
  },
};
</script>

<style>
</style>