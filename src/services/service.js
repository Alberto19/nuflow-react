import axios from 'axios';

class Service {
	constructor() {
		this.token = localStorage.getItem('token');
		this.post = this.post.bind(this);
		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
		axios.defaults.baseURL = 'https://nuflow.herokuapp.com';

		if (this.token !== undefined || this.token !== '') {
			axios.defaults.headers.post['x-access-token'] = this.token;
		}
	};
	post(url, payload) {
		return new Promise((resolve, reject) => {
			axios.post(url, payload).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);

			});
		});
	}
	get(url){
		return new Promise((resolve, reject) => {
			axios.get(url).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);

			});
		});
	}
	put(url, payload) {
		return new Promise((resolve, reject) => {
			axios.put(url, payload).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);

			});
		});
	}
	delete(url, payload) {
		return new Promise((resolve, reject) => {
			axios.delete(url, payload).then((result) => {
				resolve(result);
			}).catch((err) => {
				reject(err);

			});
		});
	}
};

export default new Service();