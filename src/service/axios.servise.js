import axios from "axios";
import baseURL from "../configs/urls";

 export const axiosServise =()=>{
   return  axios.get('https://api.themoviedb.org/3/movie/550?api_key=0f676b941faacffb46c51cd14fc69226', {
       headers: {
           Authorization:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjY3NmI5NDFmYWFjZmZiNDZjNTFjZDE0
           ZmM2OTIyNiIsInN1YiI6IjYyMDZkMGM3MTVhNGExMDExMDA2OGViZCIsInNjb3
           BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MP36bvzuQa3Q0w_PKWvnAafjVsCDaaCLqEF9HcOiM-M'
       }
   })
 }
