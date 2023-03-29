
"use strict";

import Figure from "./Figure";
export class  circle extends  Figure {
 constructor (name, radius) {
    super (name);
    this.radius = radius;
    this.diameter = this.radius * 2;}

    
    get area () {
    this.area = Math.PI * this.radius * this.radius;
    return this.area;}
    get circumference () {
    this.circumference = 2 * Math.PI * this.radius;
    return this.circumference;
}}