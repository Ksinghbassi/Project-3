import { Link } from "react-router-dom";

export default function BloggerCard({ blogger, user, handleDeleteBlogger }) {
  return (
    <div className="container-xxl">
      <div className="panel-heading">
        <h3 className="panel-title">{blogger.name}</h3>
      </div>
      <div className="panel-body">
        <dl>
          <dt>Name</dt>
          <dd>{blogger.name}</dd>
          <dt>Age</dt>
          <dd>{blogger.age}</dd>
          <dt>About</dt>
          <dd>{blogger.about}</dd>
          {blogger.user === user._id ? (
            <>
              <Link
                className="btn btn-secondary"
                to={{
                  pathname: "/bloggers/edit",
                  state: { blogger },
                }}
              >
                EDIT
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteBlogger(blogger._id)}
              >
                DELETE
              </button>
            </>
          ) : (
            " "
          )}
        </dl>
      </div>
      <div className="panel-footer">
        <Link to="/bloggers">RETURN TO LIST</Link>
      </div>
    </div>
  );
}