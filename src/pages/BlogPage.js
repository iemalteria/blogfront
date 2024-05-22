import Post from '../Post';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlogPage(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const axiosInstance = axios.create({
            withCredentials: true, // This is crucial to include cookies in your requests
        });

        axiosInstance.get('https://iemalteria-back.vercel.app/post')
            .then(response => {
                setPosts(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });

        return () => {
            axiosInstance.interceptors.request.eject(axiosInstance.interceptors.request.handlers.length - 1);
        };
    }, []);

    return (
        <div className='post-list-container'>
            <div className='post-list'>
                <h1 className='post-title'>PUBLICACIONES</h1>
                {posts.length > 0 && posts.map(post => (
                    <Post key={post._id} {...post} />
                ))}
            </div>
        </div>
    );
}
