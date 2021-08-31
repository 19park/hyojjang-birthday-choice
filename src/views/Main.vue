<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/main-logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          어서오십시오.
        </h1>

        <p class="subheading font-weight-regular">
          이 웹사이트는 매년 8/31일에 진행되는<br/>선물 선택 페이지 입니다..
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <v-btn large dark @click="doStart">
            시작하기
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name: 'Main',
    computed: {
      ...mapGetters(['allCards'])
    },
    methods: {
      doStart() {
        if (this.allCards.some(card => card.isChoice)) {
          alert(`오호.. 한번 더 하시는건가요?ㅋ\n${this.allCards.find(card => card.isChoice)?.title}로 확정하셨으면서..`)
        }
        this.$store.dispatch("init")
        this.$router.push("/step-1")
      }
    }
  }
</script>