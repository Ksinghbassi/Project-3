import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditBloggerPage( {props} ) {
	const location = useLocation();

	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState(location.state.blogger);

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleUpdateBlogger(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Edit Blog</h1>
			<form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
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
					<label>About (required)</label>
					<input
						className='form-control'
						name='about'
						value={formData.about}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Age</label>
					<input
						className='form-control'
						name='age'
						value={formData.age}
						onChange={handleChange}
					/>
				</div>
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					Save Blog
				</button>
				&nbsp;&nbsp;
				<Link to='/'>CANCEL</Link>
			</form>
		</>
	);
}