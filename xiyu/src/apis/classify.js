import http from "../utils/http";

export const ClassifyData = (params) => http("post", "/api/api/getCategoryList", params)

// export const RecommendImg = (params) => http("post", "/api/data", params)