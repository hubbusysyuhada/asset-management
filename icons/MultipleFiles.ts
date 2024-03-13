class MultipleFiles extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M17.0442 19.3949H10.5543C8.37878 19.3949 6.60547 17.6216 6.60547 15.4461V5.94881C6.60547 3.77331 8.37878 2 10.5543 2H15.5908C16.2216 2 16.8157 2.2468 17.2636 2.6947L20.2892 5.72029C20.7371 6.16819 20.9839 6.76234 20.9839 7.39305V15.4369C20.993 17.6216 19.2197 19.3949 17.0442 19.3949ZM10.5543 3.58135C9.24715 3.58135 8.18682 4.64168 8.18682 5.94881V15.4369C8.18682 16.7441 9.24715 17.8044 10.5543 17.8044H17.0351C18.3422 17.8044 19.4025 16.7441 19.4025 15.4369V7.39305C19.4025 7.18282 19.3203 6.98172 19.174 6.83547L16.1576 3.80987C16.0113 3.66362 15.8102 3.58135 15.6 3.58135H10.5543Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M15.6543 2.78613V6.14994C15.6543 7.02745 16.3581 7.73129 17.2356 7.73129H20.3984L15.6543 2.78613Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14.4296 22.0005H7.94881C5.77331 22.0005 4 20.2272 4 18.0425V8.56356C4 6.38805 5.77331 4.61475 7.94881 4.61475V6.1961C6.64168 6.1961 5.58135 7.25643 5.58135 8.56356V18.0517C5.58135 19.3588 6.64168 20.4191 7.94881 20.4191H14.4296C15.7367 20.4191 16.7971 19.3588 16.7971 18.0517H18.3784C18.3876 20.2272 16.6143 22.0005 14.4296 22.0005Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof MultipleFiles] = this.getAttribute(key));
  }
}
export default MultipleFiles