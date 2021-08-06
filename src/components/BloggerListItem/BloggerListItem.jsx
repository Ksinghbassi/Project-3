import React from 'react';
import { Link } from 'react-router-dom';
import './BloggerListItem.css';

function BloggerListItem({ Blogger, handleDeleteBlogger }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{Blogger.name}</h3>
			</div>
			<div className='panel-footer BloggerListItem-action-panel'>
				<Link
					className='btn btn-xs btn-info'
					to={{
						pathname: 'bloggers/details',
						state: { Blogger },
					}}
				>
					DETAILS
				</Link>
				<Link
					className='btn btn-xs btn-warning'
					to={{
						pathname: 'bloggers/edit',
						state: { Blogger },
					}}
				>
					EDIT
				</Link>
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteBlogger(Blogger._id)}
				>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default BloggerListItem;