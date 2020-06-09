export default {
  siteRoot: 'http://192.168.0.4/immobee/public',

  currency: '€',
  areaAbbr: 'm²',

  primaryColor: '#4668D9',
  secondaryColor: '#E5097F',
  grayColor1: '#7F7F7F',
  grayColor2: '#BBB',
  softBlackColor: '#333',

  padding1: 15,

  formatNumberWithCommas: (num) => {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  },
};
