class Timer extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10.9211 19.8946C14.4092 19.8946 17.2368 17.0669 17.2368 13.5788C17.2368 10.0907 14.4092 7.26298 10.9211 7.26298C7.43294 7.26298 4.60526 10.0907 4.60526 13.5788C4.60526 17.0669 7.43294 19.8946 10.9211 19.8946ZM10.9211 21.9998C15.5719 21.9998 19.3421 18.2296 19.3421 13.5788C19.3421 8.92795 15.5719 5.15771 10.9211 5.15771C6.27023 5.15771 2.5 8.92795 2.5 13.5788C2.5 18.2296 6.27023 21.9998 10.9211 21.9998Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10.9208 8.31592C11.5021 8.31592 11.9734 8.7872 11.9734 9.36855V13.5791C11.9734 14.1604 11.5021 14.6317 10.9208 14.6317C10.3394 14.6317 9.86816 14.1604 9.86816 13.5791V9.36855C9.86816 8.7872 10.3394 8.31592 10.9208 8.31592Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10.9208 2C11.5021 2 11.9734 2.47128 11.9734 3.05263L11.9734 6.21053C11.9734 6.79188 11.5021 7.26316 10.9208 7.26316C10.3394 7.26316 9.86816 6.79188 9.86816 6.21053L9.86816 3.05263C9.86816 2.47128 10.3394 2 10.9208 2Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.7627 3.05263C7.7627 2.47128 8.23397 2 8.81533 2H13.0259C13.6072 2 14.0785 2.47128 14.0785 3.05263C14.0785 3.63398 13.6072 4.10526 13.0259 4.10526H8.81533C8.23397 4.10526 7.7627 3.63398 7.7627 3.05263Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M17.5447 5.46649C17.9558 5.05541 18.6223 5.05541 19.0334 5.46649L20.522 6.95514C20.9331 7.36621 20.9331 8.0327 20.522 8.44378C20.111 8.85486 19.4445 8.85486 19.0334 8.44378L17.5447 6.95514C17.1337 6.54406 17.1337 5.87757 17.5447 5.46649Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Timer] = this.getAttribute(key));
  }
}
export default Timer