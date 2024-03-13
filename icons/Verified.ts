class Verified extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M21 10.4514C21 11.4358 19.0996 12.1067 18.8144 12.9906C18.5171 13.9107 19.646 15.5659 19.0916 16.3293C18.5291 17.1007 16.6006 16.5342 15.8292 17.0967C15.0659 17.6551 15.0096 19.664 14.0936 19.9653C13.2057 20.2546 11.9843 18.6676 11 18.6676C10.0157 18.6676 8.7943 20.2546 7.90639 19.9653C6.98634 19.668 6.93411 17.6551 6.17075 17.0967C5.39936 16.5342 3.47087 17.1007 2.9084 16.3293C2.34994 15.5659 3.48292 13.9066 3.18562 12.9906C2.89634 12.1027 1 11.4318 1 10.4514C1 9.46711 2.90036 8.79616 3.18562 7.91227C3.48292 6.99222 2.35396 5.33694 2.9084 4.57358C3.47087 3.80218 5.39936 4.36867 6.17075 3.8062C6.93411 3.24774 6.99036 1.2389 7.90639 0.937578C8.7943 0.648305 10.0157 2.23529 11 2.23529C11.9843 2.23529 13.2057 0.648305 14.0936 0.937578C15.0137 1.23489 15.0659 3.24774 15.8292 3.8062C16.6006 4.36867 18.5291 3.80218 19.0916 4.57358C19.6501 5.33694 18.5171 6.99624 18.8144 7.91227C19.0996 8.80017 21 9.47113 21 10.4514Z" fill="#35A583"/>
<path style="${this.colorStyle}"  d="M9.02787 14.6933C8.82699 14.6933 8.62209 14.617 8.46942 14.4603L5.50839 11.4993C5.19903 11.1899 5.19903 10.6877 5.50839 10.3783C5.81775 10.069 6.31996 10.069 6.62932 10.3783L9.03189 12.7809L15.3718 6.44101C15.6811 6.13164 16.1834 6.13164 16.4927 6.44101C16.8021 6.75037 16.8021 7.25258 16.4927 7.56194L9.58633 14.4603C9.43366 14.613 9.23277 14.6933 9.02787 14.6933Z" fill="white"/>
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
    this.props.forEach(key => this[key as keyof typeof Verified] = this.getAttribute(key));
  }
}
export default Verified