<template>
  <v-footer
    dark
    padless
    app
    inset
    
  >
    <v-card
      class="flex"
      flat
      tile
      color="red"
      :elevation="10"
    >

      <v-card-text class="py-2 white--text text-center">Copyright &copy;
        {{ new Date().getFullYear() }}  <strong>	 youtubethumbnail</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
