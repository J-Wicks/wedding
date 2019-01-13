import { Component, OnInit } from '@angular/core';
import {RSVP} from '../rsvp';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {
  model: RSVP;

  constructor() { 
    this.model = new RSVP('', '', false, 0, false, '');
  }

  onSubmit(){
    console.log(this.model);
    this.constructor();
  }
  ngOnInit() {
  }

}
