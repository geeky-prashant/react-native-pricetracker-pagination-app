import { StyleSheet } from 'react-native'

export const appStyles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#414141',
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 22,
    marginVertical: 20,
    color: "#fff",
    fontWeight: "600"
  },
})

export const listStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 20
  },
})

export const cardStyles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44%",
    borderWidth: 1,
    padding: 20,
    borderRadius: 12,
    borderColor: "#827e7e",
    backgroundColor: "#585252"
  },
  textMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  coinName: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff"
  },
  coinPrice: {
    fontWeight: "700",
    fontSize: 16,
    color: "#c3f6ca",
    paddingTop: 2
  }
})

export const paginationStyles = StyleSheet.create({
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 40

  },
  active: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    width: 50,
    height: 50,
    borderColor: "#827e7e",
    backgroundColor: "#e1cb20"
  },
  inactive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
    width: 50,
    height: 50,
    borderColor: "#827e7e",
    backgroundColor: "#585252",
  },
  activeNum: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000"
  },
  inactiveNum: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff"
  }
})