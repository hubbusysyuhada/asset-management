class Discuss extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3.96191 5.89354C3.96191 3.57838 5.84754 1.70996 8.15515 1.70996H17.817C20.1284 1.70996 22.0006 3.58215 22.0006 5.89354V11.9612C22.0006 13.4244 21.2428 14.7032 20.121 15.4511L19.0492 13.8432C19.6665 13.4317 20.0682 12.7395 20.0682 11.9612V5.89354C20.0682 4.64937 19.0612 3.64233 17.817 3.64233H8.15515C7.08875 3.64233 6.19397 4.38043 5.9562 5.36917C6.1669 5.41192 6.49179 5.45438 6.97625 5.46884L6.91859 7.40035C5.88998 7.36965 5.2265 7.22593 4.78543 7.01047C4.55613 6.89846 4.36467 6.75619 4.2211 6.57975C4.14939 6.49162 4.09334 6.39937 4.05194 6.306C4.03142 6.25971 4.01503 6.21435 4.00219 6.1705C3.99579 6.14862 3.9903 6.12726 3.98564 6.10648C3.98331 6.09609 3.98119 6.08587 3.97926 6.07581L3.97651 6.06086L3.97525 6.05349L3.97464 6.04983C3.97434 6.048 3.97405 6.04618 4.9281 5.89354L3.97405 6.04618L3.96191 5.97034V5.89354Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M2 10.0881C2 7.53515 4.06543 5.46973 6.61836 5.46973H15.7391C18.2921 5.46973 20.3575 7.53515 20.3575 10.0881V14.89C20.3575 17.4429 18.2921 19.5084 15.7391 19.5084H10.2382L7.36665 21.7703C6.69793 22.3078 5.65217 21.8626 5.65217 20.948V19.4074C3.56396 18.9639 2 17.1115 2 14.89V10.0881ZM6.61836 7.40209C5.13264 7.40209 3.93237 8.60237 3.93237 10.0881V14.89C3.93237 16.3757 5.13264 17.576 6.61836 17.576H7.58454V19.1388L9.56855 17.576H15.7391C17.2248 17.576 18.4251 16.3757 18.4251 14.89V10.0881C18.4251 8.60237 17.2248 7.40209 15.7391 7.40209H6.61836Z" />
<path style="${this.colorStyle}"  d="M8.62791 12.8232C8.62791 13.4319 8.13516 13.915 7.53612 13.915C6.93709 13.915 6.44434 13.4223 6.44434 12.8232C6.44434 12.2145 6.93709 11.7314 7.53612 11.7314C8.13516 11.7314 8.62791 12.2145 8.62791 12.8232Z" />
<path style="${this.colorStyle}"  d="M12.2705 12.8232C12.2705 13.4319 11.7777 13.915 11.1787 13.915C10.57 13.915 10.0869 13.4223 10.0869 12.8232C10.0869 12.2145 10.5797 11.7314 11.1787 11.7314C11.7874 11.7314 12.2705 12.2145 12.2705 12.8232Z" />
<path style="${this.colorStyle}"  d="M15.9228 12.8232C15.9228 13.4319 15.4301 13.915 14.831 13.915C14.232 13.915 13.7393 13.4223 13.7393 12.8232C13.7393 12.2145 14.232 11.7314 14.831 11.7314C15.4301 11.7314 15.9228 12.2145 15.9228 12.8232Z" />
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
    this.props.forEach(key => this[key as keyof typeof Discuss] = this.getAttribute(key));
  }
}
export default Discuss