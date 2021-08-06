const Blogger = require('../../models/blogger');

module.exports = {
    index,
    create,
	show,
	update,
	delete: deleteOne
}

async function index(req, res) {
	const Bloggers = await Blogger.find({});
	res.status(200).json(Bloggers);
}

async function create(req, res) {
	req.body.user = req.user._id;
	const Blogger = await Blogger.create(req.body);
	res.status(201).json(Blogger);
}

async function show(req, res) {
	const Blogger = await Blogger.findById(req.params.id);
	res.status(200).json(Blogger);
}

async function update(req, res) {
	const updatedBlogger = await Blogger.findOneAndUpdate(
		{_id: req.params.id, user: req.user._id},
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedBlogger);
}

async function deleteOne(req, res) {
	const deletedBlogger = await Blogger.findOneAndRemove({_id: req.params.id, user: req.user._id});
	res.status(200).json(deletedBlogger);
}