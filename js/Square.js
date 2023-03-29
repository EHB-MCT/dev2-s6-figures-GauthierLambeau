"use strict";

import Figure from "./Figure";
export class  circle extends  Figure {
 constructor (name, size) {
    super (name);
    this.size = size;
    this.area = this.size * this.size;
    this.circumference = 4 * this.size;
}}