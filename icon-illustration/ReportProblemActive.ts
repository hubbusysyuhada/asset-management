class ReportProblemActive extends HTMLElement {
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
<path d="M18.0895 117.993H81.1311C85.2395 117.993 88.5884 114.647 88.5884 110.543V23.4512C88.5884 19.3467 85.2395 16.001 81.1311 16.001H18.1241C14.0156 16.001 10.6668 19.3467 10.6668 23.4512V110.577C10.6323 114.682 13.9811 117.993 18.0895 117.993Z" fill="#DBC8F9"/>
<path d="M22.0539 47.1237H71.8997C73.0066 47.1237 73.8714 45.8544 73.8714 44.3411C73.8714 42.8278 72.972 41.5586 71.8997 41.5586H22.0539C20.947 41.5586 20.0822 42.8278 20.0822 44.3411C20.0822 45.8544 20.9816 47.1237 22.0539 47.1237Z" fill="#3D00C3"/>
<path d="M22.0539 65.5758H71.8997C73.0066 65.5758 73.8714 64.3066 73.8714 62.7933C73.8714 61.28 72.972 60.0107 71.8997 60.0107H22.0539C20.947 60.0107 20.0822 61.28 20.0822 62.7933C20.0822 64.3066 20.9816 65.5758 22.0539 65.5758Z" fill="#3D00C3"/>
<path d="M22.0542 86.4762H71.9C73.0069 86.4762 73.8716 85.207 73.8716 83.6937C73.8716 82.1804 72.9723 80.9111 71.9 80.9111H22.0542C20.9472 80.9111 20.0825 82.1804 20.0825 83.6937C20.0825 85.207 20.9818 86.4762 22.0542 86.4762Z" fill="#3D00C3"/>
<path d="M116.635 22.7114L76.1299 76.5941L59.7113 85.3127C58.8911 85.7298 57.9594 85.0385 58.1558 84.14L61.9611 65.9365L102.466 12.0539C103.609 10.5038 105.789 10.2241 107.341 11.3661L115.942 17.8102C117.497 18.9829 117.778 21.1613 116.635 22.7114Z" fill="#3D00C3"/>
<path d="M75.5391 76.9192L59.2086 85.5954C58.5954 85.9236 57.8716 85.3927 58.0304 84.6861L61.8208 66.6094C61.8774 66.3214 62.234 66.1821 62.4766 66.3693L75.6364 76.2206C75.8444 76.3811 75.8303 76.7571 75.5391 76.9192Z" fill="#FFC401"/>
<path d="M116.642 22.7131L108.807 33.1373L94.6077 22.4837L102.473 12.0555C103.619 10.5361 105.795 10.2257 107.347 11.3678L115.948 17.8118C117.473 18.9885 117.784 21.163 116.642 22.7131Z" fill="#FFC401"/>
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
    this.props.forEach(key => this[key as keyof typeof ReportProblemActive] = this.getAttribute(key));
  }
}
export default ReportProblemActive