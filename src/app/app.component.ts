import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'project1';
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(item) {
    this.query = item.name.indexOf(0);
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }

  constructor( private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe( data => {
      this.artists = data;
    })
  }
}
