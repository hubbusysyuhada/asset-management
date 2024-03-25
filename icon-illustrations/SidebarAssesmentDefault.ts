class SidebarAssesmentDefault extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M106.488 111.182H49.2228C45.4909 111.182 42.4489 108.143 42.4489 104.414V25.3027C42.4489 21.5743 45.4909 18.5352 49.2228 18.5352H106.456C110.188 18.5352 113.23 21.5743 113.23 25.3027V104.445C113.262 108.174 110.22 111.182 106.488 111.182Z" fill="#D1D1D2"/>
<path d="M102.888 50.3706H57.6094C56.6039 50.3706 55.8184 49.2176 55.8184 47.843C55.8184 46.4684 56.6353 45.3154 57.6094 45.3154H102.888C103.893 45.3154 104.679 46.4684 104.679 47.843C104.679 49.2176 103.862 50.3706 102.888 50.3706Z" fill="#989899"/>
<path d="M102.888 67.1323H57.6094C56.6039 67.1323 55.8184 65.9794 55.8184 64.6047C55.8184 63.2301 56.6353 62.0771 57.6094 62.0771H102.888C103.893 62.0771 104.679 63.2301 104.679 64.6047C104.679 65.9794 103.862 67.1323 102.888 67.1323Z" fill="#989899"/>
<path d="M102.888 86.1157H57.6094C56.6039 86.1157 55.8184 84.9628 55.8184 83.5881C55.8184 82.2135 56.6353 81.0605 57.6094 81.0605H102.888C103.893 81.0605 104.679 82.2135 104.679 83.5881C104.679 84.9628 103.862 86.1157 102.888 86.1157Z" fill="#989899"/>
<path d="M16.9726 28.1977L53.7664 77.143L68.6805 85.0628C69.4256 85.4417 70.2719 84.8137 70.0935 83.9975L66.6368 67.4621L29.8431 18.5167C28.8052 17.1087 26.8249 16.8546 25.4156 17.892L17.6024 23.7456C16.1895 24.8108 15.9347 26.7896 16.9726 28.1977Z" fill="#989899"/>
<path d="M54.3026 77.4377L69.1367 85.3188C69.6937 85.6169 70.3512 85.1347 70.207 84.4929L66.7639 68.0725C66.7125 67.8109 66.3885 67.6844 66.1682 67.8544L54.2142 76.8031C54.0253 76.9488 54.038 77.2904 54.3026 77.4377Z" fill="#E8E8E8"/>
<path d="M16.9658 28.1988L24.0823 37.6679L36.9806 27.9905L29.8363 18.5179C28.7948 17.1377 26.8182 16.8557 25.4088 17.8931L17.5956 23.7467C16.2106 24.8156 15.9279 26.7908 16.9658 28.1988Z" fill="#E8E8E8"/>
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
    this.props.forEach(key => this[key as keyof typeof SidebarAssesmentDefault] = this.getAttribute(key));
  }
}
export default SidebarAssesmentDefault