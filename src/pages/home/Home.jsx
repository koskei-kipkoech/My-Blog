import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import  '../home/home.css'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() =>{
            //axios.get
        }
    }, []);

    return (
        <>
        <Header/>
        <div className='home'>
            <Posts/>
            <Sidebar />
        </div>
        </>
    )
}
