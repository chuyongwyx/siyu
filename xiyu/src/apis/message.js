import http from "../utils/http";

export const MessageData = (param)=>http("post","/api/api/filter_search",param)