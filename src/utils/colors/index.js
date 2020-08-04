const mainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
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
  },
};
