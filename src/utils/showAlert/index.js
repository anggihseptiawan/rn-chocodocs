import {showMessage} from 'react-native-flash-message';

export const showAlert = (message, type) => {
  showMessage({
    message: message,
    type: type,
  });
};
