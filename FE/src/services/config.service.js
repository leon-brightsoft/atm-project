import axios from "axios";

export const accessTokenConfig = token => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}