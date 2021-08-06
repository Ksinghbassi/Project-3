import Blogger from "../../components/Blogger/Blogger";

export default function BloggerListPage({ bloggers }) {
  return (
    <>
      <h1>Blogger List</h1>
      <div class="container">
        <div class="row row-cols-4">
          <div class="row">
            {bloggers.map((blogger) => (
              <Blogger blogger={blogger} key={blogger._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}