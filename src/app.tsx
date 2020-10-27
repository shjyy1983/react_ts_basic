import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";

/**
 * 注意：
 * 1. BrowserRouter 不能在 build 后直接打开 dist/index.html
 */
const render = () => {
  ReactDOM.render(
    <HashRouter>{renderRoutes(routes)}</HashRouter>,
      document.querySelector("#app") as HTMLElement
  );
};
render();


function dosome(a: string): string {
  return `hello ${a}`;
}


console.log(dosome('abc'))