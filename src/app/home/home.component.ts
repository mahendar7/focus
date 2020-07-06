import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  peer: any;
  myPeerId;
  anotherPeerId;

  user: any[] = [];

  meetingId: string;
  inputClicked: boolean;

  constructor() { }

  ngOnInit() {
    this.peer = new Peer();

    setTimeout(() => {
      this.myPeerId = this.peer.id;
      console.log(this.myPeerId);
    }, 10000);
  }

  ngAfterViewInit() { }

}
