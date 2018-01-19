import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})


export class AlbumsListComponent implements OnInit {
  albumsObservable: Observable<any []>;
  results: string[];
  constructor(private  http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://itunes.apple.com/us/rss/topalbums/limit=100/json").subscribe(data=> {
     this.results = data['feed']['entry'];
     console.log(this.results);
    },
      err => {
        console.log("Error occured.");
      }
    )
  }

}
