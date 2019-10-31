import { Component, OnInit, Input } from '@angular/core';
import { Component1Service } from '../component1.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  constructor(private profileSerive: Component1Service) { }

  public repodetails :any[] ;

  callThisFunction() {
    console.log("Pranjal2997",this.repodetails);
  }
  newfunction(repo)
  {
    this.repodetails=repo;
    console.log("new",this.repodetails);
  }
  ngOnInit() {
    // this.profileSerive.$repodetails.subscribe( (repo: any) => this.newfunction(repo));
    // console.log("useless",this.profileSerive.username);
    this.repodetails = this.profileSerive.currentrepo;
  }
  
}
