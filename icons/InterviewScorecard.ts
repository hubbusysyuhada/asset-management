class InterviewScorecard extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M6.83481 6.02329C5.85294 6.02329 5.05161 6.82462 5.05161 7.80649V18.1465C5.05161 19.1308 5.84535 19.9297 6.83481 19.9297H17.1648C18.158 19.9297 18.9543 19.1285 18.948 18.1432L18.948 18.1365H18.948V7.80649C18.948 6.82221 18.1543 6.02329 17.1648 6.02329H6.83481ZM2.95801 7.80649C2.95801 5.66836 4.69668 3.92969 6.83481 3.92969H17.1648C19.3153 3.92969 21.0416 5.67077 21.0416 7.80649V18.1334C21.0534 20.2863 19.3105 22.0233 17.1648 22.0233H6.83481C4.68427 22.0233 2.95801 20.2822 2.95801 18.1465V7.80649Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.29778 12.6796C7.6883 12.2891 8.32147 12.2891 8.71199 12.6796L11.362 15.3296C11.7525 15.7201 11.7525 16.3533 11.362 16.7438C10.9715 17.1344 10.3383 17.1344 9.94778 16.7438L7.29778 14.0938C6.90725 13.7033 6.90725 13.0701 7.29778 12.6796Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16.7137 10.0008C17.1035 10.392 17.1023 11.0252 16.7111 11.415L11.3611 16.745C10.9698 17.1348 10.3366 17.1336 9.94684 16.7423C9.55705 16.3511 9.55824 15.7179 9.94949 15.3281L15.2995 9.99811C15.6907 9.60832 16.3239 9.60951 16.7137 10.0008Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M16.0049 3.97656H8.00488C8.00488 2.87656 8.90488 1.97656 10.0049 1.97656H14.0049C15.1049 1.97656 16.0049 2.87656 16.0049 3.97656Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof InterviewScorecard] = this.getAttribute(key));
  }
}
export default InterviewScorecard