import { Text, View, Image } from 'react-native'
import { cardStyles } from '../styles/styles'

const CryptoCard = ({ image, name, price }) => {
  return (
    <View style={cardStyles.cardContainer}>
      <View>
        <Image source={{
          uri: image
        }} width={50} height={50} />
      </View>
      <View style={cardStyles.textMain}>
        <Text style={cardStyles.coinName}>{name}</Text>
        <Text style={cardStyles.coinPrice}>${price}</Text>
      </View>
    </View>
  )
}

export default CryptoCard