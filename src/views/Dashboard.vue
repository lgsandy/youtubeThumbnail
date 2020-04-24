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
        <div>
          <v-btn large @click="search" style="height:54px;box-shadow:0px 1px 1px 1px #ececec">search</v-btn>
        </div>
      </div>
    </v-form>
    <v-row align="center" justify="center">
      <v-col cols="12" xs="12" sm="12" align="center" justify="center">
        <v-img
          height="60"
          width="468"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" xs="12" sm="2">
        <v-img
          src="data:image/png;base64,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"
        ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="8">
        <v-card
          class="mx-auto ma-2"
          elevation="5"
          v-for="thumb in allQualityThumb"
          :key="thumb.name"
        >
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
          <v-card class="hidden-md-and-up">
            <v-card-text>Ads</v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="2">
        <v-img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12" align="center" justify="center">
        <v-img
          height="60"
          width="468"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <div
      v-if="inValidUrl"
      style="height: calc(100% - 50px);
      display: flex;place-content: center;align-items: center;font-size: 21px;color: gray;
       font-weight: bold;"
    >
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
    downloadedImg: {},
    overlay: false,
    inValidUrl: false
  }),
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        this.allQualityThumb = [];
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
          let quality = [
            { name: "mqdefault", size: "MQ 320x180" },
            { name: "hqdefault", size: "HQ 480x360" },
            { name: "sddefault", size: "SD 640x480" },
            { name: "maxresdefault", size: "HD 1920x1080" }
          ];
          for (let i = 0; i < quality.length; i++) {
            this.forceDownload(i, quality);
          }
        } else {
          this.inValidUrl = true;
          console.log("Not Valid");
        }
      }
    },
    forceDownload(i, quality) {
      let _this = this;
      let cUrl = `https://i.ytimg.com/vi/${this.videoId}/${quality[i].name}.jpg`;
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          let base64 = reader.result;
          let obj = {
            name: `image${i}`,
            base64: base64,
            size: quality[i].size,
            url: cUrl
          };
          _this.allQualityThumb.push(obj);
          if (_this.allQualityThumb.length == 4) {
            _this.overlay = false;
          }
        };
        reader.readAsDataURL(xhr.response);
      };
      var proxyUrl = "https://cors-anywhere.herokuapp.com/";
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
    }
  }
};
</script>
