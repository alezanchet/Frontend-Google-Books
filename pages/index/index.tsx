import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';
import SearchInput from './components/SearchInput';

import { styles } from './styles';

const Index: React.FC = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function loadBooks(): Promise<void> {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
      );
      const json = await response.json();
      console.log(json.items);
      setBooks(json.items);
    }

    if (searchValue !== '') {
      loadBooks();
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {/* {books.map((book) => (
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
        ))} */}
      </View>
      <Header />
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Qual comida você procura?"
      />
    </View>
  );
};

export default Index;
