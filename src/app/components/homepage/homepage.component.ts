import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  fetchApi() {
    fetch(`http://localhost:8080/api/v1/ingestions`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  ngOnInit(): void {
    this.fetchApi();
  }

}
