<template>
  <v-row justify="center" class="text-center mb-2">
    <v-col
      v-for="sensor in device.sensors"
      :key="sensor._id"
      cols="4"
      class="hidden-xs"
    >
      <v-card color="white" class="my-3" height="170">
        <v-row align="center">
          <v-col cols="3">
            <v-icon
              class="mr-8"
              size="100"
              icon="mdi:mdi-thermometer "
              v-if="sensor.type == 'temperature'"
              color="third"
            />
            <v-icon
              class="mr-8"
              size="100"
              color="third"
              icon="mdi:mdi-water-percent"
              v-if="sensor.type == 'moisture'"
            />
            <v-icon
              class="mr-8"
              size="100"
              icon="mdi:mdi-tailwind"
              v-if="sensor.type == 'pressure'"
              color="third"
            />
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="7">
                <p style="font-size: 90%">{{ sensor.field }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <h1
                  v-if="sensor.type == 'temperature'"
                  class="font-weight-bold"
                >
                  {{ sensor.value }} &deg;C
                </h1>

                <h1 v-if="sensor.type != 'temperature'">{{ sensor.value }}%</h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col
      v-for="(card, index) in extraCards"
      :key="index"
      cols="4"
      class="hidden-xs"
    >
      <v-card color="white" height="170" class="d-flex align-center" v-if="card[0] != 'picture' && card[0] != 'map'">
        <v-row justify="center" no-gutters>
          <h1 >
            {{ card[0] }}
          </h1>
          <h2 >
            {{ card[1] }}
          </h2>
        </v-row>
      </v-card>
      <v-card>
        <v-row
          justify="center"
          align="center"
          class="d-flex"
          no-gutters
          v-if="card[0] == 'picture'"
        >
          <v-col>
            <v-img src="@/assets/sensor.jpg" cover max-height="170"></v-img>
          </v-col>
        </v-row>

        <v-row v-if="card[0] == 'map'" no-gutters justify="center">
          <v-col> <singleMarkerMap height="170" /> </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col
      class="hidden-sm-and-up"
      v-for="sensor in device.sensors"
      :key="sensor._id"
      cols="6"
    >
      <v-card class="mx-n2 my-1" color="white">
        <v-row justify="center" align="center">
          <v-col cols="3">
            <v-icon
              size="45"
              icon="mdi:mdi-thermometer "
              v-if="sensor.type == 'temperature'"
            />

            <v-icon
              size="45"
              icon="mdi:mdi-water-percent"
              v-if="sensor.type == 'moisture'"
            />
            <v-icon
              size="45"
              icon="mdi:mdi-tailwind"
              v-if="sensor.type == 'pressure'"
            />
          </v-col>
          <v-col cols="9">
            <p v-if="sensor.type != 'temperature'" style="font-size: 125%">
              {{ sensor.value }}%
            </p>
            <p v-if="sensor.type == 'temperature'" style="font-size: 125%">
              {{ sensor.value }}&deg;C
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import singleMarkerMap from "@/components/SingleMarkerMap.vue";

export default {
  name: "deviceValues",
  computed: mapState(["device"]),
  data() {
    return {
      extraCards: [
        ["picture"],
        [this.$store.state.device.name, this.$store.state.device.description],
        ["map"],
      ],
    };
  },
  components: {
    singleMarkerMap,
  },
};
</script>

<style>
</style>