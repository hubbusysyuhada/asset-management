class ArticleActive extends HTMLElement {
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
<path d="M74.6506 14H34C28.5016 14 24 18.5016 24 24V104C24 109.498 28.5016 114 34 114H94C99.4984 114 104 109.498 104 104V43.3494C104 40.5687 102.898 37.893 100.925 35.9307L82.0692 17.0745C80.107 15.1018 77.4313 14 74.6506 14Z" fill="#F9F5FE"/>
<path d="M74.6512 14V38.1028C74.6512 40.9989 77.0017 43.3494 79.8978 43.3494L104.001 43.3389C104.001 40.5582 102.899 37.8825 100.926 35.9202L82.0699 17.0745C80.1077 15.1018 77.4319 14 74.6512 14Z" fill="#3D00C3"/>
<path d="M94.7808 56.3467H33.2383C32.0945 56.3467 31.1606 55.4128 31.1606 54.2691C31.1606 53.1253 32.0945 52.1914 33.2383 52.1914H94.7808C95.9245 52.1914 96.8584 53.1253 96.8584 54.2691C96.8584 55.4128 95.9245 56.3467 94.7808 56.3467Z" fill="#7D5BCA"/>
<path d="M94.7808 69.417H33.2383C32.0945 69.417 31.1606 68.4831 31.1606 67.3394C31.1606 66.1956 32.0945 65.2617 33.2383 65.2617H94.7808C95.9245 65.2617 96.8584 66.1956 96.8584 67.3394C96.8584 68.4831 95.9245 69.417 94.7808 69.417Z" fill="#7D5BCA"/>
<path d="M94.7808 82.4868H33.2383C32.0945 82.4868 31.1606 81.5529 31.1606 80.4092C31.1606 79.2654 32.0945 78.3315 33.2383 78.3315H94.7808C95.9245 78.3315 96.8584 79.2654 96.8584 80.4092C96.8584 81.5529 95.9245 82.4868 94.7808 82.4868Z" fill="#7D5BCA"/>
<path d="M94.7808 95.5567H33.2383C32.0945 95.5567 31.1606 94.6228 31.1606 93.479C31.1606 92.3353 32.0945 91.4014 33.2383 91.4014H94.7808C95.9245 91.4014 96.8584 92.3353 96.8584 93.479C96.8584 94.6228 95.9245 95.5567 94.7808 95.5567Z" fill="#7D5BCA"/>
<path d="M63.8679 43.3579H33.2383C32.0945 43.3579 31.1606 42.424 31.1606 41.2803C31.1606 40.1365 32.0945 39.2026 33.2383 39.2026H63.8784C65.0221 39.2026 65.956 40.1365 65.956 41.2803C65.9455 42.4345 65.0221 43.3579 63.8679 43.3579Z" fill="#7D5BCA"/>
<path d="M63.8676 30.377H33.238C32.0943 30.377 31.1604 29.4431 31.1604 28.2993C31.1604 27.1556 32.0943 26.2217 33.238 26.2217H63.8781C65.0219 26.2217 65.9558 27.1556 65.9558 28.2993C65.9453 29.4431 65.0219 30.377 63.8676 30.377Z" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof ArticleActive] = this.getAttribute(key));
  }
}
export default ArticleActive