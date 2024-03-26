<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0676 8.80857L11.8569 11H14.0584H18.0045C18.6933 11 19.1758 11.6799 18.9485 12.3301L17.2002 17.3301C17.0599 17.7313 16.6813 18 16.2562 18H8.84661V10.4559L9.12995 9.86661L10.7765 6.44191C10.9064 6.17178 11.1796 6 11.4793 6C11.9394 6 12.2995 6.39639 12.2555 6.85443L12.0676 8.80857ZM8.80817 20H7.80817H6.84661H5.96192C4.30506 20 2.96191 18.6569 2.96191 17V10C2.96191 8.89543 3.85734 8 4.96191 8H7.80817H7.80824L8.97399 5.5753C9.43695 4.61237 10.4108 4 11.4793 4C13.1043 4 14.3792 5.38666 14.2503 7C14.2491 7.01527 14.2478 7.03056 14.2463 7.04586L14.0584 9H16.0676H18.0045C20.0707 9 21.5184 11.0398 20.8364 12.9902L19.0881 17.9902C18.6672 19.1939 17.5314 20 16.2562 20H8.84661H8.80817ZM4.96191 10H6.80817V18H5.96192C5.40963 18 4.96191 17.5523 4.96191 17V10Z" fill="#989899"/>
</svg>

</template>

<script>
export default {
  name: 'LikeDefault',
  props: {
    size: {
      Type: Number,
    },
    color: {
      Type: String,
    }
  },
  computed: {
    contentStyle() {
      const size = this.size || 24
      return `width: ${size}px; height: ${size}px`
    },
    colorStyle() {
      if (this.color) return `fill: ${this.color}`
      return ""
    }
  },
}
</script>