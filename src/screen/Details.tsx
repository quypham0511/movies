import React, {useCallback, useState, useEffect} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Slider,
  Image,
  ActivityIndicator,
} from 'react-native'
import {getListPopularMoives} from '../api/home-service'

const Item = ({item,navigation}) => (
  <TouchableOpacity style={styles.screenContainer} 
                    onPress={()=>navigation?.navigate('DetailsMovies',{id:item?.id})

                    }>
    <View style={styles.imageDeviceContainer} >
      <Image
        style={styles.imageDevices}
        source={{uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`}}
      />
      <Text style={styles.title}>{item?.title}</Text>
    </View>

    <View style={styles.deviceInfoContainer}>
      <Text style={styles.title}>Language: {item?.original_language}</Text>
      <Text style={styles.title}>{item?.overview}</Text>
      <Text style={styles.title}>Popularity: {item?.popularity}</Text>
      <Text style={styles.title}>Vote Average: {item?.vote_average}</Text>
      <Text style={styles.title}>vote Count: {item?.vote_count}</Text>
      <Text style={styles.title}>{item?.backdrop_path}</Text>
    </View>
  </TouchableOpacity>
)

const Details = (props) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    fetchDataList()
    return () => {
      return null
    }
  }, [])

  const fetchDataList = async () => {
    let pageTemp = page
    const _data = await getListPopularMoives(pageTemp)
    if (_data) {
      setData(data=>[...data,..._data]);
      pageTemp++
      setPage(pageTemp)
    }
  }

  const renderItem = ({item,navigation}) => 
                <Item item={item} navigation={props.navigation} />

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.txtMovieHeader}>
            <Text style={styles.title}> Movie Details </Text>
        </View>
        <View style={styles.flatListContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onEndReached={fetchDataList}
              onEndReachedThreshold={0.6}
            />
        </View>
      
        <TouchableOpacity>
            <View>
                <Text onPress={()=>props.navigation.navigate('DetailsMovies')} >Movie </Text>
                <Text>{page}</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  txtMovieHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDeviceContainer: {
    backgroundColor: '#EBF3EB',
    flex: 1.22,
    width: 140,
    height: 165,
    borderWidth: 1,
    alignItems: 'center',
    //justifyContent:'center',
  },
  title: {
    fontSize: 14,
    marginVertical: 3,
    color: '#F13B3B',
    marginLeft: 6,
  },
  imageDevices: {
    width: 150,
    height: 140,
    resizeMode: 'cover',
  },
  deviceInfoContainer: {
    backgroundColor: '#A3ECE0',
    height: 165,
    flex: 2,
    borderWidth: 1,
  },
  flatListContainer:{
    height:570,
    
  }
})
