<template>
    <v-row  justify="center">
      <v-col
        cols="4"
        v-for="card in cards"
        :key="card.id"
        class="hidden-xs"
      >
        <v-card dark color="third" class="mx-1 mb-1 pa-1">
          <v-row align="center">
            <v-col cols="5">
              <div>
                <v-icon class="ml-8" size="80" :icon="$t(card.icon)" />
              </div>
            </v-col>

            <v-col cols="4">
              <h2
                class="mt-4 ml-n4 font-weight-regular"
                style="text-align: center"
              >
                {{ $t(card.title) }}
              </h2>

              <p
                class="mt-5 ml-n4 font-weight-black"
                :style="{ 'font-size': '50px' }"
                style="text-align: center"
              >
                {{ $t(card.subtitle) }}
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        
        v-for="card in cards"
        :key="card.id"
        class="hidden-sm-and-up"
      >
        <v-card dark color="third" class="ma-1 pa-1">
          <v-row align="center" justify="center">
            <v-col cols="3" >
              <div>
                <v-icon  size="40" :icon="$t(card.icon)" />
              </div>
            </v-col>

            <v-col cols="8" class="d-flex">
              <h2
                class="font-weight-regular"
                style="text-align: center; 'font-size': '25';"
              >
                {{ $t(card.title) }}:
              </h2>
              <p>&nbsp;</p>

              <h2
                class=" font-weight-black"
                style="text-align: center; 'font-size': '25';"
              >
                {{ $t(card.subtitle) }}
              </h2>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</template>

<script lang="ts">
export default {
  name: "informationCard",
  data() {
    const keys = ["card1", "card2", "card3", "card4", "card5"];
    return {
      cards: keys.map((key, id) => ({
        id,
        title: `cards.${key}.title`,
        subtitle: `cards.${key}.subtitle`,
        icon: `cards.${key}.icon`,
      })),
    };
  },
};
</script>

<style>
</style>