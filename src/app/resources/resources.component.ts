import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public readonly headerTitle = 'OUR RESOURCESS';
  public readonly headerSubTitle = 'The cavalry has arrived.';

  constructor() { }

  ngOnInit() {
  }

}
