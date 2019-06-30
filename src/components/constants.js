import reactLogo from '../img/react.png';
import reduxLogo from '../img/redux.png';
import html5Logo from '../img/html5.png';
import css3Logo from '../img/css3.png';
import javascriptLogo from '../img/js.png';
import typescriptLogo from '../img/ts.png';
import flutterLogo from '../img/flutter.png';

export const DATE = {
  201609: 0,
  201610: 1,
  201611: 2,
  201612: 3,
  201701: 4,
  201702: 5,
  201703: 6,
  201704: 7,
  201705: 8,
  201706: 9,
  201707: 10,
  201708: 11,
  201709: 12,
  201710: 13,
  201711: 14,
  201712: 15,
  201801: 16,
  201802: 17,
  201803: 18,
  201804: 19,
  201805: 20,
  201806: 21,
  201807: 22,
  201808: 23,
  201809: 24,
  201810: 25,
  201811: 26,
  201812: 27,
  201901: 28,
  201902: 29,
  201903: 30,
  201904: 31,
  201905: 32,
  201906: 33,
  201907: 34,
  201908: 35,
  201909: 36,
  201910: 37,
  201911: 38,
  201912: 39
};

export const DATE_FROM_INDEX = Object.keys(DATE);

export const YEAR_WIDTH = () => {
  let map = {};
  let result = {};
  DATE_FROM_INDEX.forEach(date => {
    let year = date.substring(0, 4);
    if (map[year]) {
      map[year] = map[year] + 1;
    } else {
      map[year] = 1;
    }
  });
  let min = '';
  let sum = 0;
  for (let key in map) {
    result[key] = Math.floor((map[key] / DATE_FROM_INDEX.length) * 100);
    min = min ? (result[min] > result[key] ? key : min) : key;
    sum += result[key];
  }
  if (sum !== 100) {
    result[min] += 100 - sum;
  }
  return result;
};

export const MONTH = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const logos = {
  reactLogo: '../img/react.png',
  reduxLogo: '../img/redux.png',
  html5Logo: '../img/html5.png',
  css3Logo: '../img/css3.png',
  javascriptLogo: '../img/js.png',
  typescriptLogo: '../img/ts.png',
  flutterLogo: '../img/flutter.png'
};

export const reactProgress = {
  [DATE[201811]]: 0,
  [DATE[201812]]: 40,
  [DATE[201901]]: 75,
  [DATE[201902]]: 85,
  [DATE[201903]]: 75,
  [DATE[201904]]: 75,
  [DATE[201905]]: 90,
  [DATE[201906]]: 92,
  [DATE[201907]]: 94,
  [DATE[201908]]: 96,
  [DATE[201909]]: 97,
  [DATE[201910]]: 98,
  [DATE[201911]]: 99,
  [DATE[201912]]: 100
};

export const reduxProgress = {
  [DATE[201812]]: 0,
  [DATE[201901]]: 30,
  [DATE[201902]]: 70,
  [DATE[201903]]: 60,
  [DATE[201904]]: 61,
  [DATE[201905]]: 62,
  [DATE[201906]]: 75,
  [DATE[201907]]: 80,
  [DATE[201908]]: 85,
  [DATE[201909]]: 90,
  [DATE[201910]]: 93,
  [DATE[201911]]: 97,
  [DATE[201912]]: 100
};

export const javascriptProgress = {
  [DATE[201703]]: 0,
  [DATE[201704]]: 1,
  [DATE[201705]]: 2,
  [DATE[201706]]: 5,
  [DATE[201707]]: 0,
  [DATE[201804]]: 0,
  [DATE[201805]]: 20,
  [DATE[201806]]: 25,
  [DATE[201807]]: 30,
  [DATE[201808]]: 0,
  [DATE[201809]]: 0,
  [DATE[201810]]: 10,
  [DATE[201811]]: 35,
  [DATE[201812]]: 70,
  [DATE[201901]]: 80,
  [DATE[201902]]: 85,
  [DATE[201903]]: 87,
  [DATE[201904]]: 90,
  [DATE[201905]]: 91,
  [DATE[201906]]: 92,
  [DATE[201907]]: 94,
  [DATE[201908]]: 96,
  [DATE[201909]]: 97,
  [DATE[201910]]: 98,
  [DATE[201911]]: 99,
  [DATE[201912]]: 100
};

