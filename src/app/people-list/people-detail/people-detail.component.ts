import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/service/people/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people = JSON.parse(localStorage.getItem('people'));

  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.people)
    if(localStorage.getItem('Character')){
      this.peopleService.getFilmId(localStorage.getItem('Character')).subscribe((characterApi: People)=> {
        this.people=characterApi;
      });
      localStorage.setItem('Character',null);
    } 
  }

  selectFilm(url: string){
    localStorage.setItem('url', url);
    this.router.navigate(['/film-list']);
  }

}
