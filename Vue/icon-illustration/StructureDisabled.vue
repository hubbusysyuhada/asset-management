<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" fill="#F2F2F2"/>
<path d="M12.001 15.4403C9.67088 15.4403 7.78082 13.5502 7.78082 11.2201V7.56002C7.78082 7.25001 8.03083 7 8.33084 7C8.63085 7 8.89086 7.25001 8.89086 7.56002V11.2301C8.89086 12.9402 10.2909 14.3402 12.001 14.3402C13.711 14.3402 15.111 12.9402 15.111 11.2301V7.56002C15.111 7.25001 15.3611 7 15.6711 7C15.9811 7 16.2311 7.25001 16.2311 7.56002V11.2301C16.2211 13.5502 14.331 15.4403 12.001 15.4403Z" fill="#B7B6B7"/>
<path d="M15.6713 17.1601H8.33107C8.02106 17.1601 7.77106 16.9101 7.77106 16.6001C7.77106 16.29 8.02106 16.04 8.33107 16.04H15.6613C15.9713 16.04 16.2213 16.29 16.2213 16.6001C16.2213 16.9101 15.9713 17.1601 15.6713 17.1601Z" fill="#B7B6B7"/>
</svg>

</template>

<script>
export default {
  name: 'StructureDisabled',
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