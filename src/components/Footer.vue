<template>
  <v-footer
    dark
    padless
    app
    absolute
    
  >
    <v-card
      class="flex"
      flat
      tile
      color="red"
      :elevation="10"
    >

      <v-card-text class="py-2 white--text text-center">Copyright &copy;
        {{ new Date().getFullYear() }}  <strong>youtubethumbnailsave.com</strong>
      </v-card-text>
       <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div style="text-align:center">
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing>
    </v-card>
  </v-footer>
</template>
