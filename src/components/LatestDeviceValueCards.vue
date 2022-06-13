<template>
  <v-row justify="center" class="text-center mb-5 hidden-xs">
    <v-col v-for="(card, index) in extraCards" :key="index" cols="4">
      <v-card
        color="third"
        height="170"
        class="d-flex align-center"
        v-if="card[0] != 'picture' && card[0] != 'map'"
      >
        <v-row justify="center" no-gutters>
          <h1 style="color: white; font-size: 40px">
            {{ this.$store.state.device.name }}
          </h1>
          <h2 style="color: white">
            {{ this.$store.state.device.description }}
          </h2>
        </v-row>
      </v-card>
      <v-card>
        <v-row
          justify="center"
          align="center"
          no-gutters
          v-if="card[0] == 'picture'"
        >
          <v-col>
            <v-img src="@/assets/sensor.jpg" cover max-height="170"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="text-center mb-2 hidden-xs">
    <v-col v-for="sensor in device.sensors" :key="sensor._id" cols="4">
      <v-card color="white" class="my-2" height="170">
        <v-row align="center" class="pt-5">
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
            <v-icon
              class="mr-8"
              size="100"
              icon="mdi:mdi-theme-light-dark"
              v-if="sensor.type == 'Light'"
              color="third"
            />
             <v-icon
              class="mr-8"
              size="100"
              icon="mdi:mdi-tree"
              v-if="sensor.type == 'Hydrometer'"
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
                  {{ Math.round(sensor.value) }} &deg;C
                </h1>

                <h1 v-if="sensor.type != 'temperature'">{{ Math.round(sensor.value)  }}%</h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="4" v-show="soilModel != ''">
      <v-card color="white" class="mt-2" height="170">
        <v-row align="center" class="pt-5">
          <v-col cols="3">
            <v-icon
              class="mr-8"
              size="100"
              icon="mdi:mdi-tailwind"
              color="third"
            />
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="5"></v-col>
              <v-col cols="7">
                <p style="font-size: 90%">Soil Model</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <h1
                  class="font-weight-bold"
                >
                  {{ soilModel }} 
                </h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <!-- MOBILE -->






  <v-row justify="center" class="text-center mb-2 hidden-sm-and-up">
    <v-col v-for="(card, index) in extraCards" :key="index" cols="6">
      <v-card
        color="third"
        height="120"
        class="d-flex align-center"
        v-if="card[0] != 'picture' && card[0] != 'map'"
      >
        <v-row justify="center" no-gutters>
          <h1 style="color: white; font-size: 25px">
            {{ this.$store.state.device.name }}
          </h1>
          <h2 style="color: white; font-size: 20px">
            {{ this.$store.state.device.description }}
          </h2>
        </v-row>
      </v-card>
      <v-card>
        <v-row
          justify="center"
          align="center"
          no-gutters
          v-if="card[0] == 'picture'"
        >
          <v-col>
            <v-img src="@/assets/sensor.jpg" cover height="120"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="text-center mb-2 hidden-sm-and-up">
    <v-col v-for="sensor in device.sensors" :key="sensor._id" cols="6" >
      <v-card color="white" class="my-1" height="120">
        <v-row align="center">
          <v-col cols="3">
            <v-icon
              size="50"
              icon="mdi:mdi-thermometer "
              v-if="sensor.type == 'temperature'"
              color="third"
            />
            <v-icon
              size="50"
              color="third"
              icon="mdi:mdi-water-percent"
              v-if="sensor.type == 'moisture'"
            />
            <v-icon
              size="50"
              icon="mdi:mdi-tailwind"
              v-if="sensor.type == 'pressure'"
              color="third"
            />
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="8">
                <p style="font-size: 70%" class="mr-1">{{ sensor.field }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
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
    <v-col cols="6" v-show="soilModel != ''">
      <v-card color="white" class="my-1" height="120">
        <v-row align="center">
          <v-col cols="3">
            <v-icon
              size="50"
              icon="mdi:mdi-tailwind"
              color="third"
            />
          </v-col>
          <v-col >
            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="8">
                <p style="font-size: 70%">Soil Model</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h1
                  class="font-weight-bold"
                  style="font-size: 140%"
                >
                  {{ soilModel }} 
                </h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "deviceValues",
  computed: mapState(["device","soilModel"]),
  data() {
    return {
      extraCards: [
        [this.$store.state.device.name, this.$store.state.device.description],
        ["picture"],
      ],
    };
  },
  components: {},
};
</script>

<style>
</style>