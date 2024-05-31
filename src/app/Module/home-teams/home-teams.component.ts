import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from 'src/app/Service/teams.service';

@Component({
  selector: 'app-home-teams',
  templateUrl: './home-teams.component.html',
  styleUrls: ['./home-teams.component.scss']
})
export class HomeTeamsComponent implements OnInit {
  cardData: any[] = [];

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) { }

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

  slide(direction: number) {
    const slider = this.slider.nativeElement;
    const scrollAmount = slider.clientWidth * direction; // Ensure full visibility
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
  }
}

