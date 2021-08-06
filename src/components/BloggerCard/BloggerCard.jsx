import React from 'react';
import { Link } from 'react-router-dom';

function BloggerCard({ Blogger }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{Blogger.name}</h3>
			</div>
			<div className='panel-body'>
				<dl>
					<dt>About</dt>
					<dd>{Blogger.about}</dd>
					<dt>Age</dt>
					<dd>{Blogger.age}</dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default BloggerCard;