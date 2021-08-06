const BASE_URL = '/api/bloggers';

export function getAll() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(newBloggerData) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(newBloggerData),
	}).then(res => res.json());
}

export function update(updatedBloggerData) {
	return fetch(`${BASE_URL}/${updatedBloggerData._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(updatedBloggerData),
	}).then(res => res.json());
}

export function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then(res => res.json());
}