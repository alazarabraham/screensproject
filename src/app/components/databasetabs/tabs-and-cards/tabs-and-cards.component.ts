import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingestion } from "../../models/Ingestion"


@Component({
  selector: 'app-tabs-and-cards',
  templateUrl: './tabs-and-cards.component.html',
  styleUrls: ['./tabs-and-cards.component.css']
})
export class TabsAndCardsComponent implements OnInit {


  private endPoint: string = "http://localhost:8080/api/v1/ingestions"
  public ingestions = [];

  constructor(private http: HttpClient) {

  }




  getData() {
    return this.http.get<Ingestion[]>(this.endPoint);

  }

  ngOnInit(): void {
    this.getData().
      subscribe(data => {
        this.ingestions = data;
        console.log(this.ingestions)
      })
  }

}
