import BloggerListItem from "../../components/BloggerListItem/BloggerListItem";
export default function BloggerPage(props) {
	return (
		<>
			<h1>Blogger List</h1>
			<div className='BloggerListPage-grid'>
				{props.bloggers.map(Blogger => (
					<BloggerListItem
						Blogger={Blogger}
						key={Blogger._id}
						handleDeleteBlogger={props.handleDeleteBlogger}
					/>
				))}
			</div>
		</>
	)};