/*
 * @Author: SHEN
 * @Date: 2020-05-16 19:41:21
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 13:58:56
 */
import Home from "../views/home";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true // 严格匹配
  }
];


export default routes;