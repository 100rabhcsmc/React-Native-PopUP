import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#ff6666',
    padding: 10,
    marginHorizontal: 70,
  },
  btnText: {fontSize: 20, fontWeight: '700', color: 'white'},
  modelContainer: {flex: 1},
  modelSubContainer: {
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#ffe6e6',
    marginTop: 120,
    marginHorizontal: 100,
  },
  modelBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {marginStart: 20},
  icon: {marginEnd: 20},
});

export default styles;
