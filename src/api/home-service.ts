import {url} from './../constant/url'
import {urlMovie,urlApi} from './../constant/url'
import axios from 'axios'

export const getListPopularMoives = async (page:number) => {
  const response = await axios({
    method: 'get',
    url: url,
    params:{
      page:page
    }
  })
  console.log('url',url+`${page}`)
  console.log(response)
  if (response?.status === 200) {
    return response?.data?.results
  }
  return null
}
export const getListPopularMoivesDetail = async (id:string) => {
  const response = await axios({
    method: 'get',
    url: urlMovie + `${id}`+urlApi 
  })
  console.log(response)
  if (response?.status === 200) {
    return response?.data
  }
  return null
}
