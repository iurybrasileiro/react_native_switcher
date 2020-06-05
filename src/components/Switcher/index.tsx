import React, { FC, useState, useCallback } from 'react';
import { TouchableWithoutFeedback, Animated, Easing, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const Switcher: FC = () => {
  const [animation] = useState(new Animated.Value(0));
  const [on, setOn] = useState(false);

  const toggleSwitcher = useCallback(() => {
    Animated.timing(animation, {
      toValue: on ? 0 : 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setOn(!on);
    }, 200);
  }, [animation, on]);

  return (
    <TouchableWithoutFeedback onPress={toggleSwitcher}>
      <Container
        style={{
          backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#F26757', '#66BB6A'],
          }),
        }}>
        <Animated.View
          style={{
            marginLeft: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '70%'],
            }),
            opacity: animation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 0, 1],
            }),
          }}>
          {on ? (
            <Icon name="check" size={25} color="#fff" />
          ) : (
            <Icon name="x" size={25} color="#fff" />
          )}
        </Animated.View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Switcher;
