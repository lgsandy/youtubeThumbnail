<template>
 <v-container fluid class="ma-0">
    <div style="width:100%;display: flex;place-content: center;">
          <h1>Best Youtube Thumbnail Downloader</h1>
    </div>
    <v-form ref="form" style="height:60px;margin-top:10px">
      <div style="width:100%;display: flex;place-content: center;">
        <div style="float:left;width:50%;height:56px;background-color:whitesmoke">
          <v-text-field
            :rules="searchVal"
            v-model="youtubeUrl"
            outlined
            prepend-inner-icon="search"
            label="SEARCH YOUTUBE VIDEO URL"
            @focus="allowAutoEnter"
            @mouseover="allowAutoEnter"
          ></v-text-field>
        </div>
        <div>
          <v-btn large @click="search" style="height:54px;box-shadow:0px 1px 1px 1px #ececec">search</v-btn>
        </div>
      </div>
    </v-form>
      <div style="width:100%;display: flex;place-content: center;">
          <h4>Get Any Thumbnails Just in One Single Click</h4>
     </div>
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="12" align="center" justify="center">
        <!-- <v-img
          height="60"
          width="468"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img> -->
          <span>Ads Here</span>   
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" xs="12" sm="2" class="hidden-sm-and-down">
        <!-- <v-img
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img>-->
        <leftsideAds />
      </v-col>
      <v-col cols="12" xs="12" sm="8">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="6"
            align="center"
            justify="center"
            v-for="thumb in allQualityThumb"
            :key="thumb.name"
          >
            <v-card class="mx-auto ma-2" elevation="5">
              <v-card-text>
                <v-img
                  @click="showThumbPreview(thumb)"
                  class="white--text align-end"
                  height="200px"
                  :src="thumb.url"
                  style="cursor: pointer;"
                ></v-img>
              </v-card-text>
              <v-card-actions>
                 <v-btn color="orange" rounded>{{thumb.size}}</v-btn>
                   <v-spacer />
                <a :href="thumb.base64" :download="thumb.name" style=" text-decoration: none;" v-if="thumb.base64 && thumb.base64.length">
                  <v-btn color="error">
                    Download
                    <v-icon dark right>cloud_download</v-icon>
                  </v-btn>
                </a>
              
               
              </v-card-actions>
              <v-card class="hidden-md-and-up">
                <!-- <v-card-text>Ads</v-card-text> -->
                 <!-- <v-img
          height="60"
          width="468"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img> -->
           <span>Ads Here</span>   
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="2" class="hidden-sm-and-down">
        <!-- <v-img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" height="100%"></v-img> -->
           <span>Ads Here</span>   
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" align="center" justify="center">
        <!-- <v-img
          height="60"
          width="468"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img> -->
           <span>Ads Here</span>   
      </v-col>
    </v-row>
    <!-- <div
      v-if="inValidUrl"
      style="height: calc(100% - 50px);
      display: flex;place-content: center;align-items: center;font-size: 21px;color: gray;
       font-weight: bold;"
    >
      <span>Not Valid Url</span>
    </div>-->
     <div id="addPostDataDiv">
      </div>
       <div class="my-2" style="text-align:center" v-if="isAdminLogin">
      <v-btn  color="primary" @click="PostDialog=true">Update</v-btn>
      </div>
    <v-overlay :value="overlay">
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
    </v-overlay>
    <v-dialog v-model="isShowThumbPreview" width="500">
      <div style="height:400px;width:100%">
        <div style="height:50px">
          <v-toolbar flat dark color="primary">
            <v-spacer />
            <v-btn icon dark @click="isShowThumbPreview = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <div
          style="height:calc(100% - 50px);background-color:white;overflow:auto;    text-align: center;"
        >
          <img :src="currentSelectedThumb" />
          <img />
        </div>
      </div>
    </v-dialog>

    <v-snackbar v-model="showSnackbar" :timeout="2000">
      <span>{{snackbarText}}</span>
      <v-btn color="pink" text @click="showSnackbar = false">Close</v-btn>
    </v-snackbar>
     <v-dialog v-model="PostDialog" width="60%">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Update Post
        </v-card-title>
        <v-card-text>
           <div id="app">
        <vue-editor v-model="content"></vue-editor>
        </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="updatePostData">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 </v-container>
</template>

<style scoped>
#addPostDataDiv{
   margin: 20px 30px 10px 30px;
    text-align: justify;
    border: 1px solid #e4e4e4;
    padding: 20px;
    box-shadow: 0px 2px 1px 2px #d7d7d7;
}
</style>

