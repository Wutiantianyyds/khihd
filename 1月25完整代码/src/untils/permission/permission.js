import http from "@/untils/http.js"

function permission() {
  return http({
    url: http.apis("/sys/permission"),
    method: "GET"
  })
}
export { permission }
