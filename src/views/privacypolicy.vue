<template>
<div>
  <v-img src="../assets/privacy_policy.jpg" max-height="200"></v-img>
   <div id="addPrivacyPlicyDataDiv">
   </div>
   <div class="my-2" style="text-align:center" v-if="isAdminLogin">
      <v-btn  color="primary" @click="updateAboutUs">Update</v-btn>
   </div>
    <v-dialog
      v-model="aboutUsDialog"
      width="60%"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
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
          <v-btn color="primary" text @click="updateAboutUsData">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>
<style scoped>
#addPrivacyPlicyDataDiv{
   margin: 20px 30px 10px 30px;
    text-align: justify;
    border: 1px solid #e4e4e4;
    padding: 20px;
}
</style>

<script>
// @ is an alias to /src
import { VueEditor } from "vue2-editor";
import { db } from "../fireBase/firebaseauth";
export default {
  name: "team",
  components: { VueEditor},
  data: () => ({
      content: "<h1>Some initial content</h1>",
      isAdminLogin:false,
      aboutUsDialog:false
  }),
  created(){
    if(localStorage && localStorage.adminData && localStorage.adminData.length>0){
    this.isAdminLogin=true;
    }else{
      this.isAdminLogin=false;
    }
   this.loadAboutUsData();
  },
  methods:{
    updateAboutUs(){
      this.aboutUsDialog=true;
    },
     loadAboutUsData() {
        let ref = db.collection("youtubethumb").doc("privacypolicy");
        ref.onSnapshot(res => {
          if (res && res.data()) {
            this.content=res.data().privacypolicy;
           let ele= document.getElementById('addPrivacyPlicyDataDiv');
           if(ele){
             ele.innerHTML= this.content
           }
          }
        });
    },
    updateAboutUsData(){
      this.aboutUsDialog = false;
     if (localStorage && localStorage.adminData && localStorage.adminData.length) {
        let ref = db.collection("youtubethumb").doc("privacypolicy");
        let cDate=new Date().getTime();
         let obj={timeStamp:cDate,privacypolicy:this.content}
        ref.set(obj).then(res=>{
         if(res){
           console.log("update");
         }
        })
      }
    }
  }
};
</script>
