<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col cols="0" sm="4" v-for="card in cards" :key="card.id">
        <v-card dark color="third"  class="ma-1 pa-1">
          <v-row align="center" >
            <v-col cols="5">
              <div>
                <v-icon class="ml-8" size="80" :icon="$t(card.icon)"/>
              </div>
            </v-col>


            <v-col cols="3" >
              <h2
                class="mt-4 ml-n4 font-weight-regular hidden-xs-only"
                style="text-align: center"
              >
                {{ $t(card.title) }}
              </h2>

              <h4
                class="mt-4 ml-n4 font-weight-regular hidden-sm-and-up"
                style="text-align: center"
              >
                {{ $t(card.title) }}
              </h4>

              <p
                class="mt-5 ml-n4 font-weight-black"
                :style="{ 'font-size': '50px' }"
                style="text-align: center"
              >
                {{ $t(card.subtitle)}}
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
    const keys = [
      "card1",
      "card2",
      "card3",
      "card4",
      "card5"
    ];
    return {
      cards: keys.map((key,id) =>({
        id,
        title: `cards.${key}.title`,
        subtitle: `cards.${key}.subtitle`,
        icon: `cards.${key}.icon`
      })),
    };
  },
};
</script>

<style>
</style>