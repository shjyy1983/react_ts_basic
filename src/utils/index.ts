/*
 * @Author: SHEN
 * @Date: 2020-10-26 22:21:22
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 09:19:58
 */

import { clone as _clone } from 'lodash'

export function sayHello(text: string): string {
  return `hello ${text}`
}

export function sayWorld(text: string): string {
  return `world ${text}`
}

export function clone(o) {
  return _clone(o)
}