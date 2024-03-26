class OnGoingTest extends HTMLElement {
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
<rect width="50" height="50" rx="10" fill="#F9F5FE"/>
<path d="M40.8542 39H22.6307C21.4431 39 20.475 38.0487 20.475 36.8816V12.1184C20.475 10.9513 21.4431 10 22.6307 10H40.8442C42.0319 10 42.9999 10.9513 42.9999 12.1184V36.8914C43.0099 38.0585 42.0418 39 40.8542 39Z" fill="#C8AFF1"/>
<path d="M38.805 39H20.5815C19.3938 39 18.4258 38.0487 18.4258 36.8816V12.1184C18.4258 10.9513 19.3938 10 20.5815 10H38.795C39.9826 10 40.9507 10.9513 40.9507 12.1184V36.8914C40.9607 38.0585 39.9926 39 38.805 39Z" fill="#DBC8F9"/>
<path d="M37.6594 19.9647H23.2504C22.9304 19.9647 22.6805 19.6038 22.6805 19.1735C22.6805 18.7432 22.9404 18.3823 23.2504 18.3823H37.6594C37.9794 18.3823 38.2294 18.7432 38.2294 19.1735C38.2294 19.6038 37.9694 19.9647 37.6594 19.9647Z" fill="#3D00C3"/>
<path d="M37.6597 25.2108H23.2507C22.9307 25.2108 22.6807 24.8499 22.6807 24.4196C22.6807 23.9893 22.9407 23.6284 23.2507 23.6284H37.6597C37.9797 23.6284 38.2296 23.9893 38.2296 24.4196C38.2296 24.8499 37.9697 25.2108 37.6597 25.2108Z" fill="#3D00C3"/>
<path d="M37.6597 31.1536H23.2507C22.9307 31.1536 22.6807 30.7928 22.6807 30.3625C22.6807 29.9322 22.9407 29.5713 23.2507 29.5713H37.6597C37.9797 29.5713 38.2296 29.9322 38.2296 30.3625C38.2296 30.7928 37.9697 31.1536 37.6597 31.1536Z" fill="#3D00C3"/>
<path d="M8.29518 14.1744L21.922 27.8762L26.9544 29.7302C27.2051 29.8176 27.4463 29.5884 27.3563 29.3423L25.5843 24.3498L11.9574 10.6481C11.5719 10.2531 10.9366 10.2544 10.5346 10.6335L8.31046 12.767C7.90851 13.1549 7.90967 13.7794 8.29518 14.1744Z" fill="#3D00C3"/>
<path d="M22.1037 27.9458L27.1092 29.7911C27.2972 29.8611 27.4848 29.6848 27.4129 29.4914L25.6498 24.5341C25.6228 24.455 25.5154 24.4288 25.4529 24.4905L22.0496 27.7524C21.996 27.8053 22.0141 27.9108 22.1037 27.9458Z" fill="#FFC401"/>
<path d="M8.29339 14.1775L10.9291 16.8284L14.6003 13.302L11.9557 10.6512C11.5702 10.265 10.9348 10.2575 10.5328 10.6366L8.30867 12.7701C7.91567 13.158 7.90788 13.7825 8.29339 14.1775Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof OnGoingTest] = this.getAttribute(key));
  }
}
export default OnGoingTest