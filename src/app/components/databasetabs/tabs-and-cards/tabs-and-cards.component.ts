import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingestion } from "../../models/Ingestion"


@Component({
  selector: 'app-tabs-and-cards',
  templateUrl: './tabs-and-cards.component.html',
  styleUrls: ['./tabs-and-cards.component.css']
})
export class TabsAndCardsComponent implements OnInit {


  private getAllEndPoint: string = "http://localhost:8080/api/v1/ingestions"
  private crudEndpoint: string = "http://localhost:8080/api/v1/ingestion"

  public ingestion;
  public ingestions = [];

  constructor(private http: HttpClient, private router: Router) {

  }




  getData() {
    return this.http.get<Ingestion[]>(this.getAllEndPoint);
  }

  deleteService(id) {
    return this.http.delete<Ingestion>(this.crudEndpoint)
    this.router.navigate(['/']);

  }

  ngOnInit(): void {
    this.getData().
      subscribe(data => {
        this.ingestions = data;
        console.log(this.ingestions)
      })



  }

  deleteIngestion(id) {
    console.log(id);
    this.http.delete(this.crudEndpoint).
      subscribe(() => console.log("Deleted"));

    this.router.navigate(['/']);

  }



}
