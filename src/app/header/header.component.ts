import {Component,Input} from '@angular/core';

@Component({

    selector : 'app-header',
    templateUrl : 'header.component.html',
    styleUrls : ['header.component.css']
})

export class HeaderComponent{

    pageTitle : string = "Rate Flix";
    logo : string = "./assets/images/videocamera.png";
    imageWidth : number = 50;
    imageMargin : number = 2;


}