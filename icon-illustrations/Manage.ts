class Manage extends HTMLElement {
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.9243 49.7068C46.5301 51.1682 47.6036 53.8836 47.6036 57.0049C47.6036 60.1263 46.5211 62.8507 44.9243 64.3031C43.941 64.8714 42.8314 65.2503 41.6497 65.3766C38.9704 64.9075 36.8774 61.3351 36.8774 56.9959C36.8774 52.6567 38.9613 49.0843 41.6497 48.6152C42.8314 48.7596 43.941 49.1385 44.9243 49.7068Z" fill="#DBC8F9"/>
<path d="M40.712 66.8556C35.2812 66.8556 30.8608 62.4352 30.8608 57.0045C30.8608 51.5737 35.2812 47.1533 40.712 47.1533C46.1428 47.1533 50.5631 51.5737 50.5631 57.0045C50.5631 62.4352 46.1428 66.8556 40.712 66.8556ZM40.712 50.7708C37.2749 50.7708 34.4693 53.5674 34.4693 57.0135C34.4693 60.4596 37.2659 63.2562 40.712 63.2562C44.1581 63.2562 46.9547 60.4596 46.9547 57.0135C46.9547 53.5674 44.1491 50.7708 40.712 50.7708Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.8157 83.6078C31.4381 75.8315 36.1382 69.6249 42.1012 68.6416C48.4251 69.4535 53.6483 73.7566 55.7773 79.5663C51.5013 83.1838 45.9803 85.3669 39.9451 85.3669C36.7155 85.3579 33.6393 84.7354 30.8157 83.6078Z" fill="#DBC8F9"/>
<path d="M39.945 86.7833C25.6373 86.7833 14 75.1459 14 60.8383C14 46.5397 25.6373 34.9023 39.945 34.9023C54.2526 34.9023 65.8899 46.5397 65.8899 60.8473C65.8809 75.1459 54.2436 86.7833 39.945 86.7833ZM39.945 38.5108C27.631 38.5108 17.6085 48.5244 17.6085 60.8383C17.6085 73.1522 27.631 83.1748 39.945 83.1748C52.2589 83.1748 62.2815 73.1522 62.2815 60.8383C62.2724 48.5244 52.2589 38.5108 39.945 38.5108Z" fill="#3D00C3"/>
<path d="M96.283 29.2188H109.616C111.249 29.2188 112.575 30.5449 112.575 32.1777V42.5521C112.575 44.1849 111.249 45.511 109.616 45.511H96.283C94.6501 45.511 93.324 44.1849 93.324 42.5521V32.1777C93.315 30.5449 94.6411 29.2188 96.283 29.2188Z" fill="#DBC8F9"/>
<path d="M96.283 56.9053H109.616C111.249 56.9053 112.575 58.2314 112.575 59.8642V70.2386C112.575 71.8714 111.249 73.1976 109.616 73.1976H96.283C94.6501 73.1976 93.324 71.8714 93.324 70.2386V59.8642C93.315 58.2314 94.6411 56.9053 96.283 56.9053Z" fill="#DBC8F9"/>
<path d="M96.283 84.1494H109.616C111.249 84.1494 112.575 85.4755 112.575 87.1084V97.4827C112.575 99.1156 111.249 100.442 109.616 100.442H96.283C94.6501 100.442 93.324 99.1156 93.324 97.4827V87.1084C93.315 85.4755 94.6411 84.1494 96.283 84.1494Z" fill="#DBC8F9"/>
<path d="M109.516 46.7023H91.1222C88.6504 46.7023 86.6387 44.6906 86.6387 42.2188V31.4835C86.6387 29.0117 88.6504 27 91.1222 27H109.516C111.988 27 114 29.0117 114 31.4835V42.2097C114 44.6906 111.988 46.7023 109.516 46.7023ZM91.1222 30.6085C90.6351 30.6085 90.2472 31.0054 90.2472 31.4835V42.2097C90.2472 42.6969 90.6441 43.0848 91.1222 43.0848H109.516C110.004 43.0848 110.391 42.6879 110.391 42.2097V31.4835C110.391 30.9964 109.995 30.6085 109.516 30.6085H91.1222Z" fill="#3D00C3"/>
<path d="M109.516 74.2892H91.1222C88.6504 74.2892 86.6387 72.2775 86.6387 69.8057V59.0704C86.6387 56.5986 88.6504 54.5869 91.1222 54.5869H109.516C111.988 54.5869 114 56.5986 114 59.0704V69.7967C114 72.2685 111.988 74.2892 109.516 74.2892ZM91.1222 58.1954C90.6351 58.1954 90.2472 58.5923 90.2472 59.0704V69.7967C90.2472 70.2838 90.6441 70.6717 91.1222 70.6717H109.516C110.004 70.6717 110.391 70.2748 110.391 69.7967V59.0704C110.391 58.5833 109.995 58.1954 109.516 58.1954H91.1222Z" fill="#3D00C3"/>
<path d="M109.516 101.867H91.1222C88.6504 101.867 86.6387 99.8554 86.6387 97.3836V86.6574C86.6387 84.1856 88.6504 82.1738 91.1222 82.1738H109.516C111.988 82.1738 114 84.1856 114 86.6574V97.3836C114 99.8554 111.988 101.867 109.516 101.867ZM91.1222 85.7823C90.6351 85.7823 90.2472 86.1792 90.2472 86.6574V97.3836C90.2472 97.8707 90.6441 98.2586 91.1222 98.2586H109.516C110.004 98.2586 110.391 97.8617 110.391 97.3836V86.6574C110.391 86.1702 109.995 85.7823 109.516 85.7823H91.1222Z" fill="#3D00C3"/>
<path d="M88.0565 94.587H78.0971C75.8328 94.587 73.9924 92.7467 73.9924 90.4824V38.3849C73.9924 36.1206 75.8328 34.2803 78.0971 34.2803H88.0565C89.0488 34.2803 89.8607 35.0922 89.8607 36.0845C89.8607 37.0768 89.0488 37.8888 88.0565 37.8888H78.0971C77.8264 37.8888 77.6009 38.1143 77.6009 38.3849V90.4914C77.6009 90.762 77.8264 90.9875 78.0971 90.9875H88.0565C89.0488 90.9875 89.8607 91.7994 89.8607 92.7918C89.8607 93.7841 89.0578 94.587 88.0565 94.587Z" fill="#3D00C3"/>
<path d="M88.0561 67.0089H64.5288C63.5365 67.0089 62.7246 66.197 62.7246 65.2046C62.7246 64.2123 63.5365 63.4004 64.5288 63.4004H88.0561C89.0485 63.4004 89.8604 64.2123 89.8604 65.2046C89.8604 66.197 89.0575 67.0089 88.0561 67.0089Z" fill="#3D00C3"/>
<path d="M58.3305 51.2669C64.0451 51.2669 68.6778 46.6342 68.6778 40.9196C68.6778 35.2049 64.0451 30.5723 58.3305 30.5723C52.6158 30.5723 47.9832 35.2049 47.9832 40.9196C47.9832 46.6342 52.6158 51.2669 58.3305 51.2669Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M59.6193 51.5649C64.9328 50.9334 69.0555 46.4048 69.0555 40.9109C69.0555 35.426 64.9328 30.8973 59.6193 30.2568C55.4425 30.8883 52.2039 35.417 52.2039 40.9109C52.2039 46.4048 55.4425 50.9334 59.6193 51.5649Z" fill="#FFD740"/>
<path d="M58.3317 53.0717C51.629 53.0717 46.1802 47.6229 46.1802 40.9201C46.1802 34.2174 51.638 28.7686 58.3317 28.7686C65.0255 28.7686 70.4833 34.2174 70.4833 40.9201C70.4833 47.6229 65.0345 53.0717 58.3317 53.0717ZM58.3317 32.377C53.6227 32.377 49.7887 36.211 49.7887 40.9201C49.7887 45.6292 53.6227 49.4632 58.3317 49.4632C63.0408 49.4632 66.8748 45.6292 66.8748 40.9201C66.8748 36.211 63.0408 32.377 58.3317 32.377Z" fill="#3D00C3"/>
<path d="M58.3301 47.3165C57.3378 47.3165 56.5259 46.5046 56.5259 45.5123V37.0865C56.5259 36.0941 57.3378 35.2822 58.3301 35.2822C59.3225 35.2822 60.1344 36.0941 60.1344 37.0865V45.5123C60.1344 46.5136 59.3315 47.3165 58.3301 47.3165Z" fill="#3D00C3"/>
<path d="M62.543 43.1036H54.1172C53.1249 43.1036 52.313 42.2917 52.313 41.2994C52.313 40.307 53.1249 39.4951 54.1172 39.4951H62.543C63.5354 39.4951 64.3473 40.307 64.3473 41.2994C64.3473 42.2917 63.5444 43.1036 62.543 43.1036Z" fill="#3D00C3"/>
<path d="M54.1265 80.2796C52.0697 74.6684 46.684 70.9066 40.703 70.9066C34.7219 70.9066 29.3363 74.6774 27.2794 80.2796L23.8875 79.0347C26.4585 72.0162 33.2154 67.2891 40.6939 67.2891C48.1725 67.2891 54.9294 72.0072 57.5004 79.0347L54.1265 80.2796Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof Manage] = this.getAttribute(key));
  }
}
export default Manage