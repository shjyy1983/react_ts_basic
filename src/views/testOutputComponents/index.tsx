/*
 * @Author: SHEN
 * @Date: 2020-10-26 21:04:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-27 10:37:39
 */

import * as React from 'react';
import { BlueBox, GreenBox, sayHello, sayWorld } from '../../../dist/components.js'
import './style.less';

function testOutputComponents() {
  const cat = sayHello('cat')
  const dog = sayWorld('dog')
  return (
    <div className="page-test">
      <BlueBox />
      <GreenBox/>
      { cat }
      { dog }
    </div>
  )
}

export default testOutputComponents