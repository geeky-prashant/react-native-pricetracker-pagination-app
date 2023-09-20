import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import CryptoList from "./components/CryptoList";
import { appStyles } from "./styles/styles";
import Pagination from "./components/Pagination";

export default function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=24&page=1&sparkline=false');
      setCoinsData(response.data)
    };

    loadData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex)

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={appStyles.scrollContainer}>
      <StatusBar style="light" />
      <SafeAreaView style={appStyles.container}>
        <Text style={appStyles.headerText}>Crypto Gallery</Text>

        {/* CryptoList  */}
        <CryptoList coinsData={currentPosts} />

        {/* Pagination  */}
        <Pagination
          totalPosts={coinsData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
