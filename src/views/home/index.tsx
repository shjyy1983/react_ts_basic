/*
 * @Author: SHEN
 * @Date: 2020-10-26 13:35:37
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 21:06:38
 */
import * as React from 'react';
import { withRouter, RouteProps, Link } from 'react-router-dom';
import BlueBox from '../../components/BlueBox'
import GreenBox from '../../components/GreenBox'
import './style.less'

function Home() {
  return (
    <div className="page page-home">
      <h1>Home</h1>
      <BlueBox />
      <GreenBox/>
    </div>
  );
}

export default Home;
