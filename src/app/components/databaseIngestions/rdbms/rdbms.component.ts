import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';

@Component({
  selector: 'app-rdbms',
  templateUrl: './rdbms.component.html',
  styleUrls: ['./rdbms.component.css']
})
export class RdbmsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  name: string;
  url: string;
  username: string;
  password: string;


  postData() {
    let endPoint = "http://localhost:8080/api/v1/ingestion";

    this.http.post(endPoint, {
      name: this.name,
      "source": {
        "attributes": {
          url: this.url,
          username: this.username,
          password: this.password
        }
      }

    }).toPromise().then((data: {}) => {

    })
    this.router.navigate(['/']);


  }

  ngOnInit(): void {
  }

}
