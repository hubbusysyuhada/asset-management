class AccountInfoActive extends HTMLElement {
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
<path d="M68.5703 98.3148C68.5703 87.5475 74.9907 78.4406 83.9696 74.7173C85.3696 74.1135 85.804 72.2016 84.742 71.0444C77.7423 63.4469 67.8945 58.667 56.9364 58.667H49.5988C31.0616 58.667 16.0002 74.2142 16.0002 93.4846V107.019C16.0002 109.736 18.1243 112 20.8276 112H68.7151C70.3082 112 71.4185 110.29 70.7426 108.78C69.3427 105.56 68.5703 102.038 68.5703 98.3148Z" fill="#3D00C3"/>
<path d="M80.0002 31.894C80.0002 34.4778 79.5252 37.0616 78.6542 39.4864C74.537 50.5372 62.1852 56.1023 51.1795 51.9682C40.1342 47.7943 34.5522 35.5511 38.709 24.5003C41.797 16.1924 49.7939 10.667 58.7014 10.667C70.4197 10.667 80.0002 20.2072 80.0002 31.894Z" fill="#7D5BCA"/>
<path d="M111.163 95.7C111.163 105.558 103.177 113.488 93.3197 113.488C83.4621 113.488 75.4768 105.503 75.4768 95.7C75.4768 85.8974 83.4621 77.9121 93.3197 77.9121C103.177 77.9121 111.163 85.8974 111.163 95.7Z" fill="#FFC401"/>
<path d="M93.2962 90.2998C92.0296 90.2998 91.0383 91.3461 91.0383 92.5577V106.436C91.0383 107.702 92.0847 108.693 93.2962 108.693C94.5078 108.693 95.5541 107.647 95.5541 106.436V92.5577C95.5541 91.3461 94.5629 90.2998 93.2962 90.2998Z" fill="#3D00C3"/>
<path d="M93.3035 88.2637C94.8547 88.2637 96.1122 87.0062 96.1122 85.4551C96.1122 83.9039 94.8547 82.6465 93.3035 82.6465C91.7524 82.6465 90.4949 83.9039 90.4949 85.4551C90.4949 87.0062 91.7524 88.2637 93.3035 88.2637Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof AccountInfoActive] = this.getAttribute(key));
  }
}
export default AccountInfoActive