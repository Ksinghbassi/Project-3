import sendRequest from './send-request-api';
const BASE_URL = '/api/bloggers';

export function getAll() {
    return sendRequest(BASE_URL)
}

export function create(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
  }

  export function update(updatedBlogger) {
    return sendRequest(`${BASE_URL}/${updatedBlogger._id}`, 'PUT', updatedBlogger); 
   }
  
  export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
  }