/*
 * @Author: SHEN
 * @Date: 2020-10-26 21:04:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 21:11:59
 */

import * as React from 'react';
import { BlueBox, GreenBox } from '../../../dist/components.js'
import './style.less';

function testOutputComponents(properties: any) {
  return (
    <div className="page-test">
      <BlueBox />
      <GreenBox/>
    </div>
  )
}

export default testOutputComponents