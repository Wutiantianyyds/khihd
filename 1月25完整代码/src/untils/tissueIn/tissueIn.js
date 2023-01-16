/**组织架构模块*/
import http from "@/untils/http.js"

export const getlist = () => {
	return http({
		url:  http.apis("/company/department"),
		method:"get"
	}).then(res => {
		return res
	})
}
export const dellist = (id) => {
	return http({
		url:  http.apis(`/company/department/${id}`),
		method:"DELETE"
	}).then(res => {
		return res
	})
}
