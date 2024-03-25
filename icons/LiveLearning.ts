class LiveLearning extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M6.37926 14V9.63636H7.30185V13.2393H9.17259V14H6.37926ZM10.7061 9.63636V14H9.78356V9.63636H10.7061ZM12.2536 9.63636L13.3082 12.9517H13.3487L14.4055 9.63636H15.4283L13.924 14H12.7351L11.2287 9.63636H12.2536ZM15.9535 14V9.63636H18.8938V10.397H16.8761V11.4368H18.7425V12.1974H16.8761V13.2393H18.9023V14H15.9535Z" fill="#414042"/>
<circle cx="6" cy="7" r="1" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof LiveLearning] = this.getAttribute(key));
  }
}
export default LiveLearning