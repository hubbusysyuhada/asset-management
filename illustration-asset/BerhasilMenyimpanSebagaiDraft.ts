class BerhasilMenyimpanSebagaiDraft extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['size', 'color']
  contentStyle = '';
  colorStyle = '';
  size = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="240" height="180" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2609_42220)">
<path d="M9.83924 57.3784L10.4092 55.1584C15.2092 36.4784 30.8592 21.4484 51.4392 16.6284C54.0892 16.0084 56.7792 15.5584 59.5092 15.2884C79.1392 13.3684 99.6892 21.0184 112.189 34.9084C119.539 43.0784 124.609 53.4784 134.739 58.6984C147.919 65.4884 164.339 60.9684 178.529 56.3284C192.719 51.6884 209.159 47.2084 222.309 54.0484C230.539 58.3284 235.639 66.3784 238.169 74.6184C244.859 96.4484 235.229 120.598 217.459 136.428C199.689 152.268 174.919 160.538 150.029 163.238C115.169 167.018 78.1092 160.068 50.1692 140.668C22.2292 121.268 4.88924 88.6984 9.83924 57.3784Z" fill="#CFD3FF"/>
<path opacity="0.58" d="M121.509 164.36C169.917 164.36 209.159 160.846 209.159 156.51C209.159 152.175 169.917 148.66 121.509 148.66C73.1016 148.66 33.8594 152.175 33.8594 156.51C33.8594 160.846 73.1016 164.36 121.509 164.36Z" fill="#8A85C9"/>
<path d="M222.119 103.559C225.207 103.559 227.709 101.056 227.709 97.9689C227.709 94.8816 225.207 92.3789 222.119 92.3789C219.032 92.3789 216.529 94.8816 216.529 97.9689C216.529 101.056 219.032 103.559 222.119 103.559Z" fill="#FFC401"/>
<path d="M55.0293 158.37V68.18C55.0293 64.06 58.3693 60.73 62.4793 60.73H69.5993C72.5093 60.73 75.1493 59.04 76.3693 56.4L77.8993 53.08C79.1193 50.44 81.7593 48.75 84.6693 48.75H118.479C121.119 48.75 123.559 50.14 124.899 52.41L126.559 55.22C127.899 57.49 130.339 58.88 132.979 58.88H176.079C180.199 58.88 183.529 62.22 183.529 66.33V158.36H55.0293V158.37Z" fill="#3D00C3"/>
<path d="M55.0293 156.4L68.2093 71.81C68.8193 69 71.2993 67 74.1593 67H184.809C189.179 67 192.119 71.47 190.399 75.49L166.509 154.29L55.0293 156.4Z" fill="#DAC9F1"/>
<path d="M55.0293 156.4L71.6893 78.56C72.2893 75.76 74.7693 73.75 77.6393 73.75H188.289C192.659 73.75 195.599 78.22 193.879 82.24L162.399 155.37L55.0293 156.4Z" fill="#F9F5FE"/>
<path d="M55.0293 158.372L81.8693 82.4519C82.9893 79.2919 85.9793 77.1719 89.3293 77.1719H203.399C207.079 77.1719 209.669 80.7819 208.489 84.2619L183.529 158.362H55.0293V158.372Z" fill="#6B33E7"/>
<path d="M48.8891 127.847L26.0091 135.797C24.4291 136.347 22.6991 135.507 22.1491 133.927L11.1491 102.267C10.5991 100.687 11.4391 98.9572 13.0191 98.4072L27.5291 93.3672L42.7791 101.037L50.7491 123.987C51.3091 125.567 50.4691 127.297 48.8891 127.847Z" fill="#FFF8E4"/>
<path d="M27.5293 93.3672L30.6293 102.277C31.1393 103.747 32.7493 104.527 34.2193 104.017L42.7893 101.037L27.5293 93.3672Z" fill="#FDEBB8"/>
<path d="M31.0195 103.017C31.0195 103.017 31.6595 105.217 34.3695 105.077C34.4695 105.067 34.5695 105.057 34.6695 105.047C35.8595 104.857 43.6795 103.607 43.6195 103.437C43.5595 103.257 42.7895 101.047 42.7895 101.047L34.2195 104.027C34.2195 104.017 32.0495 104.687 31.0195 103.017Z" fill="#FFF8E4"/>
<path d="M220.919 69.7902L200.379 64.7802C198.959 64.4302 198.089 63.0002 198.439 61.5802L205.379 33.1502C205.729 31.7302 207.159 30.8602 208.579 31.2102L221.609 34.3902L229.159 47.2502L224.129 67.8602C223.769 69.2602 222.339 70.1302 220.919 69.7902Z" fill="#F3EDFC"/>
<path d="M221.598 34.3789L219.648 42.3789C219.328 43.6989 220.138 45.0289 221.458 45.3489L229.148 47.2289L221.598 34.3789Z" fill="#E6D8F9"/>
<path d="M219.579 43.1094C219.579 43.1094 219.009 45.0294 221.059 46.1994C221.139 46.2394 221.219 46.2794 221.299 46.3194C222.259 46.7394 228.589 49.5394 228.619 49.3794C228.659 49.2194 229.139 47.2294 229.139 47.2294L221.449 45.3494C221.449 45.3594 219.539 44.8194 219.579 43.1094Z" fill="#E6D8F9"/>
<path d="M196.66 166.32C206.413 166.32 214.32 158.413 214.32 148.66C214.32 138.907 206.413 131 196.66 131C186.907 131 179 138.907 179 148.66C179 158.413 186.907 166.32 196.66 166.32Z" fill="#49C190"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M208.588 139.031C209.442 139.731 209.568 140.991 208.868 141.846L196.818 156.556C196.169 157.347 195.027 157.522 194.172 156.959L184.892 150.859C183.969 150.253 183.712 149.013 184.319 148.09C184.926 147.167 186.166 146.91 187.089 147.517L194.864 152.628L205.773 139.311C206.473 138.456 207.733 138.331 208.588 139.031Z" fill="white"/>
<path d="M51.2953 57.4112C45.7444 58.8285 43.8219 60.7665 42.4053 66.3058C42.174 67.2314 40.8296 67.2314 40.5839 66.3058C39.1673 60.7521 37.2303 58.8285 31.6939 57.4112C30.7687 57.1798 30.7687 55.8347 31.6939 55.5888C37.2447 54.1715 39.1673 52.2335 40.5839 46.6942C40.8152 45.7686 42.1595 45.7686 42.4053 46.6942C43.8219 52.2479 45.7589 54.1715 51.2953 55.5888C52.2349 55.8347 52.2349 57.1653 51.2953 57.4112Z" fill="#7D5BCA"/>
</g>
<defs>
<clipPath id="clip0_2609_42220">
<rect width="240" height="180" fill="white"/>
</clipPath>
</defs>
</svg>
`
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    this._setState();
  }

  connectedCallback() {
    this._setState();
  }
  
  disconnectedCallback() {
    this._setState();
  }

  _initElement() {
    this._setState()
    const size = this.size || 24
    let contentStyle = `object-fit: content; width: ${size}; height: ${size}`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof BerhasilMenyimpanSebagaiDraft] = this.getAttribute(key));
  }
}
export default BerhasilMenyimpanSebagaiDraft