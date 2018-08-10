import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub: any; // the params subscription from the route, this allows us unsubscribing on destroy
  player: YT.Player; // The Youtube player
  videoId: any; // save videoId
  video: any; // storage the details of the video selected
  recommendedVideos: any[]; // save the list of recommended videos
  constructor(
    private route: ActivatedRoute,
    private yt: YoutubeService
  ) { }

  ngOnInit() {
    // subscribe to params to get id, and save that subscription
    this.sub = this.route.params.subscribe(params => {
      this.videoId = params['id'];
      if (this.player) {
        // if player exist the, load video... This means that we selected a video from the recommended videos
        this.player.loadVideoById(this.videoId);
      }
      // get video detail, using the YoutubeService
      this.yt.getVideoDetail(this.videoId).then(res => {
        this.video = res['items'][0];

      },
        err => {
          console.log(err);

        });
      // get recommended videos, using the YoutubeService
      this.yt.getRecommendedVideos(this.videoId).then(res => {
        this.recommendedVideos = res['items'];

      },
        err => {
          console.log('err: ', err);

        });
    });
  }

  // on destroy we unsubscribe from params subscription
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
