<template>
    <v-container style="height:100%">
      <v-form ref="form" style="height:60px">
    
          <div style="width:100%;display: flex;place-content: center;">
          <div style="float:left;width:50%;height:60px">
            <v-text-field
              :rules="searchVal"
              v-model="youtubeUrl"
              outlined
              prepend-inner-icon="search"
              label="SEARCH YOUTUBE VIDEO URL"
            ></v-text-field>
          </div>
          <div >
            <v-btn large @click="search" style="height:54px;box-shadow:0px 1px 1px 1px #ececec">search</v-btn>
          </div>
          </div>
  
      </v-form>
        <v-row >
        <v-col cols="12" sm="6" v-for="thumb in allQualityThumb" :key="thumb.name" class="pa-2">
          <v-card class="mx-auto" elevation="5">
            <v-img class="white--text align-end" height="200px" :src="thumb.url"></v-img>
            <v-card-actions>
              <a :href="thumb.base64" :download="thumb.name" style=" text-decoration: none;">
                <v-btn color="error">
                  Download
                  <v-icon dark right>cloud_download</v-icon>
                </v-btn>
              </a>
              <v-spacer />
              <v-btn color="orange" rounded>{{thumb.size}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
        <div v-if="inValidUrl"  style="height: calc(100% - 50px);
      display: flex;place-content: center;align-items: center;font-size: 21px;color: gray;
       font-weight: bold;">
       <span>Not Valid Url</span>
      </div> 
        <v-overlay :value="overlay">
                <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
              </v-overlay>
    </v-container>

</template>

<script>
//  import axios from "axios";

export default {
  name: "team",
  components: {},
  data: () => ({
    searchVal: [v => !!v || "please paste youtube url"],
    allQualityThumb: [],
    youtubeUrl: "",
    videoId: "",
    downloadedImg:{},
     overlay: false,
     inValidUrl:false
  }),
  methods: {
     search() {
      if (this.$refs.form.validate()) {
        this.allQualityThumb=[]; 
        let isValid=this.validateYouTubeUrl(this.youtubeUrl);
        if(isValid){
        this.overlay= true;
           this.inValidUrl=false;
        let isValidUrl=this.youtubeUrl.includes("youtu.be");
        if(isValidUrl){
           this.videoId=this.youtubeUrl.split('/')[3]
        }else{
       this.videoId = this.youtubeUrl.split("v=")[1];
        }
        let quality = [{name:"mqdefault",size:"MQ 320x180"},
                       {name:"hqdefault",size:"HQ 480x360"}, 
                       {name:"sddefault" ,size:"SD 640x480"}, 
                        {name:"maxresdefault",size:"HD 1920x1080"}];
        for(let i=0;i<quality.length;i++){
           this.forceDownload(i,quality);
        }
      }else{
        this.inValidUrl=true;
        console.log("Not Valid")
      }
       }
    },
     forceDownload(i,quality){
    let _this=this;
    let cUrl=`https://i.ytimg.com/vi/${this.videoId}/${quality[i].name}.jpg`  ;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
           let base64=reader.result;
          let obj = { name: `image${i}`,base64:base64,size:quality[i].size,url: cUrl};
         _this.allQualityThumb.push(obj);  
          if(_this.allQualityThumb.length == 4){
               _this.overlay= false;
          }
        };
        reader.readAsDataURL(xhr.response);
    };
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    xhr.open('GET',proxyUrl + cUrl);
    xhr.responseType = 'blob';
    xhr.send();
   },
   validateYouTubeUrl(url){
      var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if(url.match(p)){
        return url.match(p)[1];
    }
    return false;
},
  }
};
</script>
