import http from "../utils/http";

export const HomeData = (param)=>http("post","/api/api/getHotRecommends",param)