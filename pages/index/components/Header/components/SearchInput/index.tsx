import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

const SearchInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { outline: 'none' }]}
        placeholder="Qual livro você procura?"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.button}>
        <Feather name="search" size={24} color="#40BFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
