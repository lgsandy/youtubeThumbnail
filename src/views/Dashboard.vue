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
              label="Search"
            ></v-text-field>
          </v-flex>
          <v-flex >
            <v-btn large @click="search">search</v-btn>
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
      <a :href="thumb.url" :download="thumb.name">
      <v-btn color="orange" text >Download
      </v-btn>
      </a>
    </v-card-actions>
     <v-card-actions>
      <v-btn color="orange" text>{{thumb.size}}
      </v-btn>
    </v-card-actions>
  </v-card>

  
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import axious from "axios";

export default {
  name: "team",
  components: {},
  data: () => ({
    searchVal: [v => !!v || "Work Order Number is required"],
    allQualityThumb: [],
    youtubeUrl: "",
    videoId: ""
  }),
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        this.allQualityThumb=[];
          this.videoId = this.youtubeUrl.split("v=")[1];
        let quality = [{name:"mqdefault",size:"MQ 320x180"},
                       {name:"hqdefault",size:"HQ 480x360"}, 
                       {name:"sddefault" ,size:"SD 640x480"}, 
                        {name:"maxresdefault",size:"HD 1920x1080"}];
        for(let i=0;i<quality.length;i++){
        let obj = { name: `image${i}`,size:quality[i].size,url: `http://i.ytimg.com/vi/${this.videoId}/${quality[i].name}.jpg`};
         this.allQualityThumb.push(obj);
        }
        console.log(this.allQualityThumb);
      }
    }
  }
};
</script>
