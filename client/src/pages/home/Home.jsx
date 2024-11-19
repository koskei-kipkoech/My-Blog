import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [selectedApi, setSelectedApi] = useState("");

    // Function to fetch news articles based on selected API
    useEffect(() => {
        const fetchPosts = async () => {
            if (!selectedApi) return; // If no API selected, do nothing
            try {
                const res = await axios.get(selectedApi);
                setPosts(res.data.articles); // Assuming response contains `articles`
            } catch (error) {
                console.error("Error fetching news articles:", error);
            }
        };
        fetchPosts();
    }, [selectedApi]);

    return (
        <>
            <Header />
            <div className="home">
                <div className="content">
                    <Posts posts={posts} />
                </div>
                <Sidebar setSelectedApi={setSelectedApi} />
            </div>
        </>
    );
}
