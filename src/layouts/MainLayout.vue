<template>
  <q-layout view="lHr lpR fff">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>

          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fas fa-dove"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="283">
      <!-- drawer content -->
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />

      <q-list>
        <q-item clickable exact v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">首页</q-item-section>
        </q-item>

        <q-item clickable exact v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">关于</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
      <q-input
        class="q-ma-md"
        outlined
        rounded
        dense
        placeholder="搜索 Jwitter"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>教育</q-item-label>
            <q-item-label class="text-weight-bold">会有好事发生!</q-item-label>
            <q-item-label caption>
              速阶题间西情百少日界，往计进置不四切切非去，边了9转步山角没持。人质后入厂切代同变色报，场效复后般好议准点林革，状此该坊制没儿系却例。集被队能从影导的，增她气精能严候教，林2山杆切了。持其段为西年，易年节八，满建今个。
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 分钟 前</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>教育</q-item-label>
            <q-item-label class="text-weight-bold">会有好事发生!</q-item-label>
            <q-item-label caption>
              速阶题间西情百少日界，往计进置不四切切非去，边了9转步山角没持。人质后入厂切代同变色报，场效复后般好议准点林革，状此该坊制没儿系却例。集被队能从影导的，增她气精能严候教，林2山杆切了。持其段为西年，易年节八，满建今个。
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 分钟 前</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>教育</q-item-label>
            <q-item-label class="text-weight-bold">会有好事发生!</q-item-label>
            <q-item-label caption>
              速阶题间西情百少日界，往计进置不四切切非去，边了9转步山角没持。人质后入厂切代同变色报，场效复后般好议准点林革，状此该坊制没儿系却例。集被队能从影导的，增她气精能严候教，林2山杆切了。持其段为西年，易年节八，满建今个。
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 分钟 前</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false
    };
  }
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
