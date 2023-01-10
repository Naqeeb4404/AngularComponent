import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}">
       <p>This website "hello" uses cookies to prodive better user experience.</p>
       <div class="close"><button class="btn" (click)="closednotification()">X</button></div>
        </div>`,
    styles: ["div{margin: 10px 0px; padding: 10px 20px; text-align:center;}", 
    "p{font-size: 14px;}", ".close{float: right; margin-top: -15px;}",
    ".fadeOut {visibility: hidden;opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
displayNotification:boolean = false;

closednotification(){
  this.displayNotification = true;
}

}
