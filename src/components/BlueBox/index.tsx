/*
 * @Author: SHEN
 * @Date: 2020-10-26 20:50:18
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 22:17:52
 */
import React from 'react'
import './style.less'

class BlueBox extends React.PureComponent {
  render() {
    return (
      <div className="blue-box">
        <div>blue box</div>
        <div>
          <div className="logo" />
          <div className="logo2" />
        </div>
      </div>
    )
  }
}

export default BlueBox