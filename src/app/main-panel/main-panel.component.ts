import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  links: String[];
  activeTitle: String;
  selectedIndex;

  constructor() { 
    this.links=["About Us", "The Venue", "Registry", "RSVP"];
    this.activeTitle = "About Us";
    this.selectedIndex = 0;
  }

  displayPanel(title,index){
      this.activeTitle = title;
      this.selectedIndex = index;

  }
  ngOnInit() {
  }

}
