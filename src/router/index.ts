/*
 * @Author: SHEN
 * @Date: 2020-05-16 19:41:21
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 21:06:59
 */
import Home from "../views/home";
import TestOutputComponents from "../views/testOutputComponents";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true // 严格匹配
  },
  {
    path: '/test',
    component: TestOutputComponents,
    exact: true // 严格匹配
  }
];


export default routes;