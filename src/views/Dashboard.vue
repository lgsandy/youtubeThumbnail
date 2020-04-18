<template>
  <div class="team">
    <v-container>
      <v-form ref="form">
        <v-layout row wrap>
          <v-flex>
            <v-text-field
              :rules="searchVal"
              v-model="youtubeUrl"
              outlined
              prepend-icon="search"
              label="SEARCH YOUTUBE VIDEO URL"
            ></v-text-field>
          </v-flex>
          <v-flex >
            <v-btn large @click="search" style="height:54px;box-shadow:0px 1px 1px 1px #ececec">search</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <v-layout row wrap justify-center>

      <v-card class="mx-auto" max-width="400" v-for="thumb in allQualityThumb" :key="thumb.name" >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="thumb.url"
    >
    </v-img>
    <v-card-actions>
      <a :href="thumb.base64" :download="thumb.name" style=" text-decoration: none;">
       <v-btn depressed>Download</v-btn>
      </a>
       <v-btn color="orange" text>{{thumb.size}}
      </v-btn>
    </v-card-actions>
    
  </v-card>
      </v-layout>
        <v-overlay :value="overlay">
                <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
              </v-overlay>
    </v-container>
  </div>
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
  }),
  methods: {
     search() {
      if (this.$refs.form.validate()) {
        this.allQualityThumb=[]; 
        this.overlay= true;
          this.videoId = this.youtubeUrl.split("v=")[1];
        let quality = [{name:"mqdefault",size:"MQ 320x180"},
                       {name:"hqdefault",size:"HQ 480x360"}, 
                       {name:"sddefault" ,size:"SD 640x480"}, 
                        {name:"maxresdefault",size:"HD 1920x1080"}];
        for(let i=0;i<quality.length;i++){
           this.forceDownload(i,quality);
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
  }
};
</script>
