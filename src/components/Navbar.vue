<template>
  <nav>
    <v-app-bar color="red" dark app dense>
      <v-menu offset-y v-show="drawer">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <!-- <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>-->
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
            link
          >
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Youtube</span>
        <span>ThumbNail</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" tag="span">
        <v-btn text class="hidden-sm-and-down">
          <span>Home</span>
          <v-icon right>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/aboutus" tag="span">
        <v-btn text class="hidden-sm-and-down">
          <span>About Us</span>
          <v-icon right>description</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/contactus" tag="span">
        <v-btn text class="hidden-sm-and-down">
          <span>Contact Us</span>
          <v-icon right>contact_mail</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "dashboard", text: "Home", route: "/" },
      { icon: "folder", text: "About Us", route: "/aboutus" },
      { icon: "person", text: "Contact Us", route: "/contactus" }
    ],
    mini: true
  }),
  components: {
    // Popup
  }
};
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>
