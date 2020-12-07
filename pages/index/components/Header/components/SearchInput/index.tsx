import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

const SearchInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

export default SearchInput;
