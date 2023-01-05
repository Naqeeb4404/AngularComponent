import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
       <p>This website "hello" uses cookies to prodive better user experience.</p>
       <div class="close"><button class="btn" (click)="closednotification()">X</button></div>
        </div>`,
    styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}", "p{font-size: 14px;}", "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
displayNotification:boolean = true;

closednotification(){
  this.displayNotification = true;
}

}
