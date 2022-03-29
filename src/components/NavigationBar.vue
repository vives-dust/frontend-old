<template>
  <v-card color="fifth" height="">
    <v-row>
      <!-- <v-col cols="1"> </v-col> -->
      <v-col cols="12" class="text-center">
        <v-tabs centered class="mt-2">
          <v-tab value="Home" to="/"> Home </v-tab>
          <v-tab value="About" to="/about">About </v-tab>
        </v-tabs>
      </v-col>

      <!-- <v-col cols="1" class="text-right">
        <v-menu transition="fade-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-icon class="mt-3 mx-5" size="33" icon="mdi:mdi-web" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 5" :key="n">
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col> -->
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
</style>