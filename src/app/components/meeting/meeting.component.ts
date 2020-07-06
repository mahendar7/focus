import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  isFooterActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateFooter() {

    if (this.isFooterActive === false) {
      this.isFooterActive = true;

      setTimeout(() => {
        this.isFooterActive = false;
      }, 5000);
    }

  }

}