<script>
//  import axios from "axios";
import leftsideAds from "../components/leftsideads";
import { VueEditor } from "vue2-editor";
import { db } from "../fireBase/firebaseauth";
export default {
  name: "Dashboard",
  components: { leftsideAds,VueEditor },
  data: () => ({
    searchVal: [v => !!v || "please paste youtube url"],
    allQualityThumb: [],
    youtubeUrl: "",
    videoId: "",
    downloadedImg: {},
    overlay: false,
    inValidUrl: false,
    isShowThumbPreview: false,
    currentSelectedThumb: "",
    showSnackbar: false,
    snackbarText: "",
    content:'',
    isAdminLogin:false,
    PostDialog:false
  }),
  created(){
    if(localStorage && localStorage.adminData && localStorage.adminData.length>0){
    this.isAdminLogin=true;
    }else{
      this.isAdminLogin=false;
    }
  this.loadPostUsData();
  },
  methods: {
    loadPostUsData() {
        let ref = db.collection("youtubethumb").doc("post");
        ref.onSnapshot(res => {
          if (res && res.data()) {
            this.content=res.data().post;
           let ele= document.getElementById('addPostDataDiv');
           if(ele && this.content){
             ele.innerHTML= this.content
           }
          }
        });
    },
    updatePostData(){
     this.PostDialog = false;
     if (localStorage && localStorage.adminData && localStorage.adminData.length) {
        let ref = db.collection("youtubethumb").doc("post");
        let cDate=new Date().getTime();
         let obj={timeStamp:cDate,post:this.content}
        ref.set(obj).then(res=>{
         if(res){
           console.log("update");
         }
        })
      }
    },
    search() {
      if (this.$refs.form.validate()) {
        let isValid = this.validateYouTubeUrl(this.youtubeUrl);
        if (isValid) {
          this.overlay = true;
          this.inValidUrl = false;
          let isValidUrl = this.youtubeUrl.includes("youtu.be");
          if (isValidUrl) {
            this.videoId = this.youtubeUrl.split("/")[3];
          } else {
            this.videoId = this.youtubeUrl.split("v=")[1];
          }
          if (this.videoId && this.videoId.length > 11) { 
            this.videoId = this.videoId.substr(0, 11);
          }
           this.allQualityThumb = [
            { name: "maxresdefault",  base64:'',size: "HD 1920x1080",url: `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg` },
              { name: "sddefault",  base64:'',size: "SD 640x480",url: `https://i.ytimg.com/vi/${this.videoId}/sddefault.jpg` },
              { name: "hqdefault",  base64:'',size: "HQ 480x360",url: `https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg` },
              { name: "mqdefault", base64:'', size: "MQ 320x180",url: `https://i.ytimg.com/vi/${this.videoId}/mqdefault.jpg` },
          ];
          for (let i = 0; i < this.allQualityThumb.length; i++) {
            this.forceDownload(i);
          }
        } else {
          this.inValidUrl = true;
          this.showSnackbar = true;
          this.snackbarText = "Please Keep Valid Link";
          console.log("Not Valid");
        }
      }
    },
    forceDownload(i) {
      let _this = this;
       _this.overlay = false;
      let cUrl = `https://i.ytimg.com/vi/${this.videoId}/${_this.allQualityThumb[i].name}.jpg`;
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var reader = new FileReader();
            reader.onloadend = function() {
              let base64 = reader.result;
              _this.allQualityThumb[i].base64=base64;
            };
            reader.readAsDataURL(xhr.response);
          } else {
             _this.allQualityThumb[i].base64='';
            _this.showSnackbar = true;
            _this.snackbarText = _this.allQualityThumb[i].size + " Image Quality Not Found";
          }
        }
      };
      var proxyUrl = "https://youtubethumnnail.herokuapp.com/";
      xhr.open("GET", proxyUrl + cUrl);
      xhr.responseType = "blob";
      xhr.send();
    },
    validateYouTubeUrl(url) {
      var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (url.match(p)) {
        return url.match(p)[1];
      }
      return false;
    },
    async allowAutoEnter() {
      try {
         if(navigator && navigator.clipboard && navigator.clipboard.readText){
        const text = await navigator.clipboard.readText();
        this.youtubeUrl = text;
         }
      } catch (err) {
        console.log("Failed to copy!", err);
      }
    },
    showThumbPreview(thumb) {
      console.log(thumb);
      this.currentSelectedThumb = thumb.url;
      this.isShowThumbPreview = true;
    }
  }
};
</script>
