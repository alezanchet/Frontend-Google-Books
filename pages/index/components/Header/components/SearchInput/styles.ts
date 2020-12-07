import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    maxWidth: 550,
    position: 'absolute',
    bottom: -25,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 14,
  },

  button: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
