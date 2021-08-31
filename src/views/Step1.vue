<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <p class="subheading font-weight-regular my-3">
          이 웹사이트는 매년 8/31일에 진행되는<br/>
          선물 선택 페이지 입니다..ㅋ<br/>
          4가지 중에 하나를 선택하시면 되며,<br/>
          한번 선택 후에는 1번의 기회가<br/>
          더 주어집니다..ㅋ
        </p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
          v-for="card in choiceAbleCards"
          :key="card.title"
          cols="6"
      >
        <v-card>
          <v-img
              :src="require('../assets/main-logo.png')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200"
          >
            <v-card-title v-text="`${card.no}번 째`"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text
                   class="font-weight-bold"
                   color="primary"
                   @click="doChoice(card)"
            >
              선택하기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
        v-model="dialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          선물 결과
        </v-card-title>

        <v-card-text class="py-3" v-if="selectedIdx !== null">
          <h2 class="mb-3">
            선택하신 선물은 {{allCards[selectedIdx].title}} 입니다..
          </h2>
          <h3 v-if="!isReChoice">
            이걸로 확정하시겠습니까?
          </h3>
          <h3 v-else>
            이걸로 알려주십시오..
          </h3>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red"
              text
              @click="doComplete"
          >
            확정
          </v-btn>
          <v-btn
              v-if="!isReChoice"
              color="primary"
              text
              @click="doReChoice"
          >
            한번 더 선택ㅋ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name: 'Main',
    data: () => ({
      dialog: false,
      selectedIdx: null,
    }),
    computed: {
      ...mapGetters(["allCards", "choiceAbleCards"]),
      isReChoice() {
        return this.choiceAbleCards.length < 4
      }
    },
    methods: {
      doChoice(card) {
        if (confirm(`${card.no}번 째 카드를 선택합니까?`)) {
          this.selectedIdx = this.allCards.indexOf(card);
          this.$nextTick(() => {
            this.dialog = true
          })
        }
      },
      doReChoice() {
        this.$store.dispatch("selectCard", {
          idx: this.selectedIdx
        })
        this.dialog = false
      },
      doComplete() {
        alert("예 그냥 확정됐습니다. 그걸로 알려주심됩니다..")
        this.$store.dispatch("choiceCard", {
          idx: this.selectedIdx
        })
        this.$router.replace("/")
      }
    }
  }
</script>