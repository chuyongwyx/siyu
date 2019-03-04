import Mock from "mockjs";
import database from "../utils/position";

Mock.mock(/\/position/,"post",database. position)