import { Alert } from 'react-native';

const AlertComponent = (
  title = 'Atenção',
  message = 'Algo deu errado',
  buttons = [{ text: 'OK', onPress: () => {} }],
) => {
  return Alert.alert(title, message, buttons, { cancelable: true });
};

export default AlertComponent;
