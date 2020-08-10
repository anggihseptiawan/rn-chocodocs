const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue: '#0066CB',
  semiBlack: 'rgba(0,0,0,.5)',
  red: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  disable: mainColors.grey3,
  active: mainColors.blue,
  overlay: mainColors.semiBlack,
  danger: mainColors.red,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    inActive: mainColors.dark2,
    active: mainColors.green1,
  },
  border: mainColors.dark2,
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: 'black',
    },
    disable: {
      background: mainColors.grey3,
      text: 'white',
    },
  },
  greenCard: mainColors.green2,
};
