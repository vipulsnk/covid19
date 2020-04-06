import AsyncStorage from '@react-native-community/async-storage'

const storeData = async (key, data) => {
  console.log('Saving...')
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    // saving error
    console.warn(e)
  }
}

const getData = async (key) => {
  console.log('Getting...')
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      // value previously stored
      console.log(value)
      return value
    } else {
      return null
    }
  } catch (e) {
    // error reading value
    console.warn(e)
  }
}

export { getData, storeData }
