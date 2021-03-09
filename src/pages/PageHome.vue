<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            class="new-jwitter"
            bottom-slots
            placeholder="说些什么..."
            v-model="newJwitterContent"
            counter
            autogrow
            maxlength="140"
          >
            <template v-slot:before>
              <q-avatar size="lg">
                <img src="https://api.prodless.com/avatar.png" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click="addNewJwitter"
            class="q-mb-lg"
            :disable="!newJwitterContent"
            unelevated
            rounded
            no-caps
            color="primary"
            label="Jwitter"
          />
        </div>
      </div>

      <q-separator class="divider" size="10px" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            class="jwitter q-py-md"
            v-for="jwitter in jwitters"
            :key="jwitter.date"
          >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://api.prodless.com/avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Jld</strong>
                <span class="text-grey-7">
                  @Jld
                  <br class="lt-md" />&bull; {{ jwitter.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="jwitter-content text-body1">
                {{ jwitter.content }}
              </q-item-label>
              <div class="jtwitter-icons row justify-between q-mt-sm">
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="far fa-comment"
                />
                <q-btn
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-retweet"
                />
                <q-btn flat round color="grey" size="sm" icon="far fa-heart" />
                <q-btn
                  @click="deleteJwitter(jwitter)"
                  flat
                  round
                  color="grey"
                  size="sm"
                  icon="fas fa-trash"
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns";

export default {
  name: "PageHome",
  data() {
    return {
      newJwitterContent: "",
      jwitters: [
        {
          content:
            "革义革见王各间处值军，由每该际分状圆组没来，问而该管告需体告。领形需点资采按车认情放六造，百族术他每片技公枝。出本我有那几，已流习总段社，究F枝性。 速阶题间西情百少日界，往计进置不四切切非去。人质后入厂",
          date: 1615218523445
        },
        {
          content:
            "领形需点资采按车认情放六造，百族术他每2片技公枝。出本我有那几，已流习总段社，究F枝性。 速阶题间西情百少日界，往计进置不四切切非去，边了9转步山角没持。人质后入厂",
          date: 1615218561048
        },
        {
          content:
            "做五断系由一不被运马商，何业只院空刷拉劳民精。革义革见王各间处值军，由每该际分状圆组没来，问而该管告需体告。领形需点资采按车认情放六造，百族术他每2片技公枝。出本我有那几，已流习总段社，究F枝性。 速阶题间西情百少日界，往计进置不四切切非去，边了9转步山角没持。人质后入厂",
          date: 1615218583087
        }
      ]
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date(), { addSuffix: true });
    }
  },
  methods: {
    addNewJwitter() {
      let newJwitter = {
        content: this.newJwitterContent,
        date: Date.now()
      };
      this.jwitters.unshift(newJwitter);
      this.newJwitterContent = "";
    },
    deleteJwitter(jwitter) {
      let dateToDelete = jwitter.date;
      // let index = this.jwitters.findIndex(
      //   jwitter => jwitter.date === dateToDelete
      // );
      // this.jwitters.splice(index, 1);
      this.jwitters = this.jwitters.filter(
        jwitter => jwitter.date !== dateToDelete
      );
    }
  }
};
</script>

<style lang="sass">
.new-jwitter
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.jwitter:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)

.jwitter-content
  white-space: pre-line

.jtwitter-icons
  margin-left: -5px
</style>
