import http from "../utils/http";

export const HomeData = (param)=>http("post","/api/api/getHotRecommends",param)

export const HomeHotShopData=(param)=>http("get","/api/pb/promotion/current/skus",param)

export const HomePro = (param)=>http("get","/api/api/select-list",param)


