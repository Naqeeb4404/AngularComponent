import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert-success alert-warning" [hidden]="displayNotification"]>
    <p>This website "hello" uses cookies to prodive better user experience.</p>
    </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}", "p{font-size: 14px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
displayNotification:boolean = true;
}
