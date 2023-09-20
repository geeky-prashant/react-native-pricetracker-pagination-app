import { View } from 'react-native'
import CryptoCard from './CryptoCard'
import { listStyles } from '../styles/styles'

const CryptoList = ({ coinsData }) => {
  return (
    <View style={listStyles.listContainer}>
      {
        coinsData.map((coin, index) => {
          return (
            <CryptoCard
              key={index}
              image={coin.image}
              name={coin.name}
              price={coin.current_price}
            />
          )
        })
      }
    </View>
  )
}

export default CryptoList