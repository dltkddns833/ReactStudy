import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin : 0  auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width : 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=78e14483e9a14fc7b5b4a56d48d663db`)
    }, [category]);

    if(!response){
        return <NewsListBlock>대기중...</NewsListBlock>
    }
    if(error){
        return null;
    }
    const {articles} = response.data;

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    )
}

export default NewsList;