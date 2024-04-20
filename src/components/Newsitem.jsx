import React, { useEffect, useState } from 'react'
import Newsboard from './Newsboard'





const Newsitem = ({category}) => {
    const[articles,Setarticles]=useState([])
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=>response.json()).then(data=>Setarticles(data.articles))
    },[category])
  return (
   <>
   <h2 className=' text-center'>Latest <span className='badge bg-danger'>NEWS</span></h2>
  
   {articles.map((news,index)=>{
    return <Newsboard key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
   })}
   </>
  )
}

export default Newsitem