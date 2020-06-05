import React, { FC } from 'react';
import { View, StatusBar } from 'react-native';

import Switcher from './components/Switcher';

const App: FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Switcher />
      </View>
    </>
  );
};

export default App;
