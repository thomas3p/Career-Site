import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../Service/teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  title: string = '';
  teaminfo1: string = '';
  teaminfo2: string = '';
  teaminfo3: string = '';
  imageURL1: string = '';
  imageURL2: string = '';
  job1: string = '';
  job2: string = '';
  job3: string = '';
  job4: string = '';

  blogs = [
    { image: '/assets/img/Blogs1.png', alt: 'Global impact image', author: 'Emma Stone', content: 'I have had the experience of working at Digix. The work atmosphere there is authentic and creative. There are opportunities to work on challenging and interesting projects. However, sometimes there is unclear communication among the team and uncertainty about the direction of future development.' },
    { image: '/assets/img/Blogs2.png', alt: 'Fueled to produce image', author: 'Nathan Evans', content: 'I have had the opportunity to work at Digix for up to 5 years and feel that Digix is a workplace that values employee development highly. There are continuous opportunities for learning and skill enhancement. The work environment is friendly and pleasant, with opportunities to collaborate with highly skilled and creative teams.' },
    { image: '/assets/img/Blogs3.png', alt: 'Fun day image', author: 'Sophia Parker', content: ' I see Digix as a company with strong organizational culture and creativity. There are opportunities to work with diverse clients and projects. However, there are sometimes management changes that can cause confusion.' },
    { image: '/assets/img/Blogs4.png', alt: 'Fun day image', author: 'Olivia Williams', content: 'Working at Digix has been an incredible experience. The team here is agile and highly innovative. The work environment is authentic and filled with positive energy. Working on cutting-edge projects has accelerated my learning and growth tremendously. Moreover, the company genuinely cares about its employees, offering great benefits and ample opportunities for self-development. Highly recommended!' },
    { image: '/assets/img/Blogs5.png', alt: 'Fun day image', author: 'Benjamin Johnson', content: "Digix provides an opportunity to work on challenging and exciting projects. The team is highly capable and collaborative, fostering a culture of creativity. I've learned and developed my skills significantly during my time here. The work environment is genuine and filled with innovative ideas. Additionally, there are continuous learning and development opportunities available. I've been able to create limitless growth opportunities for myself here." },
    { image: '/assets/img/Blogs6.png', alt: 'Fun day image', author: 'Alexander Smith', content: "Digix is the best place I've ever worked. The work environment is filled with enthusiasm and warmth from colleagues. The team here is talented and expertise in their respective fields. I've received great support and skill development from management and coworkers alike. Furthermore, the welfare program at Digix is impressive, contributing to a balanced and enjoyable work atmosphere." }
  ];

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  constructor(private route: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
        this.title = title;

        // Fetch team data based on title from TeamsService
        this.teamsService.getTeams().subscribe(teams => {
            const team = teams.find(t => t.title === title);
            if (team) {
                this.teaminfo1 = team.teaminfo1;
                this.teaminfo2 = team.teaminfo2;
                this.teaminfo3 = team.teaminfo3;
                this.imageURL1 = team.imageURL1;
                this.imageURL2 = team.imageURL2;
                this.job1 = team.job1;
                this.job2 = team.job2;
                this.job3 = team.job3;
                this.job4 = team.job4;
            }
        });
    }
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