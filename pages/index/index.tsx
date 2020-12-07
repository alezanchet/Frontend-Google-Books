import React from 'react';
import { View, FlatList, Text } from 'react-native';

import Header from './components/Header';

import { styles } from './styles';

const index: React.FC = () => {
  const data = [
    {
      name: 'a',
    },
    {
      name: 'b',
    },
    {
      name: 'c',
    },
    {
      name: 'd',
    },
    {
      name: 'e',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {data.map((book) => (
          <View
            style={{
              height: 200,
              width: '40%',
              maxWidth: 260,
              backgroundColor: 'black',
              marginTop: 10,
            }}
          >
            <Text style={{ color: 'white' }}>{book.name}</Text>
          </View>
        ))}
      </View>
      <Header />
    </View>
  );
};

export default index;
