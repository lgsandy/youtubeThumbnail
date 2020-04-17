<template>
  <div class="team">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-form ref="form">
        <v-layout row wrap justify-center>
          <v-flex sm6 xs12 md6 lg3 ma-2>
            <v-text-field
              :rules="searchVal"
              v-model="uoutubeUrl"
              outlined
              prepend-icon="search"
              label="Search"
            ></v-text-field>
          </v-flex>
          <v-flex sm6 xs12 md6 lg3 ma-2>
            <v-btn large @click="search">search</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <v-layout row wrap justify-center>
        <v-flex sm6 xs12 md6 lg3>dfhjds</v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import axious from "axios";

export default {
  name: "team",
  components: {},
  data: () => ({
    searchVal: [v => !!v || "Work Order Number is required"],
    team: [
      { name: "Iyad", role: "web developer", avatar: "/img1.png" },
      { name: "Reda", role: "Graphic designer", avatar: "/img2.png" },
      { name: "Zineb", role: "web developer", avatar: "/img3.png" },
      { name: "Hu TechGroup", role: "Desktop developer", avatar: "/img4.png" }
    ],
    uoutubeUrl: "",
    videoId: ""
  }),
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        let quality = ["mqdefault", "hqdefault", "sddefault", "maxresdefault"];
        let obj = {
          name: "image1",
          url: "http://i.ytimg.com/vi/" + this.videoId + "/mqdefault.jpg"
        };
        this.videoId = this.youtubeUrl.split("v=")[1];
        console.log(this.videoId);
        console.log(obj);
        console.log(quality);
      }
    }
  }
};
</script>
