<template>
  <v-card elevation="5">
    <v-img class="mt-10 hidden-xs" src="../assets/trees.jpg" height="400" cover>
      <v-row class="text-center" justify="center">
        <v-col cols="12">
          <v-container class="mt-16">
            <h1
              class="text-h2 font-weight-bold mb-4 mt-12"
              style="color: white"
            >
              DUST
            </h1>

            <h4 class="text-h4 font-weight-thin" style="color: white">
              Why do nature a favor
            </h4>
          </v-container>
        </v-col>
      </v-row></v-img
    >
  </v-card>

  <v-row justify="center" class="hidden-xs">
    <v-col cols="11" sm="8">
      <div class="text-center">
        <!-- All picture are under the creative common license -->
        <v-layout class="my-15"></v-layout>
        <p class="text-h5 text-justify mt-15 mb-5">
          {{ $t("aboutPage.introduction") }}
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center" class="hidden-xs mb-15">
    <v-col cols="1"> </v-col>
    <v-dialog v-model="dialog0">
      <template v-slot:activator="{ props }">
        <v-col cols="2" md="2" v-bind="props">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              height="500"
              v-bind="props"
              :elevation="isHovering ? 16 : 2"
            >
              <v-img height="130" src="../assets/sensor.jpg" cover> </v-img>
              <h2 class="ma-3">{{ $t("aboutPage.card1.title") }}</h2>
              <p class="ml-3">
                {{ $t("aboutPage.card1.text") }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-text>
              Wat is Lorem Ipsum? Lorem Ipsum is slechts een proeftekst uit het
              drukkerij- en zetterijwezen. Lorem Ipsum is de standaard
              proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
              onbekende drukker een zethaak met letters nam en ze door elkaar
              husselde om een font-catalogus te maken. Het heeft niet alleen
              vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
              overgenomen in elektronische letterzetting. Het is in de jaren '60
              populair geworden met de introductie van Letraset vellen met Lorem
              Ipsum passages en meer recentelijk door desktop publishing
              software zoals Aldus PageMaker die versies van Lorem Ipsum
              bevatten. Waarom gebruiken we het? Het is al geruime tijd een
              bekend gegeven dat een lezer, tijdens het bekijken van de layout
              van een pagina, afgeleid wordt door de tekstuele inhoud. Het
              belangrijke punt van het gebruik van Lorem Ipsum is dat het uit
              een min of meer normale verdeling van letters bestaat, in
              tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min
              of meer leesbaar nederlands maakt. Veel desktop publishing
              pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum
              als hun standaard model tekst, en een zoekopdracht naar "lorem
              ipsum" ontsluit veel websites die nog in aanbouw zijn.
              Verscheidene versies hebben zich ontwikkeld in de loop van de
              jaren, soms per ongeluk soms expres (ingevoegde humor en
              dergelijke).
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" block @click="dialog0 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
    <v-dialog v-model="dialog1">
      <template v-slot:activator="{ props }">
        <v-col cols="2" md="2" v-bind="props">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              height="500"
              v-bind="props"
              :elevation="isHovering ? 16 : 2"
            >
              <v-img height="130" src="../assets/lake.jpg" cover> </v-img>
              <h2 class="ma-3">{{ $t("aboutPage.card2.title") }}</h2>
              <p class="ml-3">
                {{ $t("aboutPage.card2.text") }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-text>
              Wat is Lorem Ipsum? Lorem Ipsum is slechts een proeftekst uit het
              drukkerij- en zetterijwezen. Lorem Ipsum is de standaard
              proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
              onbekende drukker een zethaak met letters nam en ze door elkaar
              husselde om een font-catalogus te maken. Het heeft niet alleen
              vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
              overgenomen in elektronische letterzetting. Het is in de jaren '60
              populair geworden met de introductie van Letraset vellen met Lorem
              Ipsum passages en meer recentelijk door desktop publishing
              software zoals Aldus PageMaker die versies van Lorem Ipsum
              bevatten. Waarom gebruiken we het? Het is al geruime tijd een
              bekend gegeven dat een lezer, tijdens het bekijken van de layout
              van een pagina, afgeleid wordt door de tekstuele inhoud. Het
              belangrijke punt van het gebruik van Lorem Ipsum is dat het uit
              een min of meer normale verdeling van letters bestaat, in
              tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min
              of meer leesbaar nederlands maakt. Veel desktop publishing
              pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum
              als hun standaard model tekst, en een zoekopdracht naar "lorem
              ipsum" ontsluit veel websites die nog in aanbouw zijn.
              Verscheidene versies hebben zich ontwikkeld in de loop van de
              jaren, soms per ongeluk soms expres (ingevoegde humor en
              dergelijke).
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" block @click="dialog1 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
    <v-dialog v-model="dialog2">
      <template v-slot:activator="{ props }">
        <v-col cols="2" md="2" v-bind="props">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              height="500"
              v-bind="props"
              :elevation="isHovering ? 16 : 2"
            >
              <v-img height="130" src="../assets/VIVES_Logo.png" cover> </v-img>
              <h2 class="ma-3">{{ $t("aboutPage.card3.title") }}</h2>
              <p class="ml-3">
                {{ $t("aboutPage.card3.text") }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-text>
              Wat is Lorem Ipsum? Lorem Ipsum is slechts een proeftekst uit het
              drukkerij- en zetterijwezen. Lorem Ipsum is de standaard
              proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
              onbekende drukker een zethaak met letters nam en ze door elkaar
              husselde om een font-catalogus te maken. Het heeft niet alleen
              vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
              overgenomen in elektronische letterzetting. Het is in de jaren '60
              populair geworden met de introductie van Letraset vellen met Lorem
              Ipsum passages en meer recentelijk door desktop publishing
              software zoals Aldus PageMaker die versies van Lorem Ipsum
              bevatten. Waarom gebruiken we het? Het is al geruime tijd een
              bekend gegeven dat een lezer, tijdens het bekijken van de layout
              van een pagina, afgeleid wordt door de tekstuele inhoud. Het
              belangrijke punt van het gebruik van Lorem Ipsum is dat het uit
              een min of meer normale verdeling van letters bestaat, in
              tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min
              of meer leesbaar nederlands maakt. Veel desktop publishing
              pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum
              als hun standaard model tekst, en een zoekopdracht naar "lorem
              ipsum" ontsluit veel websites die nog in aanbouw zijn.
              Verscheidene versies hebben zich ontwikkeld in de loop van de
              jaren, soms per ongeluk soms expres (ingevoegde humor en
              dergelijke).
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" block @click="dialog2 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
    <v-dialog v-model="dialog3">
      <template v-slot:activator="{ props }">
        <v-col cols="2" md="2" v-bind="props">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              height="500"
              v-bind="props"
              :elevation="isHovering ? 16 : 2"
            >
              <v-img height="130" src="../assets/trees2.jpg" cover> </v-img>
              <h2 class="ma-3">{{ $t("aboutPage.card4.title") }}</h2>
              <p class="ml-3">
                {{ $t("aboutPage.card4.text") }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      <v-col cols="1"> </v-col>
      <v-row justify="center">
        <v-col cols="6">
          <v-card>
            <v-card-text>
              Wat is Lorem Ipsum? Lorem Ipsum is slechts een proeftekst uit het
              drukkerij- en zetterijwezen. Lorem Ipsum is de standaard
              proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
              onbekende drukker een zethaak met letters nam en ze door elkaar
              husselde om een font-catalogus te maken. Het heeft niet alleen
              vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
              overgenomen in elektronische letterzetting. Het is in de jaren '60
              populair geworden met de introductie van Letraset vellen met Lorem
              Ipsum passages en meer recentelijk door desktop publishing
              software zoals Aldus PageMaker die versies van Lorem Ipsum
              bevatten. Waarom gebruiken we het? Het is al geruime tijd een
              bekend gegeven dat een lezer, tijdens het bekijken van de layout
              van een pagina, afgeleid wordt door de tekstuele inhoud. Het
              belangrijke punt van het gebruik van Lorem Ipsum is dat het uit
              een min of meer normale verdeling van letters bestaat, in
              tegenstelling tot "Hier uw tekst, hier uw tekst" wat het tot min
              of meer leesbaar nederlands maakt. Veel desktop publishing
              pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum
              als hun standaard model tekst, en een zoekopdracht naar "lorem
              ipsum" ontsluit veel websites die nog in aanbouw zijn.
              Verscheidene versies hebben zich ontwikkeld in de loop van de
              jaren, soms per ongeluk soms expres (ingevoegde humor en
              dergelijke).
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" block @click="dialog3 = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
  </v-row>
  <!-- FORM -->
  <v-row
    justify="center"
    class="hidden-xs py-10 mb-10"
    style="background: rgb(var(--v-theme-backgroundShift), 0.2)"
  >
    <v-col cols="8">
      <v-card>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12">
                <p class="text-h2">Contact</p>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="15"
                  label="First name"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-card-account-details"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="companyName"
                  :counter="20"
                  label="Company"
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-office-building-outline"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-at"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Requesting Information"
                  auto-grow
                  outlined
                  rows="4"
                  row-height="15"
                  v-model="requestedInformation"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn @click="dataSend = true" :disabled="!valid">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>

  <v-snackbar v-model="dataSend">
    <p>Form verstuurd!</p>

    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="dataSend = false"> ok! </v-btn>
    </template>
  </v-snackbar>

  <!-- FOR MOBILE -->
  <v-card elevation="5">
    <v-img
      class="mt-10 hidden-sm-and-up"
      src="../assets/trees.jpg"
      height="150"
      cover
    >
      <v-row class="text-center" justify="center">
        <v-col cols="12">
          <v-container>
            <h1 class="text-h2 font-weight-bold mb-4 mt-1" style="color: white">
              DUST
            </h1>

            <h4 class="text-h4 font-weight-thin" style="color: white">
              Why do nature a favor
            </h4>
          </v-container>
        </v-col>
      </v-row></v-img
    >
  </v-card>

  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11" sm="8">
      <div class="text-center">
        <!-- All picture are under the creative common license -->
        <p class="text-h5 text-justify mt-7 mb-5">
          {{ $t("aboutPage.introduction") }}
        </p>
      </div>
    </v-col>
  </v-row>
  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card max-height="150" elevation="0">
          <v-img height="strech" cover src="../assets/sensor.jpg"> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card1.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card1.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <v-img height="strech" src="../assets/lake.jpg" cover> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card2.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card2.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <v-img height="strech" src="../assets/trees2.jpg" cover> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card3.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card3.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>

  <v-row justify="center" class="hidden-sm-and-up">
    <v-col cols="11">
      <v-card height="400">
        <v-card height="150" elevation="0">
          <v-img height="strech " src="../assets/VIVES_Logo.png" cover> </v-img>
        </v-card>
        <h2 class="ma-3">{{ $t("aboutPage.card4.title") }}</h2>
        <p class="ml-3">
          {{ $t("aboutPage.card4.text") }}
        </p>
      </v-card>
    </v-col>
  </v-row>
  <v-row
    justify="center"
    class="hidden-sm-and-up py-2 mt-2"
    style="background: rgb(var(--v-theme-backgroundShift), 0.2)"
  >
    <v-col cols="11">
      <v-card>
        <v-form v-model="valid">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" class="mb-2">
                <p class="text-h2">Contact</p>
              </v-col>
              <v-col cols="12" class="mb-n6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="15"
                  label="First name"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-card-account-details"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="mb-n6">
                <v-text-field
                  v-model="companyName"
                  :counter="20"
                  label="Company"
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-office-building-outline"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="mb-n6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  variant="outlined"
                  prepend-inner-icon="mdi:mdi-at"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mb-n6">
                <v-textarea
                  label="Requesting Information"
                  auto-grow
                  outlined
                  rows="4"
                  row-height="15"
                  v-model="requestedInformation"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn @click="sendData" :disabled="!valid"> Submit </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDisplay } from "vuetify";
export default defineComponent({
  name: "aboutPage",
  data() {
    return {
      valid: false,
      firstname: "",
      companyName: "",
      email: "",
      requestedInformation: "",
      dataSend: false,
      nameRules: [
        (v: string) => !!v || "Name is required",
        (v: string) => v.length <= 15 || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
    };
  },
  setup() {
    // Destructure only the keys we want to use
    const { xs, mdAndUp } = useDisplay();

    return { xs, mdAndUp };
  },
  methods: {
    sendData() {
      this.dataSend = true;
      this.firstname = "";
      this.companyName = "";
      this.email = "";
      this.requestedInformation = "";
      this.valid = false;
      console.log("elo");
    },
  },
  watch: {
    requestedInformation() {
      this.valid = true;
    },
  },
});
</script>
<style>
</style>