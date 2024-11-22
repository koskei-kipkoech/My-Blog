import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../general/general.css';

const App = () => {
    const [blogs, setBlogs] = useState([]);
    const [likedBlogs, setLikedBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const API_URLS = [
        "https://newsapi.org/v2/everything?q=tesla&from=2024-10-22&sortBy=publishedAt&apiKey=4ff2089758174b4aaef84168253b85a9",
        "https://newsapi.org/v2/everything?q=apple&from=2024-11-21&to=2024-11-21&sortBy=popularity&apiKey=4ff2089758174b4aaef84168253b85a9",
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ff2089758174b4aaef84168253b85a9",
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ff2089758174b4aaef84168253b85a9",
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4ff2089758174b4aaef84168253b85a9"
    ];

    const fetchBlogs = async () => {
        setIsLoading(true);
        try {
            const responses = await Promise.all(API_URLS.map(url => axios.get(url)));
            const allBlogs = responses.flatMap(response => response.data.articles);
            setBlogs(allBlogs);
        } catch (error) {
            console.error("Error fetching data", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Handle search
    const filteredBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filter ? blog.source.name === filter : true)
    );

    // Handle like/dislike functionality
    const toggleLike = (blog) => {
        setLikedBlogs(prev => {
            const isAlreadyLiked = prev.some(b => b.title === blog.title);
            if (isAlreadyLiked) {
                return prev.filter(b => b.title !== blog.title);
            } else {
                return [...prev, blog];
            }
        });
    };

    return (
        <div className="app">
            <div className="main">
                <h1>Blog Posts</h1>
                <input 
                    type="text" 
                    placeholder="Search blogs..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="blog-list">
                        {filteredBlogs.length ? (
                            filteredBlogs.map((blog, index) => (
                                <div key={index} className="blog-card">
                                    {blog.urlToImage && <img src={blog.urlToImage} alt={blog.title} className="blog-image" />}
                                    <h2>{blog.title}</h2>
                                    <p>{blog.description}</p>
                                    <p><strong>Source:</strong> {blog.source.name}</p>
                                    <p><strong>Author:</strong> {blog.author ? blog.author : 'Unknown'}</p>
                                    <p><strong>Published at:</strong> {new Date(blog.publishedAt).toLocaleString()}</p>
                                    <button onClick={() => toggleLike(blog)}>
                                        {likedBlogs.some(b => b.title === blog.title) ? 'Unlike' : 'Like'}
                                    </button>
                                    <a href={blog.url} target="_blank" rel="noopener noreferrer">Read More</a>
                                </div>
                            ))
                        ) : (
                            <p>No blogs found.</p>
                        )}
                    </div>
                )}
            </div>
            <div className="sidebar">
            <h4>Filter by Source</h4>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="">All</option>
                    <option value="Apple">Apple</option>
                    <option value="Tesla">Tesla</option>
                    <option value="TechCrunch">TechCrunch</option>
                    <option value="WSJ">WSJ</option>
                </select>
                <h3>Liked Blogs</h3>
                <ul>
                    {likedBlogs.map((blog, index) => (
                        <li key={index}>
                            <p>{blog.title}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
};

export default App;
