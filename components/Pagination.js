import { TouchableOpacity, View, Text } from 'react-native'
import { paginationStyles } from '../styles/styles';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <View style={paginationStyles.paginationContainer}>
      {
        pages.map((page, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setCurrentPage(page)} style={page == currentPage ? paginationStyles.active : paginationStyles.inactive}>
              <Text style={page == currentPage ? paginationStyles.activeNum : paginationStyles.inactiveNum}>
                {page}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default Pagination