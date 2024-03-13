class Wifi extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M11.965 6.50746C8.77717 6.50746 5.87088 7.70344 3.6659 9.67307C3.25387 10.0411 2.62172 10.0052 2.25396 9.59284C1.8862 9.18047 1.92209 8.54782 2.33412 8.17977C4.89139 5.89545 8.26722 4.50586 11.965 4.50586C15.6992 4.50586 19.105 5.92296 21.6711 8.24748C22.0805 8.61839 22.112 9.25128 21.7414 9.66107C21.3708 10.0709 20.7384 10.1024 20.3289 9.73146C18.1162 7.72708 15.1841 6.50746 11.965 6.50746Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M11.9648 10.1705C9.63732 10.1705 7.52257 11.0726 5.94699 12.5484C5.54376 12.926 4.91094 12.9051 4.53355 12.5015C4.15617 12.098 4.17712 11.4646 4.58036 11.0869C6.51178 9.2779 9.10999 8.16895 11.9648 8.16895C14.8196 8.16895 17.4178 9.2779 19.3492 11.0869C19.7525 11.4646 19.7734 12.098 19.396 12.5015C19.0186 12.9051 18.3858 12.926 17.9826 12.5484C16.407 11.0726 14.2923 10.1705 11.9648 10.1705Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M11.964 13.8766C10.5678 13.8766 9.30414 14.4362 8.38145 15.3458C7.988 15.7337 7.35485 15.729 6.96728 15.3352C6.57971 14.9414 6.58447 14.3078 6.97792 13.9199C8.25957 12.6564 10.0216 11.875 11.964 11.875C13.9065 11.875 15.6685 12.6564 16.9502 13.9199C17.3436 14.3078 17.3484 14.9414 16.9608 15.3352C16.5732 15.729 15.9401 15.7337 15.5466 15.3458C14.6239 14.4362 13.3603 13.8766 11.964 13.8766Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M13.5289 17.9404C13.5289 17.0758 12.8285 16.3749 11.9646 16.3749C11.1007 16.3749 10.4004 17.0758 10.4004 17.9404C10.4004 18.805 11.1007 19.5059 11.9646 19.5059C12.8285 19.5059 13.5289 18.805 13.5289 17.9404Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof Wifi] = this.getAttribute(key));
  }
}
export default Wifi