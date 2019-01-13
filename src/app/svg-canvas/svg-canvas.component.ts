import { Component, OnInit } from '@angular/core';
import {Circle} from '../circle';



@Component({
  selector: 'app-canvas',
  templateUrl: './svg-canvas.component.html',
  styleUrls: ['./svg-canvas.component.css']
})
export class SvgCanvasComponent implements OnInit {
  circles: Circle[] = [];
  colors;
  circlesComplete;

  constructor() { 
    this.circles = [];
    this.colors = ['#ffe25a', '#ee9785', '#e16462', '#a3ca64', '#5dae4b', '#3b8755', '#338abc', '#20586c'];
    this.circlesComplete = false;
  }
  
  generateCircleCoords() {
    return {
      x: ''+Math.floor(Math.random() * 200),
      y: ''+Math.floor(Math.random() * 100),
    }
  }
  generateRandomColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  createRandomCircle(){
    let circleCoords = this.generateCircleCoords();
    this.circles.push({
      cx: circleCoords.x,
      cy: circleCoords.y,
      r: ''+Math.floor(Math.random() * 15),
      fillopacity: '.9',
      color: this.generateRandomColor(),
    })
  }

  remakeCircles(){
    this.circles = [];
    this.ngOnInit();
  }

  ngOnInit() {
    const clear = setInterval(()=>{
      this.createRandomCircle();
    }, 250)
    setTimeout(()=>{
      this.circlesComplete = true;
    }, 2500)
    setTimeout(()=>{
      clearInterval(clear);
    }, 6500)
  }

}
