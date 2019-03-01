import http from "../utils/http";
export const MoreData = (params) => http("get","/api/pb/promotion/current/skus",params)