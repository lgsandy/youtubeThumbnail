<template>
  <v-app>
    <div v-if="getRouteName!='Admin'">
      <Navbar />
    </div>
    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
    <div v-if="getRouteName!='Admin'">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },
  computed: {
    getRouteName() {
      return this.$route.name;
    }
  },
  data: () => ({
    //
  })
};
</script>
