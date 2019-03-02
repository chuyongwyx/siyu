import http from '../utils/http';
export const ToolsData = (param)=>http("post","/position",param)
