import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as bloggersAPI from "../../utilities/bloggers-api";
import AuthPage from "../AuthPage/AuthPage";
import NewBloggerPage from "../../components/NewBloggerPage/NewBloggerPage";
import BloggerListPage from "../BloggerListPage/BloggerListPage";
import EditBloggerPage from "../EditBloggerPage/EditBloggerPage";
import BloggerDetailPage from "../BloggerDetailPage/BloggerDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [bloggers, setBloggers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getBloggers() {
      const bloggers = await bloggersAPI.getAll();
      setBloggers(bloggers);
    }
    getBloggers();
  }, []);

  useEffect(() => {
    history.push("/bloggers");
  }, [bloggers, history]);

  async function handleNewBlogger(newBloggerData) {
    const newBlogger = await bloggersAPI.create(newBloggerData);
    setBloggers([...bloggers, newBlogger]);
  }

  async function handleUpdateBlogger(updatedBloggerData) {
    const updatedBlogger = await bloggersAPI.update(updatedBloggerData);
    const newBloggersArray = bloggers.map((s) =>
      s._id === updatedBlogger._id ? updatedBlogger : s
    );
    setBloggers(newBloggersArray);
  }

  async function handleDeleteBlogger(id) {
    await bloggersAPI.deleteOne(id);
    setBloggers(bloggers.filter((blogger) => blogger._id !== id));
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Route exact path="/bloggers">
            <BloggerListPage bloggers={bloggers}
            />
          </Route>
          <Route exact path="/bloggers/new">
            <NewBloggerPage
              handleNewBlogger={handleNewBlogger}
            />
          </Route>
          <Route exact path="/bloggers/details">
            <BloggerDetailPage user={user} bloggers={bloggers} handleDeleteBlogger={handleDeleteBlogger} />
          </Route>
          <Route exact path="/bloggers/edit">
            <EditBloggerPage handleUpdateBlogger={handleUpdateBlogger} />
          </Route>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}