import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Ingestion } from "../../models";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private endPoint: string = "http://localhost:8080/api/v1/ingestions"
  public ingestions = [];

  constructor(private http: HttpClient) { }




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
