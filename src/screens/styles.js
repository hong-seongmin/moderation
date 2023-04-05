// styles.js
import { StyleSheet } from 'react-native';

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181677',
  },
  sectionHeader: {
    backgroundColor: '#1B5410',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFFFFF',
    fontSize: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#181677',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5410',
    marginBottom: 15,
  },
  contentText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  qrCodeContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1B5410',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#88E83C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default localStyles;
