import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public yt: YoutubeService) { }

  ngOnInit() {
  }

  searchVideos(value) {
    this.yt.searchVideos(value).then(res => {
      console.log(res);

    }, err => {
      console.log(err);

    });

  }

}
