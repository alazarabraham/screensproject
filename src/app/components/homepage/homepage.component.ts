import { Component, OnInit } from '@angular/core';
import { Ingestion } from "..//models/Ingestion";
import { Observable, of, from } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
