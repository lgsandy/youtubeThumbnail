<template>
  <v-container fluid class="ma-0">
    <v-img :aspect-ratio="16/3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col align="center" class="justify-center">
          <div class="display-1">Contact Us</div>
          <div class="body-1">{{contactDetails.email}}</div>
        </v-col>
      </v-row>
    </v-img>
    <v-row align="center" justify="center" class="ma-4">
      <v-card color="#26c6da" dark width="400">
        <v-card-title>
          <v-icon large left>note</v-icon>
          <span class="title font-weight-light">Details</span>
          <v-spacer />

          <v-btn
            v-if="isAdminLogin"
            color="primary"
            fab
            small
            dark
            @click="editContactDialog = true"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>

        <v-list rounded color="#26c6da" dark max-width="400">
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>person</v-icon>
              </v-list-item-icon>
              <v-spacer />
              <v-list-item-content>
                <v-list-item-title>{{contactDetails.name}}</v-list-item-title>
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
                <v-list-item-title>{{contactDetails.phoneNo}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>library_books</v-icon>
              </v-list-item-icon>
              <v-spacer />
              <v-list-item-content>{{contactDetails.address}}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <div class="text-center">
      <v-dialog v-model="editContactDialog" width="500" persistent>
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Update Contact details</v-card-title>

          <v-card-text>
            <v-form ref="updateContact">
              <v-row dense>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="contactDetails.name"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="contactDetails.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="contactDetails.phoneNo"
                    :rules="phoneNoRules"
                    label="Mobile No"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-textarea
                    rows="3"
                    v-model="contactDetails.address"
                    label="Address"
                    hint="Enter Address"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="updateContactDetails">Update</v-btn>
            <v-btn color="primary" text @click="editContactDialog = false">Cancel</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { db } from "../fireBase/firebaseauth";
export default {
  name: "projects",
  components: {},
  data: () => ({
    editContactDialog: false,

    contactDetails: {
      name: "",
      email: "",
      phoneNo: "",
      address: ""
    },
    nameRules: [
      v => !!v || "Name is required",
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    phoneNoRules: [
      v => !!v || "Mobile No is required",
      v => /^[0-9_ ]*$/.test(v) || "Enter Valid Mobile No"
    ],
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
    isAdminLogin: false
  }),
  created() {
    if (
      localStorage &&
      localStorage.adminData &&
      localStorage.adminData.length > 0
    ) {
      this.isAdminLogin = true;
    } else {
      this.isAdminLogin = false;
    }
    this.loadContactUs();
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    updateContactDetails() {
      if (this.$refs.updateContact.validate()) {
        console.log(this.contactDetails);
        if (localStorage && localStorage.adminData && localStorage.adminData.length) {
        let ref = db.collection("youtubethumb").doc("contactUs");
        ref.set(this.contactDetails).then(res=>{
            this.editContactDialog=false;
         if(res){
           console.log("update");
         }
        })
      }
      }
    },
loadContactUs(){
if (localStorage && localStorage.adminData && localStorage.adminData.length) {
        let ref = db.collection("youtubethumb").doc("contactUs");
        ref.onSnapshot(res => {
          if (res && res.data()) {
            this.contactDetails=res.data();
          }
        });
      }
},
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
