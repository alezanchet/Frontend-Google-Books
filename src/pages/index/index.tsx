import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import Hoverable from '../../Hoverable';

import Footer from '../components/footer';

import Header from './components/Header';
import SearchInput from './components/SearchInput';

import { styles } from './styles';

const Index: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState('');
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function loadBooks(): Promise<void> {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`,
      );
      const json = await response.json();
      setBooks(json.items);
    }

    if (searchValue !== '') {
      loadBooks();
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {books !== undefined &&
          books.map((book) => (
            <Hoverable
              onHoverIn={() => {
                setHoveredBook(book.id);
              }}
              onHoverOut={() => {
                setHoveredBook('');
              }}
            >
              <View
                key={book.id}
                style={[
                  styles.item,
                  { borderColor: hoveredBook === book.id ? '#40BFFF' : '#fff' },
                ]}
              >
                <TouchableOpacity>
                  {book.volumeInfo.imageLinks !== undefined && (
                    <Image
                      style={{
                        height: 150,
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                      source={{
                        uri: book.volumeInfo.imageLinks.smallThumbnail,
                      }}
                    />
                  )}
                  <Text style={styles.textItem}>{book.volumeInfo.title}</Text>
                </TouchableOpacity>
              </View>
            </Hoverable>
          ))}
      </View>
      <Header />
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Qual livro você procura?"
      />
      <Footer currentPage="List" />
    </View>
  );
};

export default Index;
