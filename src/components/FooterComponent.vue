<template>
<v-footer>
<v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2">
          <v-card-title class="teal center">
        <strong class="subheading ">
          Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn> -->
      </v-card-title>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-2 center">
           <v-card>
        &copy;2024 — <strong>(MauricodeAcademy) App</strong>
      </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  
   
  </v-footer>
</template>
<script>
export default {
  name: 'FooterComponent'
};
</script>
<style scoped>
.v-container {
    width: 100%;
    padding:0px !important;
    margin-right: auto;
    margin-left: auto;
}
.center{
  text-align: center;
}
.v-footer{
 flex:0 0 auto !important;
}
</style>