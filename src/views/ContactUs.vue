<template>
  <v-container fluid class="ma-0">
    <v-img :aspect-ratio="16/3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col align="center" class="justify-center">
          <div class="display-1">Contact Us</div>
        </v-col>
      </v-row>
    </v-img>
 
      <div id="addContactUsDataDiv">
        <span>12</span>
      </div>
 <div class="my-2" style="text-align:center" v-if="isAdminLogin">
      <v-btn  color="primary" @click="conatctUsDialog=true">Update</v-btn>
   </div>
       <v-dialog v-model="conatctUsDialog" width="60%">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Update AboutUs
        </v-card-title>
        <v-card-text>
           <div id="app">
        <vue-editor v-model="content"></vue-editor>
        </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="updateContactUSData">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
  </v-container>
</template>
<style scoped>
#addContactUsDataDiv{
   margin: 20px 30px 10px 30px;
    text-align: justify;
    border: 1px solid #e4e4e4;
    padding: 20px;
}
</style>
<script>
// @ is an alias to /src
import { db } from "../fireBase/firebaseauth";
import { VueEditor } from "vue2-editor";
export default {
  name: "projects",
  components: {VueEditor},
  data: () => ({
    editContactDialog: false,
    conatctUsDialog:false,
    content: "",
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
    updateContactUSData() {
         this.conatctUsDialog=false;
        if (localStorage && localStorage.adminData && localStorage.adminData.length) {
        let ref = db.collection("youtubethumb").doc("contactUs");
         let cDate=new Date().getTime();
         let obj={timeStamp:cDate,contactUs:this.content}
        ref.set(obj).then(res=>{
         if(res){
           console.log("update");
         }
        })
      }
    },
loadContactUs(){
        let ref = db.collection("youtubethumb").doc("contactUs");
        ref.onSnapshot(res => {
          if (res && res.data()) {
            this.content=res.data().contactUs;
           let ele= document.getElementById('addContactUsDataDiv');
           if(ele){
             ele.innerHTML= this.content
           }
          }
        });
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
