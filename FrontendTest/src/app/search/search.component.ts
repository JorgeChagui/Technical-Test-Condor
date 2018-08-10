import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any[]; // storage list of videos
  searched: String; // save the last term searched
  constructor(public yt: YoutubeService) {
    // Load videos with '' (empty) term
    this.searchVideos('');
   }
  ngOnInit() {
  }

  /**
   * this method use YoutubeService's method: searchVideos to fetch the list of videos
   * @param value this value is the term for searching Videos
   */
  searchVideos(value) {
    this.yt.searchVideos(value).then(res => {
      console.log(res);
      this.searched = value;
      this.items = res['items'];
    }, err => {
      console.log('err: ', err);

    });

  }


}
