/*
 * @Author: SHEN
 * @Date: 2020-10-26 21:04:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 22:25:40
 */

import * as React from 'react';
import { BlueBox, GreenBox, sayHello, sayWorld } from '../../../dist/components.js'
import './style.less';

function testOutputComponents(properties: any) {
  console.log(sayHello('cat'), sayWorld('dog'))
  return (
    <div className="page-test">
      <BlueBox />
      <GreenBox/>
    </div>
  )
}

export default testOutputComponents