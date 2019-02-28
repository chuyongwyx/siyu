<template>
  <div class="content">
    <div class="leftScroll">
      <ul>
        <li v-for="(item,index) in this.$store.state.classify.list">{{item}}</li>
      </ul>
    </div>
    <div class="rightImg">
      <h3>推荐品牌</h3>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      imgs: state => state.classify.imgs
    })
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  .leftScroll {
    ul {
      width: 2.25rem;
      text-align: center;
      border-right: 16px solid #f3f3f3;
      li {
        width: 100%;
        height: 1.12rem;
        line-height: 1.12rem;
        color: #333;
        font-size: 36px;
        border-bottom: 1px solid #f7f7f7;
      }
    }
  }
  .rightImg {
    flex: 1;
    h3 {
      font-size: 20px;
      margin: 20px 0;
      color: black;
    }
  }
}
</style>
