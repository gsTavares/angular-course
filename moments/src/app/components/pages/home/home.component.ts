import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { environment } from 'src/environments/environment';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl; 

  faSearch: IconDefinition = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((response) => {
      const body: Moment[] = response.body;
      body.map(moment => {
        moment.createdAt = new Date(moment.createdAt!).toLocaleDateString('pt-BR')
      })

      this.allMoments = body;
      this.moments = body;

    });
  }

  search(event: Event): void {

    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLowerCase().includes(value);
    })

  }

}
