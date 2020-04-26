<template>
  <v-container fluid class="ma-0">
    <v-img :aspect-ratio="16/3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col align="center" class="justify-center">
          <div class="display-1">Contact Us</div>
          <div class="body-1">email@gmail.com</div>
        </v-col>
      </v-row>
    </v-img>
    <v-row align="center" justify="center" class="ma-4">
      <v-card color="#26c6da" dark width="400">
        <v-card-title>
          <v-icon large left>note</v-icon>
          <span class="title font-weight-light">Details</span>
        </v-card-title>

        <v-list rounded color="#26c6da" dark max-width="400">
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>person</v-icon>
              </v-list-item-icon>
              <v-spacer />
              <v-list-item-content>
                <v-list-item-title>Sandy</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>phone</v-icon>
              </v-list-item-icon>
              <v-spacer />
              <v-list-item-content>
                <v-list-item-title>09883736776</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>library_books</v-icon>
              </v-list-item-icon>
              <v-spacer />
              <v-list-item-content>Address</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="my-2" style="text-align:center" v-if="isAdminLogin">
        <v-btn  color="primary" @click="updateAboutUs">Update</v-btn>
       </div>

        <!-- <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1">mdi-heart</v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">mdi-share-variant</v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>-->
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "projects",
  components: {},
  data: () => ({
    projects: [
      { title: "Site web ", person: "khaled", due: "10/10/1987", status: "no" },
      {
        title: "Application mobile",
        person: "Iyad",
        due: "02/07/1990",
        status: "complete"
      },
      {
        title: "Gestion de stock",
        person: "Zineb",
        due: "01/05/1987",
        status: "yes"
      },
      {
        title: "Conception",
        person: "Hu Java",
        due: "02/09/1991",
        status: "up"
      }
    ],
    isAdminLogin:false
  }),
  created(){
  if(localStorage && localStorage.adminData && localStorage.adminData.length>0){
    this.isAdminLogin=true;
    }else{
      this.isAdminLogin=false;
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style >
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.no {
  border-left: 4px solid orange;
}
.project.up {
  border-left: 4px solid red;
}
.project.yes {
  border-left: 4px solid yellow;
}
.v-chip.complete {
  color: #3cd1c2;
}
.p.ovnored {
  color: orange;
}
.p.up {
  color: red;
}
.p.yes {
  color: yellow;
}
</style>
