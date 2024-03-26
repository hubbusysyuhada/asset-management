<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M21.082 9.40789L21.082 14.2609C21.082 16.3464 18.8416 17.6647 17.0185 16.6519L12.6508 14.2254C10.775 13.1832 10.775 10.4855 12.6508 9.44339L17.0185 7.0169C18.8416 6.00408 21.082 7.32234 21.082 9.40789ZM19.082 9.40789L19.082 14.2609C19.082 14.8214 18.4798 15.1758 17.9898 14.9035L13.6221 12.4771C13.1179 12.1969 13.1179 11.4718 13.6221 11.1917L17.9898 8.76521C18.4798 8.49298 19.082 8.84732 19.082 9.40789Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M12.8379 9.40789L12.8379 14.2609C12.8379 16.3464 10.5975 17.6647 8.77437 16.6519L4.40669 14.2254C2.53087 13.1832 2.53086 10.4855 4.40669 9.44339L8.77437 7.0169C10.5975 6.00408 12.8379 7.32234 12.8379 9.40789ZM10.8379 9.40789L10.8379 14.2609C10.8379 14.8214 10.2357 15.1758 9.74566 14.9035L5.37797 12.4771C4.87377 12.1969 4.87377 11.4718 5.37797 11.1917L9.74566 8.76521C10.2357 8.49298 10.8379 8.84732 10.8379 9.40789Z" />
</svg>

</template>

<script>
export default {
  name: 'Rewind',
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