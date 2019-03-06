import http from "../utils/http";

export const SecondsData = (param)=>http("post","/api/api/filter_search",param)