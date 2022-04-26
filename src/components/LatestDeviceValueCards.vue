<template>
  <v-row justify="center" class="text-center mb-2">
          <v-card class="mx-2" color="third">
            <v-card-title> temperature </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-thermometer "
              />
              <p>temp &deg;C</p>
            </v-card-text>
          </v-card>

          <v-card class="mx-2" color="third">
            <v-card-title> humidity </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-water-percent"
              />

              <p>something</p>
            </v-card-text>
          </v-card>

          <v-card class="mx-2" color="third">
            <v-card-title> pressure </v-card-title>
            <v-card-text class="d-inline-flex align-center">
              <v-icon
                class="mr-8 ml-n4"
                size="60"
                icon="mdi:mdi-tailwind"
              />
              <p>{{device}}</p>
            </v-card-text>
          </v-card>
      </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
    name:"deviceValues",
    created(){
        this.device.sensors.forEach(sensor => {
            if(!this.names.includes(sensor.type)){
                this.names.push(sensor.type)
            }
        });
    },
    computed: mapState(["device"]),
    data(){
        return{
            names:[],
            values:[]
        }
    }

}
</script>

<style>

</style>