import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }


ngOnInit(): void {

}
slogan: string = 'Your one stop shop foe everything.'
getSlogan(){
    return 'This is new slogan for this web application'
}
}