/*
 * @Author: SHEN
 * @Date: 2020-10-26 21:04:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 09:23:48
 */

import * as React from 'react';
import { BlueBox, GreenBox, sayHello, sayWorld, clone } from '../../../dist/components.js'
import './style.less';

function testOutputComponents() {
  const cat = sayHello('cat')
  const dog = sayWorld('dog')
  const copyed = clone({
    name: 'cat',
    age: 100
  })
  return (
    <div className="page-test">
      <BlueBox />
      <GreenBox/>
      <div>{ cat }</div>
      <div>{ dog }</div>
      <div>{ JSON.stringify(copyed) }</div>
    </div>
  )
}

export default testOutputComponents