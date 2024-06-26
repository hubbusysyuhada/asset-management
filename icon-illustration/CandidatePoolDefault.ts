class CandidatePoolDefault extends HTMLElement {
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
<path d="M113.938 60.6207C113.102 42.6163 97.8007 28.7089 79.7963 29.5728C62.9903 30.3811 49.5567 43.8147 48.7484 60.6207C48.7205 61.0945 48.6927 61.5962 48.6927 62.07C48.6648 68.5638 50.56 74.9462 54.211 80.3531L33.336 101.228C30.8276 103.681 30.7997 107.722 33.2802 110.203C35.7607 112.683 39.7741 112.739 42.2546 110.258C42.2824 110.23 42.2824 110.23 42.3103 110.203L63.1854 89.3553C78.1798 99.3887 98.4696 95.3475 108.503 80.3531C110.538 77.3152 112.043 73.9707 112.962 70.4312C113.687 67.6162 114.049 64.7456 113.994 61.847C113.994 61.429 113.966 61.0388 113.938 60.6207Z" fill="#D1D1D2"/>
<path d="M99.1653 80.0471C98.6357 80.5766 98.1062 81.0783 97.5209 81.5242C88.9925 88.687 76.7573 89.4116 67.4485 83.2801C66.6403 82.7505 65.8599 82.1653 65.1074 81.5242C64.55 81.0783 64.0204 80.5766 63.4909 80.0471C62.2925 78.8487 61.1776 77.5109 60.23 76.0895C52.5656 64.4395 55.7986 48.8041 67.4207 41.1397C79.0427 33.4753 94.706 36.7083 102.37 48.3303C108.976 58.3359 107.638 71.5744 99.1653 80.0471Z" fill="#E8E8E8"/>
<path d="M26.2352 35.0005H30.6666C37.4113 35.0005 42.9018 40.491 42.9018 47.2357V53.7295H14V47.2357C14 40.4631 19.4905 35.0005 26.2352 35.0005Z" fill="#989899"/>
<path d="M37.9349 24.4481C37.9349 25.5908 37.7398 26.7335 37.3218 27.8205C35.4823 32.7257 30.0197 35.2062 25.1145 33.3667C20.2092 31.5273 17.7287 26.0646 19.5682 21.1594C20.9617 17.4526 24.5013 15 28.4589 15C33.6707 15 37.9349 19.2363 37.9349 24.4481Z" fill="#D1D1D2"/>
<path d="M97.5628 81.5218C89.0344 88.6846 76.7992 89.4092 67.4904 83.2776C66.6822 82.7481 65.9018 82.1628 65.1493 81.5218C66.3756 72.5753 74.6532 66.3044 83.5996 67.5586C90.846 68.562 96.5595 74.2476 97.5628 81.5218Z" fill="#989899"/>
<path d="M91.3912 53.6873C91.3912 54.9972 91.1682 56.2793 90.6944 57.5056C88.6041 63.024 82.4169 65.811 76.8985 63.6929C71.3801 61.6026 68.593 55.4153 70.7112 49.8969C72.8015 44.3785 78.9888 41.5915 84.5072 43.7096C88.632 45.2704 91.3912 49.2559 91.3912 53.6873Z" fill="#D1D1D2"/>
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
    this.props.forEach(key => this[key as keyof typeof CandidatePoolDefault] = this.getAttribute(key));
  }
}
export default CandidatePoolDefault