import axios from "axios"

let config
if (process.env.RUNNING_ENV === "docker") {
	// we are running inside a docker, we need an external URL to reach the API
	config = {
		protocol: "http",
		host: process.env.API_HOSTNAME,
		preamble: "api/v1"
	}
}	else {
	// we are running locally
	config = {
		protocol: "http",
		host: "localhost:9000",
		preamble: "api/v1"
	}
}

class ApiClass {
	constructor() {
		this.baseUrl = `${config.protocol}://${config.host}/${config.preamble}`
	}

	get(endpoint, options = {}) {
		endpoint = this._cleanEndpoint(endpoint)

		return axios.get(`${this.baseUrl}/${endpoint}`, options)
	}

	post(endpoint, data = {}, options = {}) {
		endpoint = this._cleanEndpoint(endpoint)

		return axios.get(`${this.baseUrl}/${endpoint}`, data, options)
	}

	_cleanEndpoint(endpoint) {
		if (endpoint.startsWith("/")) {
			endpoint = endpoint.substring("/")
		}
		return endpoint
	}
}

export const Api = new ApiClass()
