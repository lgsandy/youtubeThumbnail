<template>
  <div class="team">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex sm6 xs12 md6 lg3 ma-2>
          <v-text-field outlined prepend-icon="search" label="Search"></v-text-field>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3 ma-2>
          <v-btn large>search</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex sm6 xs12 md6 lg3>dfhjds</v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "team",
  components: {},
  data: () => ({
    team: [
      { name: "Iyad", role: "web developer", avatar: "/img1.png" },
      { name: "Reda", role: "Graphic designer", avatar: "/img2.png" },
      { name: "Zineb", role: "web developer", avatar: "/img3.png" },
      { name: "Hu TechGroup", role: "Desktop developer", avatar: "/img4.png" }
    ]
  })
};
</script>
