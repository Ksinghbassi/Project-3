import { useState, useRef, useEffect } from "react";

export default function NewBloggerPage(props) {
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
    props.handleAddBlogger(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
		<>
			<h1>Add Profile</h1>
			<form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Name (required)</label>
					<input
						className='form-control'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Age (required)</label>
					<input
						className='form-control'
						name='age'
						value={formData.age}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>About</label>
					<input
						className='form-control'
						name='about'
						value={formData.about}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn' disabled={invalidForm}>
					Profile
				</button>
			</form>
		</>
	);
}