"use strict";

import Figure from "./Figure";

export class  Rectangle extends Figure {
 constructor (name, width, height) {
    super (name);
    this.width = width;
    this.height = height;}
    get area () {
    this.area = this.width * this.height;
    return this.area;
    }get circumference () {
    this.circumference = 2 * (this.width + this.height);
    return this.circumference;
}}

