import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [show, setShow] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const options = [
    {
      title: 'Github',
      icon: 'sau',
      action: () => alert('Hello'),
    },
    {
      title: 'Linkdin',
      icon: 'sau',
      action: () => alert('Hello'),
    },
    {
      title: 'Instagram',
      icon: 'sau',
      action: () => alert('Hello'),
    },
  ];

  function resizeBox(to) {
    to === 1 && setShow(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setShow(false));
  }

  return (
    <SafeAreaView style={{}}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}
        onPress={() => resizeBox(1)}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Modal transparent visible={show}>
        <SafeAreaView onTouchStart={() => setShow(false)} style={{flex: 1}}>
          <Animated.View
            style={{
              borderRadius: 8,
              borderColor: '#333',
              borderWidth: 1,
              backgroundColor: 'gray',

              // flex: 1,
              marginTop: 100,
              marginHorizontal: 100,
              transform: [{scale: scale}],
            }}>
            {options.map((option, i) => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: i === options.length - 1 ? 0 : 1,
                }}
                key={i}
                onPress={() => option.action}>
                <Text style={{marginStart: 20}}>{option.title}</Text>
                {/* <Icon name="rocket" size={30} color="#900" /> */}
                <Text style={{marginEnd: 20}}>*</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
