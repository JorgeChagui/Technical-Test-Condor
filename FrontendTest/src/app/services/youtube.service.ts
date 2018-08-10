import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  private key = '&key=AIzaSyASSJNgzHQQDmhotVtZZwUbDGibRw7OQCc';
  constructor(private http: HttpClient) { }

  /**
   * Method for consume the Search videos endpoint of the YouTube API
   * @param term Search term
   * @param maxResults Number of Videos to fetch
   */
  searchVideos(term: String, maxResults: Number = 10) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      // we change every special character to hex representation,
      // because this endpoint fail with % and #
      term = term.replace(/[^a-zA-Z 0-9.]+/g, (char) => {
        return '%' + char.charCodeAt(0).toString(16);
      });

      this.http.get(this.baseUrl + `/search?part=snippet&q=${term}&type=video&maxResults=${maxResults}` + this.key
        , { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
  /**
   * Method for consume the Get video detail endpoint of the YouTube API
   * @param id the unique id of the Video
   */
  getVideoDetail(id: String) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.http.get(this.baseUrl + `/videos?part=snippet,statistics
      &id=${id}
      &type=video
      ` + this.key
        , { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  /**
   * Method for consume the Get recommended videos endpoint of the YouTube API
   * @param id the unique id of the Video related to the recommended videos
   * @param maxResults Number of recommended videos to fetch
   */
  getRecommendedVideos(id: String, maxResults: Number = 10) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      this.http.get(this.baseUrl + `/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${maxResults}` + this.key
        , { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
