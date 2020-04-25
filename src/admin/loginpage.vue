<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <!-- <v-flex xs12>
                <v-img
                  :src="require('../assets/school.png')"
                  class="my-3"
                  contain
                  height="120"
                ></v-img>
        </v-flex>-->
        <v-card>
          <v-toolbar color="red" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <!-- <p v-if="showerror" style="color:red;">Enter Invalid credentials</p> -->
            <v-form ref="loginForm">
              <v-text-field
                label="Mobile No/User Name"
                prepend-icon="phone"
                v-model="user.userName"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                v-model="user.password"
              />
            </v-form>
          </v-card-text>

          <v-card-actions style="place-content:center">
            <v-btn color="red" v-on:click="loginUser()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 import router from "../router/index";
import { db } from "../fireBase/firebaseauth";
export default {
  name: "Login",

  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  created() {},
  methods: {
    loginUser() {
     let ref = db.collection("youtubethumb").doc('admin')
        ref.get().then(res => {
          this.loading = false;
          if (res && res.data()) {
             let adminDetails=res.data();
             if(adminDetails.userName === this.user.userName || adminDetails.mobileNo === this.user.userName){
                if(adminDetails.password === this.user.password){
                  delete adminDetails.password;
                  localStorage.adminData=JSON.stringify(adminDetails);
                    router.push("/");
                }else{
                    console.log("Password invalid"); 
                }
             }else{
                 console.log("username invalid");
             }
          }
        });
   
    }
  }
};
</script>
