<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)" v-for="(song,index) in songs" class="item">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'song-list',
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    methods: {
      getDesc(song) {
        return `${song.singer}-${song.album}`
      },
      selectItem(item, index) {
        this.$emit('select', item, index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/styles/variable.scss";
  @import "../../common/styles/mixin.scss";

  .song-list {
    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 64px;
      font-size: $font-size-medium;
      .rank {
        flex: 0 0 25px;
        width: 25px;
        margin-right: 30px;
        text-align: center;
        .icon {
          display: inline-block;
          width: 25px;
          height: 24px;
          background-size: 25px 24px;
          &.icon0 {
            @include bg-image('./first');
          }
          &.icon1 {
            @include bg-image('./second');
          }
          &.icon2 {
            @include bg-image('./third');
          }
        }
        .text {
          color: $color-theme;
          font-size: $font-size-large;
        }
      }
      .content {
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        .name {
          @include no-wrap();
          color: $color-text;
        }
        .desc {
          @include no-wrap();
          margin-top: 4px;
          color: $color-text-d;
        }
      }
    }
  }
</style>
