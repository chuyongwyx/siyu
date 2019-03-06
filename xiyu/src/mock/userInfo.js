import Mock from "mockjs";
import database from "../utils/userInfo";

Mock.mock(/\/register/,"post",database.register);