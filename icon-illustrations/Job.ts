class Job extends HTMLElement {
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
<path d="M80.4551 26.8769C80.4822 25.8919 80.0304 24.934 79.2261 24.3376C79.0634 24.2111 77.6176 23.1086 75.0421 22.0604C71.7347 20.7139 67.9031 20 64.0264 20C60.1225 20 56.3181 20.7139 52.9835 22.0604C50.4081 23.1177 48.9622 24.193 48.7996 24.3376C48.0224 24.934 47.5435 25.8919 47.5435 26.904V35.4708L50.7153 37.1968L53.8872 35.4708V28.6933C55.6403 27.7806 59.1104 26.416 64.0083 26.416C68.9243 26.416 72.4034 27.8077 74.1294 28.6933V35.4708L77.3013 37.1968L80.4731 35.4708L80.4551 26.8769Z" fill="#3D00C3"/>
<path d="M109.707 69.0068V99.0719C109.707 102.569 106.879 105.398 103.381 105.398H31.9463C28.4491 105.398 25.6206 102.569 25.6206 99.0719V73.4077C30.5185 76.0555 36.6183 79.7515 58.3515 80.7816V81.0889C58.3515 84.2517 60.8818 86.8362 64.0265 86.8362C67.1713 86.8362 69.7016 84.2698 69.7016 81.0889V80.7816C93.2602 79.7876 105.035 72.748 109.707 69.0068Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M110.49 67.3774C111.117 67.6783 111.515 68.3117 111.515 69.0066V99.0716C111.515 103.567 107.877 107.205 103.382 107.205H24.6181C20.1228 107.205 16.4851 103.567 16.4851 99.0716V69.0156C16.4851 68.3203 16.884 67.6867 17.5109 67.386C18.1378 67.0853 18.8816 67.1709 19.4238 67.6062C23.7731 71.0974 35.1888 78.0055 58.4275 78.9756C59.3955 79.016 60.1594 79.8125 60.1594 80.7814V81.0886C60.1594 83.2795 61.9065 85.0286 64.0271 85.0286C66.1514 85.0286 67.8948 83.2938 67.8948 81.0886V80.7814C67.8948 79.8129 68.6583 79.0165 69.626 78.9756C92.8265 77.9967 104.226 71.0807 108.578 67.5958C109.12 67.1615 109.864 67.0766 110.49 67.3774ZM71.3777 82.5096C70.7232 85.9926 67.7059 88.6433 64.0271 88.6433C60.3475 88.6433 57.3342 85.979 56.6777 82.5104C37.4991 81.4688 26.1492 76.4424 20.0998 72.5343V99.0716C20.0998 101.571 22.1191 103.59 24.6181 103.59H103.382C105.881 103.59 107.9 101.571 107.9 99.0716V72.5232C101.857 76.4265 90.5263 81.4601 71.3777 82.5096Z" fill="#3D00C3"/>
<path d="M112.193 47.9237V62.3373C112.193 64.1808 111.389 67.6237 109.97 68.7985C109.889 68.8708 109.798 68.9431 109.708 69.0063C105.036 72.7475 93.2612 79.7871 69.7026 80.7812V74.094C69.7026 72.9644 68.7989 72.0607 67.6874 72.0607H60.3858C59.2743 72.0607 58.3706 72.9644 58.3706 74.094V77.5641C58.3706 77.79 58.3796 77.9978 58.3887 78.2147C58.3615 77.9888 58.3525 77.7719 58.3525 77.546V80.7812C34.7577 79.7962 30.4743 76.1182 25.8475 68.7985C24.9348 67.3526 23.6245 64.1536 23.6245 62.3373V47.9237C23.6245 44.526 26.3446 41.7969 29.6791 41.7969H106.139C109.473 41.7969 112.193 44.544 112.193 47.9237Z" fill="#DBC8F9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8619 37.2787C19.5412 37.2787 17.6147 39.1829 17.6147 41.5983V62.3375C17.6147 63.0314 17.7823 64.1725 18.1215 65.2788C18.4852 66.4647 18.9177 67.1841 19.1918 67.4139C19.205 67.4251 19.2182 67.4364 19.2311 67.4479C19.271 67.4834 19.3233 67.5258 19.4215 67.6043L19.4238 67.6062C23.654 71.0018 34.5689 77.6297 56.5447 78.8827V77.5462C56.5447 77.4591 56.5509 77.3735 56.5628 77.2897V74.0942C56.5628 71.977 58.2651 70.2536 60.3853 70.2536H67.687C69.8071 70.2536 71.5095 71.977 71.5095 74.0942V78.8818C93.4469 77.6197 104.345 70.9851 108.578 67.5958C108.608 67.5715 108.639 67.5482 108.671 67.5259C108.699 67.5067 108.734 67.4786 108.769 67.4479C108.785 67.4339 108.801 67.4201 108.817 67.4066C109.094 67.1771 109.525 66.4677 109.885 65.2906C110.22 64.1927 110.385 63.0504 110.385 62.3375V41.5983C110.385 39.1975 108.455 37.2787 106.138 37.2787H21.8619ZM60.1594 78.5764V80.7814C60.1594 81.2738 59.9585 81.7449 59.6031 82.0857C59.2477 82.4266 58.7687 82.6077 58.2767 82.5871C34.3265 81.5873 22.1565 74.4347 17.1615 70.4254C17.1614 70.4253 17.1612 70.4252 17.1611 70.425L17.1518 70.4176C17.0735 70.355 16.9599 70.2641 16.8486 70.1663C15.7342 69.2193 15.061 67.6277 14.6657 66.3385C14.2436 64.962 14 63.4599 14 62.3375V41.5983C14 37.2181 17.5135 33.6641 21.8619 33.6641H106.138C110.49 33.6641 114 37.2396 114 41.5983V62.3375C114 63.4681 113.763 64.969 113.342 66.3472C112.947 67.6365 112.274 69.2221 111.147 70.1699C111.04 70.2639 110.922 70.3593 110.797 70.4493C105.78 74.4529 93.6314 81.5806 69.7783 82.5871C69.2862 82.6079 68.8069 82.4269 68.4514 82.086C68.0958 81.7451 67.8948 81.2739 67.8948 80.7814V74.0942C67.8948 73.9523 67.7898 73.8683 67.687 73.8683H60.3853C60.2825 73.8683 60.1775 73.9523 60.1775 74.0942V77.5643C60.1775 77.7436 60.1845 77.911 60.1936 78.1312L60.194 78.1397C60.2002 78.2894 60.188 78.4357 60.1594 78.5764Z" fill="#3D00C3"/>
<path d="M69.7021 74.0938V81.0882C69.7021 84.2691 67.1719 86.8355 64.0271 86.8355C60.8823 86.8355 58.3521 84.251 58.3521 81.0882V77.5458C58.3521 77.7717 58.3611 77.9886 58.3882 78.2145C58.3792 77.9976 58.3701 77.7898 58.3701 77.5639V74.0938C58.3701 72.9642 59.2738 72.0605 60.3853 72.0605H67.6869C68.7985 72.0605 69.7021 72.9642 69.7021 74.0938Z" fill="#FFD740"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.3855 73.8676C60.2827 73.8676 60.1777 73.9516 60.1777 74.0935V77.5636C60.1777 77.7429 60.1846 77.9103 60.1938 78.1304L60.1942 78.139C60.2004 78.2887 60.1882 78.435 60.1596 78.5758V81.0879C60.1596 83.2788 61.9067 85.0279 64.0273 85.0279C66.1516 85.0279 67.895 83.2931 67.895 81.0879V74.0935C67.895 73.9516 67.79 73.8676 67.6872 73.8676H60.3855ZM56.5449 77.5455V81.0879C56.5449 85.2228 59.8584 88.6426 64.0273 88.6426C68.1925 88.6426 71.5097 85.2446 71.5097 81.0879V74.0935C71.5097 71.9763 69.8073 70.2529 67.6872 70.2529H60.3855C58.2653 70.2529 56.563 71.9763 56.563 74.0935V77.289C56.5511 77.3728 56.5449 77.4584 56.5449 77.5455Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof Job] = this.getAttribute(key));
  }
}
export default Job