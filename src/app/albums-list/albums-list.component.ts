import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {NgsRevealModule} from "ng-scrollreveal";

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
     let mod_result = this.results;
     for (var item of this.results){
       var imageLinktoHttps = item['im:image']['2']['label'];
       imageLinktoHttps = imageLinktoHttps.replace(/^http:\/\//i, 'https://');
        }
       item['im:image']['2']['label'] = imageLinktoHttps;
    },

    )
  }

}
