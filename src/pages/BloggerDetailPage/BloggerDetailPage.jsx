import { useLocation } from "react-router-dom";
import BloggerCard from "../../components/BloggerCard/BloggerCard";

export default function BloggerDetailPage({user, handleDeleteBlogger}) {
    const {
        state: { blogger },
    } = useLocation();
    return (
        <>
            <h1>Blog Details</h1>
            <BloggerCard blogger={blogger} user={user} key={blogger._id} handleDeleteBlogger={handleDeleteBlogger}/>
        </>
    )    
}