import './style.scss'
import axios from 'axios'
// const getData = async (url) => {
//                     const response = await fetch(url || 'https://jsonplaceholder.typicode.com/users')
//                     const data = await response.json()
//                     console.log( data)
                  
//                   }
// getData()



// yarn add axios
const getDataAxious = async (url) => {
                    const response = await axios.get(url || 'https://jsonplaceholder.typicode.com/users')
                   
                    console.log( response.data)
                  return response.data
                  }
                  getDataAxious()
