import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import options from './data';

const PopUp = () => {
  const [show, setShow] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;

  const resizeBox = to => {
    to === 1 && setShow(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setShow(false));
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btn} onPress={() => resizeBox(1)}>
        <Text style={styles.btnText}>Click me</Text>
      </TouchableOpacity>
      <Modal transparent visible={show}>
        <SafeAreaView
          onTouchStart={() => resizeBox(0)}
          style={styles.modelContainer}>
          <Animated.View
            style={[styles.modelSubContainer, {transform: [{scale: scale}]}]}>
            {options.map((option, i) => (
              <TouchableOpacity
                style={[
                  styles.modelBtn,
                  {borderBottomWidth: i === options.length - 1 ? 0 : 1},
                ]}
                key={i}
                onPress={option.action}>
                <Text style={styles.title}>{option.title}</Text>
                <Icon style={styles.icon} name={option.icon} size={20} />
              </TouchableOpacity>
            ))}
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default PopUp;
