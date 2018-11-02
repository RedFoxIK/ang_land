import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  public readonly headerTitle = 'Our process';
  public readonly headerSubTitle = 'A system built for rapid response.';

  constructor() { }

  ngOnInit() {
  }

}
