class SingleTestDefault extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.6204 12.6432L41.4905 35.9496L38.3601 42.4737L35.3018 35.921L35.446 12.6002C35.446 11.9421 35.9942 11.3984 36.6722 11.3984L40.423 11.4127C41.0866 11.4271 41.6348 11.9707 41.6204 12.6432Z" fill="#D1D1D2"/>
<path d="M41.4905 35.9485L38.3601 42.4726L38.1148 41.9576L35.3018 35.9199L41.4905 35.9485Z" fill="#989899"/>
<path d="M41.6207 12.6432L41.5918 17.1643L35.4175 17.1213L35.4463 12.6002C35.4463 11.9421 35.9945 11.3984 36.6725 11.3984L40.4233 11.4127C41.0869 11.4271 41.6351 11.9707 41.6207 12.6432Z" fill="#989899"/>
<path d="M18.7933 24.0093H22.3403C27.7389 24.0093 32.1336 28.404 32.1336 33.8026V39.0004H9V33.8026C9 28.3817 13.3947 24.0093 18.7933 24.0093Z" fill="#D1D1D2"/>
<rect x="9" y="35.9995" width="23" height="3" fill="#989899"/>
<path d="M28.1585 15.5625C28.1585 16.4771 28.0024 17.3918 27.6678 18.2618C26.1954 22.188 21.823 24.1735 17.8967 22.7011C13.9705 21.2288 11.9851 16.8564 13.4574 12.9301C14.5728 9.96313 17.406 8 20.5737 8C24.7454 8 28.1585 11.3909 28.1585 15.5625Z" fill="#D1D1D2"/>
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
    this.props.forEach(key => this[key as keyof typeof SingleTestDefault] = this.getAttribute(key));
  }
}
export default SingleTestDefault