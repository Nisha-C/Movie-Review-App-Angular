
import {Component, Input} from '@angular/core';
import {IMovie} from './movie';
import { MovieService } from './movie.service';


@Component({

    selector : 'app-movie',
    templateUrl : 'movie.component.html',
    styleUrls : ['movie.component.css']

})

export class MovieComponent 

{

    @Input() userName:string;
    movieImgWidth : number = 200;
    movieImgMargin : number = 20;
    message : string = "RateFlix.com is your one-stop destination for movie info and reviews. Now, grab some popcorn and enjoy!";
    imageWidth : number=20;
    imageMargin : number=2;
    movies:IMovie[] = [];
    constructor(private movieService:MovieService){}

    ngOnInit():void
    {
        this.movieService.getMovies().subscribe(data=>this.movies=data);
    }
    
    
}
