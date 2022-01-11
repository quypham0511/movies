import React, {useState, useEffect,useCallback} from 'react'
import { View, Text , FlatList,TouchableOpacity,StyleSheet, Image} from 'react-native'
import {getListPopularMoivesDetail} from '../api/home-service'



const DetailsMovies = ({navigation,route}) => {
    const {id}=route.params
    const [data, setData] = useState({})
  
    useEffect(() => {
        fetchDataList()
        return () => {
          return null
        }
      }, [])
    
    useEffect(() => {
        console.log('data in hear',data)
        return () => {
          return null
        }
      }, [data])
    
    const fetchDataList = async () => {
           const data = await getListPopularMoivesDetail(id)
           if(data){
            setData(data);

           }
           
      }
    

    return (
        <View style={styles.container}>
            <View style={styles.txtMovieHeader}>
                <Text onPress={()=>navigation.navigate('Details')}>DetailsMovies</Text>
                <Text>{id}</Text>
            </View>
            <View style={styles.flatListContainer}>
                <View style={styles.screenContainer}>
                    <Image
                        style={styles.imageDevices}
                        source={{uri: `https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}}
                    />
                    <View>
                    <Text style={styles.title}>Title: {data?.original_title}</Text>
                    <Text style={styles.title}>Ngan thu: {data?.budget} $</Text>
                    <Text style={styles.title}>Date_release: {data?.release_date}</Text>
                    </View>
                </View>
                <View>
                
                    <Text ellipsizeMode="head" numberOfLines={1}> HomePage:      {data?.homepage}</Text>
                </View>
                
            </View>
            
        </View>
    )
}

export default DetailsMovies
const styles = StyleSheet.create({
    container: {
        flex: 1,
        ailgnItems: 'center',
    },
    txtMovieHeader: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:23,
        width:300,height:160
    },
    imageDeviceContainer: {
        backgroundColor: '#EBF3EB',
        flex: 1.22,
        width: 140,
        height: 165,
        borderWidth: 1,
        alignItems: 'center',
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
        resizeMode: 'cover',marginRight:12
    },
    deviceInfoContainer: {
        backgroundColor: '#A3ECE0',
        height: 165,
        flex: 2,
        borderWidth: 1,
    },
    flatListContainer:{
        
      
    }
  })
