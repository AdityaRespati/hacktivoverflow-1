<template>
  <div>
    <v-card>
      <v-layout align-center justify-space-between row>
        <h1 class="display-1 font-weight-thin mt-4 mb-3">Top Questions</h1>
        <v-layout row justify-end>
          <v-btn
            class="mt-2"
            @click.prevent="askQuestion"
            color="blue-grey white--text"
          >ask a question</v-btn>
        </v-layout>
      </v-layout>
    </v-card>
    <hr>

    <div v-for="(question, index) in allQuestions" :key="index">
      <v-card>
        <v-divider></v-divider>
        <v-layout align-center justify-space-between row>
          <h1 class="display-1 font-weight-light ml-2 mt-4">
            <v-btn
              flat
              :to="{path: `question/${question._id}`, params: {id:question._id}}"
            >{{question.title}}</v-btn>
          </h1>
          <v-layout align-center justify-end row fill-height>
            <div class="mr-3">
              <p>{{question.upvoters.length}}</p>
              <v-icon>thumb_up</v-icon>
            </div>
            <div class="mr-3">
              <p>{{question.downvoters.length}}</p>
              <v-icon>thumb_down</v-icon>
            </div>
            <div class="mr-3">
              <p>{{question.answers.length}}</p>
              <v-icon>question_answer</v-icon>
            </div>
          </v-layout>
        </v-layout>
        <div class="text-xs-left ml-4 mb-2">
          <v-chip
            v-for="(tag, index) in question.tags"
            :key="index"
            @click.prevent="searchByTag(tag)"
          >{{tag.name}}</v-chip>
        </div>
        <v-divider></v-divider>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import swal from "sweetalert";

export default {
  name: "AllQuestions",
  created() {
    this.getAllQuestions();
  },
  computed: {
    ...mapState(["allQuestions"])
  },
  methods: {
    ...mapActions(["getAllQuestions"]),
    askQuestion() {
      if (!localStorage.getItem("token")) {
        swal("you have to login first!", {
          buttons: ["continue browsing", "login now"]
        }).then(value => {
          if (value) this.$router.push({ path: "/authpage/register" });
        });
      } else {
        this.$router.push({ path: "/ask" });
      }
    },
    searchByTag(tag){
      this.$router.push({path: '/search', query:{tag: tag.name}})
      // var list = this.allQuestions.filter(question => question.tags.map(t => t.name).includes(tag.name))
    }
  }
};
</script>

<style>
</style>
