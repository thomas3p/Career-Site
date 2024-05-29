import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../Service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  cardData: any[] = [];

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.fetchCardData();
  }

  fetchCardData() {
    this.teamsService.getTeams().subscribe((data: any[]) => {
      this.cardData = data;
    });
  }

  viewJobs(item: any) {
    console.log('View jobs for:', item.title);
  }

  Detail(item: any) {
    console.log('Detail for:', item.title);
  }
}
