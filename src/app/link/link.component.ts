import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  follow ='follow';
  following = 'following';

  change(){
    switch(this.follow){
      case this.follow='follow':
        this.follow='following';
        break;
        case this.follow='following':
        this.follow='follow';
        break;
    }
  }


}
