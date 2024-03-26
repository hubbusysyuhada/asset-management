<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#D1D1D2"/>
<path d="M12.0009 15.4403C9.67082 15.4403 7.78076 13.5502 7.78076 11.2201V7.56002C7.78076 7.25001 8.03077 7 8.33078 7C8.63079 7 8.8908 7.25001 8.8908 7.56002V11.2301C8.8908 12.9402 10.2908 14.3402 12.0009 14.3402C13.7109 14.3402 15.111 12.9402 15.111 11.2301V7.56002C15.111 7.25001 15.361 7 15.671 7C15.981 7 16.231 7.25001 16.231 7.56002V11.2301C16.221 13.5502 14.331 15.4403 12.0009 15.4403Z" fill="#989899"/>
<path d="M15.6712 17.1601H8.33101C8.021 17.1601 7.771 16.9101 7.771 16.6001C7.771 16.29 8.021 16.04 8.33101 16.04H15.6612C15.9712 16.04 16.2213 16.29 16.2213 16.6001C16.2213 16.9101 15.9712 17.1601 15.6712 17.1601Z" fill="#989899"/>
</svg>

</template>

<script>
export default {
  name: 'StructureDefault',
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