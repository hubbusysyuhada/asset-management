<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0676 15.1914L11.8569 13H14.0584H18.0045C18.6933 13 19.1758 12.3201 18.9485 11.6699L17.2002 6.66994C17.0599 6.2687 16.6813 6 16.2562 6H8.84661V13.5441L9.12995 14.1334L10.7765 17.5581C10.9064 17.8282 11.1796 18 11.4793 18C11.9394 18 12.2995 17.6036 12.2555 17.1456L12.0676 15.1914ZM8.80817 4H7.80817H6.84661H5.96192C4.30506 4 2.96191 5.34314 2.96191 7V14C2.96191 15.1046 3.85734 16 4.96191 16H7.80817H7.80824L8.97399 18.4247C9.43695 19.3876 10.4108 20 11.4793 20C13.1043 20 14.3792 18.6133 14.2503 17C14.2491 16.9847 14.2478 16.9694 14.2463 16.9541L14.0584 15H16.0676H18.0045C20.0707 15 21.5184 12.9602 20.8364 11.0098L19.0881 6.00981C18.6672 4.80611 17.5314 4 16.2562 4H8.84661H8.80817ZM4.96191 14H6.80817V6H5.96192C5.40963 6 4.96191 6.44772 4.96191 7V14Z" fill="#989899"/>
</svg>

</template>

<script>
export default {
  name: 'DislikeDefault',
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