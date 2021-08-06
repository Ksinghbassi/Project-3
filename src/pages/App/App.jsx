import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import * as bloggerAPI from "../../utilities/bloggers-api";
import BloggerDetailPage from "../BloggerDetailPage/BloggerDetailPage";
import EditBloggerPage from "../EditBloggerPage/EditBloggerPage";
import BloggerListPage from "../BloggerListPage/BloggerListPage";
import NewBloggerPage from "../NewBloggerPage/NewBloggerPage";
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [bloggers, setBloggers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getBloggers() {
      const bloggers = await bloggerAPI.getAll();

      setBloggers(bloggers);
    }
    getBloggers();
  }, []);

  useEffect(() => {
    history.push("/");
  }, [bloggers, history]);

  async function handleAddBlogger(newBloggerData) {
    const newBlogger = await bloggerAPI.create(newBloggerData);
    setBloggers([...bloggers, newBlogger]);
  }

  async function handleUpdateBlogger(updatedBloggerData) {
    const updatedBlogger = await bloggerAPI.update(updatedBloggerData);
    const newBloggersArray = bloggers.map((p) =>
      p._id === updatedBlogger._id ? updatedBlogger : p
    );
    setBloggers(newBloggersArray);
  }

  async function handleDeleteBlogger(id) {
    await bloggerAPI.deleteOne(id);
    setBloggers(bloggers.filter((Blogger) => Blogger._id !== id));
  }
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/bloggers">
              <BloggerListPage
                bloggers={bloggers}
                handleDeleteBlogger={handleDeleteBlogger}
              />
            </Route>
            <Route exact path="/bloggers/new">
              <NewBloggerPage handleAddBlogger={handleAddBlogger} />
            </Route>
            <Route exact path="/bloggers/details">
              <BloggerDetailPage />
            </Route>
            <Route exact path="/bloggers/edit">
              <EditBloggerPage handleUpdateBlogger={handleUpdateBlogger} />
            </Route>
            <Redirect to="/bloggers" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