export const html5Progress = {
  [DATE[201609]]: 0,
  [DATE[201610]]: 75,
  [DATE[201611]]: 77,
  [DATE[201612]]: 79,
  [DATE[201701]]: 81,
  [DATE[201702]]: 82,
  [DATE[201703]]: 83,
  [DATE[201704]]: 84,
  [DATE[201705]]: 85,
  [DATE[201706]]: 86,
  [DATE[201707]]: 85,
  [DATE[201708]]: 86,
  [DATE[201709]]: 85,
  [DATE[201710]]: 86,
  [DATE[201711]]: 85,
  [DATE[201712]]: 86,
  [DATE[201801]]: 85,
  [DATE[201802]]: 86,
  [DATE[201803]]: 85,
  [DATE[201804]]: 86,
  [DATE[201805]]: 85,
  [DATE[201806]]: 86,
  [DATE[201807]]: 85,
  [DATE[201808]]: 86,
  [DATE[201809]]: 85,
  [DATE[201810]]: 86,
  [DATE[201811]]: 85,
  [DATE[201812]]: 86,
  [DATE[201901]]: 85,
  [DATE[201902]]: 86,
  [DATE[201903]]: 85,
  [DATE[201904]]: 86,
  [DATE[201905]]: 85,
  [DATE[201906]]: 86,
  [DATE[201907]]: 85,
  [DATE[201908]]: 86,
  [DATE[201909]]: 85,
  [DATE[201910]]: 86,
  [DATE[201911]]: 85,
  [DATE[201912]]: 86
};

export const css3Progress = {
  [DATE[201609]]: 0,
  [DATE[201610]]: 75,
  [DATE[201611]]: 77,
  [DATE[201612]]: 79,
  [DATE[201701]]: 81,
  [DATE[201702]]: 82,
  [DATE[201703]]: 83,
  [DATE[201704]]: 84,
  [DATE[201705]]: 86,
  [DATE[201706]]: 85,
  [DATE[201707]]: 86,
  [DATE[201708]]: 85,
  [DATE[201709]]: 86,
  [DATE[201710]]: 85,
  [DATE[201711]]: 86,
  [DATE[201712]]: 85,
  [DATE[201801]]: 86,
  [DATE[201802]]: 85,
  [DATE[201803]]: 86,
  [DATE[201804]]: 85,
  [DATE[201805]]: 86,
  [DATE[201806]]: 85,
  [DATE[201807]]: 86,
  [DATE[201808]]: 85,
  [DATE[201809]]: 86,
  [DATE[201810]]: 85,
  [DATE[201811]]: 86,
  [DATE[201812]]: 85,
  [DATE[201901]]: 86,
  [DATE[201902]]: 85,
  [DATE[201903]]: 86,
  [DATE[201904]]: 85,
  [DATE[201905]]: 86,
  [DATE[201906]]: 85,
  [DATE[201907]]: 86,
  [DATE[201908]]: 91,
  [DATE[201909]]: 93,
  [DATE[201910]]: 95,
  [DATE[201911]]: 97,
  [DATE[201912]]: 100
};

export const typescriptProgress = {
  [DATE[201904]]: 0,
  [DATE[201905]]: 30,
  [DATE[201906]]: 40,
  [DATE[201907]]: 40,
  [DATE[201908]]: 70,
  [DATE[201909]]: 90,
  [DATE[201910]]: 93,
  [DATE[201911]]: 97,
  [DATE[201912]]: 100
};

export const flutterProgress = {
  [DATE[201905]]: 0,
  [DATE[201906]]: 1,
  [DATE[201907]]: 0,
  [DATE[201908]]: 1,
  [DATE[201909]]: 0,
  [DATE[201910]]: 1,
  [DATE[201911]]: 0,
  [DATE[201912]]: 1
};

export const skillData = [
  {
    name: 'React',
    logo: reactLogo,
    logoLong: true,
    progress: reactProgress,
    fullValue: 100
  },
  {
    name: 'Redux',
    logo: reduxLogo,
    logoLong: false,
    progress: reduxProgress,
    fullValue: 100
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo,
    logoLong: false,
    progress: javascriptProgress,
    fullValue: 100
  },
  {
    name: 'HTML5',
    logo: html5Logo,
    logoLong: false,
    progress: html5Progress,
    fullValue: 100
  },
  {
    name: 'CSS3',
    logo: css3Logo,
    logoLong: true,
    progress: css3Progress,
    fullValue: 100
  },
  {
    name: 'TypeScript',
    logo: typescriptLogo,
    logoLong: false,
    progress: typescriptProgress,
    fullValue: 100
  },
  {
    name: 'Flutter',
    logo: flutterLogo,
    logoLong: true,
    progress: flutterProgress,
    fullValue: 100
  }
];
