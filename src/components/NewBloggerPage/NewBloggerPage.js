import { useState, useRef, useEffect } from "react";

export default function NewBloggerPage({ handleNewBlogger }) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    age: "21",
    about: "Likes making blogs"
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewBlogger(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add New Blog</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Add New Blog</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Name (required):</th>
              <td>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Age (required):</th>
              <td>
                <input
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">About (required):</th>
              <td>
                <input
                  className="form-control"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
        <button type="submit" className="btn" disabled={invalidForm}>
          Add New Blog
        </button>
          </tbody>
        </table>
      </form>
    </>
  );
}