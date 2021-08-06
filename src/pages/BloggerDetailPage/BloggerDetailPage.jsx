import React from 'react';
import { useLocation } from "react-router-dom";
import BloggerCard from "../../components/BloggerCard/BloggerCard";

export default function BloggerDetailPage(props) {
    const {
        state: { blogger },
    } = useLocation();
    return (
        <>
            <h1>Blog Details</h1>
            <BloggerCard blogger={blogger} key={blogger._id} />
        </>
    )    
}