import React, { useEffect } from 'react';
import { axiosClient } from '../../utils/axiosClient';

function Home() {
    useEffect(() => {
        fetchData();
    }, []);
    async function fetchData() {
        try {
            const response = await axiosClient.get('/post/all');
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>Home</div>
    )
}

export default Home;