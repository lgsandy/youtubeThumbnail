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
        <!-- <i class="fa fa-facebook"></i>  -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABaklEQVRIS2O0r9mb+uvP/24GBgZ+BiKAMC8bEaoYGP79+/+RhY05n9GsZMfnvwxMPETpYmBgINYCsHn/GV4xGpfs+k+s4SB1pFjwj4Hh1wizgJGRgUFLho+BhZmR4fff/wwvP/zAG7okBZEIHxvDpGQjBjUpXrChT95+Y0ieepp6FhT7qTFE2srDDaS6BROSDBlsNEUYPn//zRDVe4Thz7//DP8YmKnjA0kBDoa6cG0GUxUhhg9ffzPkzDkLykgMbz//oo4FexsdGPi5WFEMu//yC0PGzLO0s+Ds3XcMVUsvU8cCUR5mhsYoPQYzVRGGLz/+MGRMO8Hw6+9/ho/f/1HHApApsEj+9P03Q2j3MaJKF5LywagFBMOU5kFkqszPIMrLysDOysxw6MZ7gg4CKSApkmEmjsAKx6hg9ydGlv+QQp4IQFIQ/Wd8yWiatzXxDyNDzz9mZuKaLXzsRDiDgYHl//8P//4x5wEAFaHao6+T5VUAAAAASUVORK5CYII=" style="margin:5px;cursor:pointer"/>
      </network>
      <network network="twitter">
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACL0lEQVRIS+1WTWsTURQ9d5JJMolObBK1FUVbqNRaELvxCwSRLqrgDxCKoCtdlW511UW7EqGCGyUrt666kS40tiCIqHWhC5OFih8lyeSDiWYmM/NemdakTTuZvC5c6VvN4rxz5p577nuPrizlr5tgdyXQHgisnpAkgAI4c6pyUJqiscWVMuMQIneZE4ICLpaIl+jiixUu9Et/QDsRcMCcf1RAlggDsSBMxvHll42mxwS0vl1HO1p0PhXGUtFsAzf7dCYZxtSgimaacjULzwsGjkQkpL/+hrOpox0F5s/tQ6ZgYC6rw+IbO2QiPD6VQtIjSc9+1jCfb+B73WllpqPAk9MpxEOBtfLTn2t4qa1Xc2y3jPsnE56he5QtYUHbIPe1aOKggmsDaouoaDpYrjbQYMClXsVT4OqrAuwtgfeswG3U9LCKE/EQonJAaER0i+HGG20btqNFt4/uwoXemBC5C3pXMjD7SRcXUCWGO0MqRlNiIg+yFWQ0S1zARd7qj2K8Lwol6G9Tvm5h8n0ZNlxz25fvUXE4AsyM9GB/NORr1cwHDcs688R0PYsicHCzP4bLh+KeBOlcCU+L7dHcDPQUSMjASDyMA0oAZ5MRDKvyNvKKaeFhrorXuv9B7B1TznE8RhjvUzCaULBXWRcwbQcfywbeVgwsahbq6B7hrha5xEqAECRCzWZr0/z/Pug6vTu3KPOjDJL+yqXPLa7R2MK3CUti9ziJvSxEny3kUJVAk6vFEiCVGkHl/QAAAABJRU5ErkJggg==" style="margin:5px;cursor:pointer"/>
      </network>
      <network network="whatsapp">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEW0lEQVRIS7WWaWxUVRTHf/fNdKZ0Z2ZapkVAI9pgtIDGQCCGsMkiKa1EEC0iUXCCspQ0IhYEAo2AxTYQoBRxCcRW1MgSYhtliXyQLZA2IEtZLEgrLdN2hna2Tt818wIzPGib+oHz4b28d/73/N695557nuCevRtcngXSAeJFwAoo9309vPuBZpBVIEq+Na7dGxonQpdZgWVFwOIeBuqprHiX6fNckeP/OEtK8UtPR/0fnRAyW8zw5lUIKSZ0NVBB4XllIEMM6aQIK2ZhokW6uaLe5FTHOZqkq0umFLJSTG9dUg/YO1MNNqQz25RFXyWFu7KNW+ptfARIEvEMUNJQkRwJnuD7wEHapLezEA1imnuxDzA/7H3dNI6Z5snUdNRS5v+Vcx01SGRYliDimBg1kqmmMdosCryl/KveeTiMKrJdCyKj7rlfNY3EET2D/YHDfOfbpwv8cIR+Sir5MR+gorK0baM20wdNZDZ/qAOkKFa2Jqzgj8BpNnl2a1qLkkiT2vVaP2GwUxiXx/H2Koo9u/SAKU6HDrAwNofhpiHMbVmhreuC2BzGm0ew1F3IheC1LhM6vddEcnpl4nCtoq6jIawTkxrnhQEGFMqsG/nd9yelbXswYuQnazEmEcVR/yk23P2qS0CsiKHMWsjutv3s8VZEABNuvx8GDDCmsd2yms9aNnMyUI1AUG7bSKISz17PIUpay7stgy97f4JLvctq15YIYFz9nDBgqOk5NljycDhXcbX9hiaanzCT7JjxrHOVcsh7vFtAfpKDPgYrC50FEcCYW7PDgPSop9iavJIlznVU+S9qohgRzZbkldgMSXzUuIbaYJ32PlqY8cnQ8ROxAkuuVoh5zvURwKibOWFAvBLLgbQSvmjeycG2o2FRP6OdouRPiVNi2e3ex5X2WtZYF1MduMS2ljLtOWTl9iLO+M+zoTmSK/FK7Vu6XbTDvhaP6mNRw1rd19mNNpZb55NhTte939Gyh13ufTxjepKd9gJW3tnEEc+JyAxGXH9TB5gSN5pltnm8V5/PRf+j23J07DAmx40i1ZjMJf91Cpu+xqv6KOyzlIGm/sz4Jxe/DEQAw6++oQMM6zWY4tR85tYt55zvcrdJve+clTSV+Za3Wd2wmYrWY/pCe7lmmg6wyPYOmQljGX9tDlHCiMWQSH2wsVNQqD4c1pnkJGXys6uS9Y07HtGJly5ndTzYvcr6F5FkSOBGex0vRKdrkBOeKg64D1MbuIVbbcVmsDAsJoOpieNIMdrY2fQjpc7yTs4s6RNDLmaG6jo5hLYae/Pb09/QLoNUey9x0lOFT/WTmTiWgeYBuq8LyADHWk+z3fkDNf6/u1rKepFx/rUKBFrD6RvVh/6mNM54zusSFfKlRiVr/nhDHM5gixY0lNxuTVIpBv01KUtReSwtU1XI1pr+oOoJj6XpX8iozNUAIXv27NgsKYRDQAbQO3Qa9GiPRkQqcEfCWSFlyeWhh7Tflv8AQCqjoRyXjKUAAAAASUVORK5CYII=" style="margin:5px;cursor:pointer" />
      </network>
  </div>
</social-sharing>
    </v-card>
  </v-footer>
</template>
