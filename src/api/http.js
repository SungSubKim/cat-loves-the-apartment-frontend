import axios from "axios";

// axios 객체 생성
export default axios.create({
	baseURL: "http://localhost:9999/vue",
	// baseURL: process.env.BACKEND_URL,
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
});
