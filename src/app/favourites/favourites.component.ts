import { Component, OnInit } from '@angular/core';
import { Component1Service } from '../component1.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-favo urites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  constructor(private profileService: Component1Service, private http: HttpClient) { }

  public repos: any;
  
  public del_url;
  RemoveFromFav(repo) {
    this.del_url="http://localhost:3000/posts/fav_repos";
    this.http.delete(this.del_url).subscribe(s => {
      console.log(s);
      this.ngOnInit();
    });    
  }
  
  ngOnInit() {
    this.http.get("http://localhost:3000/posts/fav_repos").subscribe(x => {
      this.repos= x;  
      console.log(this.repos);
    });
  }

}
