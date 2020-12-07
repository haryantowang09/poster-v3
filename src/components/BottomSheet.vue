<template lang="pug">
section
  ul
    li
      img(:src="flipLikeIcon")
      span(@click="this.likeFlag = !this.likeFlag")
        | Like
    li
      img(:src="commentIcon")
      span
        | Comment
    li
      img(:src="shareIcon")
      span
        | Share
</template>

<script>
export default {
  name: 'BottomSheet',
  data() {
    return {
      likeFlag: false,
      elikeIcon: require('@/assets/icons/empty-like.svg'),
      likeIcon: require('@/assets/icons/like.svg'),
      commentIcon: require('@/assets/icons/empty-comment.svg'),
      shareIcon: require('@/assets/icons/empty-share.svg'),
    }
  },
  computed: {
    flipLikeIcon() {
      return (this.likeFlag) ? this.likeIcon : this.elikeIcon
    }
  }
}
</script>

<style scoped>
section {
  background-color: #1E1F20;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  min-height: 50px;
  position: absolute;
  bottom: 0;
}
section ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  padding: 0;
}
section ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  list-style: none;
}
section ul li:active {
  opacity: 0.6;
}
section ul li img {
  margin-right: 10px;
}
</style>