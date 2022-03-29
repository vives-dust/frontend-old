<template>
  <v-card color="fifth" height="auto">
    <v-row no-gutters>
      <v-col cols="1"> </v-col>
      <v-col cols="10" class="text-center">
        <v-tabs centered class="mt-2" height="auto">
          <v-tab value="Home" to="/"> Home </v-tab>
          <v-tab value="About" to="/about">About </v-tab>
        </v-tabs>
      </v-col>

      <v-col cols="1" class="text-right">
        <v-menu transition="fade-transition">
          <v-btn
            class="mt-3 mx-5"
            color="fifth"
            elevation="0"
            @click="toggleshowingLanguageSelectionTool"
          >
            <v-icon size="33" icon="mdi:mdi-web" />
          </v-btn>
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              v-model="showingLanguageSelectionTool"
            >
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    showingLanguageSelectionTool: false;
  },
  methods:{
    toggleshowingLanguageSelectionTool(){
      this.showingLanguageSelectionTool = !this.showingLanguageSelectionTool
    }
  }
};
</script>

<style>
</style>