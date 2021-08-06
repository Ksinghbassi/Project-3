import { Link } from "react-router-dom";

export default function BloggerList({ Blogger }) {
  return (
    <div className="container">
  <div className="row row-cols-4">
    <div className="col"><div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title">{Blogger.name}</h3>
        <p class="card-text">{Blogger.about}</p>
      </div>
      <div className="panel-footer BloggerList-action-panel">
        <Link
          className="btn btn-xs btn-secondary"
          to={{
            pathname: "/bloggers/details",
            state: { Blogger },
          }}
        >
          DETAILS
        </Link>
      </div>
    </div>
    </div>
  </div>
</div>
  );
}