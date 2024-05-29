import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams = [
    {
      title: 'Technology',
      detail: 'Develop the products and tools of the future for billions of users.',
      imageURL: 'assets/img/technology.png',
      imageURL1: 'assets/img/background_technology.png',
      imageURL2: 'assets/img/Technology2.png',
      teaminfo1: 'Digix’s technology team is a global mix of top talent, revolutionizing the digital solutions landscape with a diverse tech stack. We use a variety of languages, frameworks, and tools, reflecting our commitment to staying at the forefront of technology.',
      teaminfo2: 'Our solutions enhance digital experiences for millions, presenting unique challenges that constantly drive us to innovate and improve. However, we’re not just about work. We believe in enjoying the journey, fostering a culture of collaboration, creativity, and continuous learning. We celebrate our successes and have fun along the way.',
      job1: 'Machine Learning – Staff Engineer',
      job2: 'Senior Software Engineer – Full Stack',
      job3: 'Senior Database Developer',
      job4: 'IT Support',
    },
    {
      title: 'Design',
      detail: 'Create beautiful and intuitive experiences.',
      imageURL: 'assets/img/Design.png',
      imageURL1: 'assets/img/background_design.png',
      imageURL2: 'assets/img/Design2.png',
      teaminfo1: 'At Digix Design, we believe that good design is not just about creating something aesthetically pleasing, but also about crafting exceptional and meaningful experiences. With our team of experts and creative thinkers, we are ready to guide you through a world of design that exceeds expectations.',
      teaminfo2: 'We are committed to producing work filled with creativity and innovation, ensuring that our clients receive unforgettable experiences and build long-term trust in our services.',
      job1: 'Product Design Manager',
      job2: 'UX/UI Designer',
      job3: 'Senior UX/UI Research Manager, Search',
      job4: 'Senior UX/UI Engineer, Android',
    },
    {
      title: 'Marketing & Communications',
      detail: 'Connect users to the product magic.',
      imageURL: 'assets/img/Marketing.png',
      imageURL1: 'assets/img/background_marketing.png',
      imageURL2: 'assets/img/Marketing2.png',
      teaminfo1: "At Digix Marketing, we don't just create memorable campaigns we focus on building strong relationships between brands and customers. With a team of professionals and cutting-edge strategies, we are ready to take your business confidently forward.",
      teaminfo2: 'In the rapidly changing and highly competitive digital era, having a marketing partner who understands market trends and needs is crucial. We offer comprehensive marketing services to ensure your business continues to grow sustainably and steadily.',
      job1: 'Senior Data Analyst',
      job2: 'Marketing Strategy & Analytics',
      job3: 'Investor Network Business Development Manager',
      job4: 'Senior Staff Data Scientist',
    },
    {
      title: 'Legal',
      detail: 'Deliver the analysis and insights we use to innovate.',
      imageURL: 'assets/img/Legal.png',
      imageURL1: 'assets/img/background_Legal.png',
      imageURL2: 'assets/img/Legal2.png',
      teaminfo1: "At Digix, we believe in the power of learning and creativity through internships. Providing opportunities for interns isn't just about supporting education adequately, but also about creating important opportunities for talented and enthusiastic new staff to learn and grow.",
      job1: 'Senior Payments Counsel',
      job2: 'Senior FinTech Counsel',
      job3: 'Legal Senior Director, FinTech & Payments Counsel',
      job4: 'Legal Manager',
    },
    {
      title: 'Finance',
      detail: 'Design and manage solutions to support our global business.',
      imageURL: 'assets/img/Finance.png',
      imageURL1: 'assets/img/background_finance.png',
      imageURL2: 'assets/img/Finance2.png',
      teaminfo1: 'At Digix Finance, we not only understand the importance of efficient financial management in all aspects of your business, but we are also committed to being a true partner providing genuinely beneficial financial consultation and services. With a team of skilled and experienced financial professionals, we are ready to help your business grow and achieve sustainable success.',
      teaminfo2: '',
      job1: 'Senior Finance Project Manager, SME',
      job2: 'Assistant Manager, Transfer Pricing',
      job3: 'Company Accountant',
      job4: 'Finance Lead, Payments, Finance',
    },
    {
      title: 'People',
      detail: 'Find, grow, and support the people who make Google great.',
      imageURL: 'assets/img/People.png',
      imageURL1: 'assets/img/background_people.png',
      imageURL2: 'assets/img/People2.png',
      teaminfo1: "Our team at Digix is always ready to help you create the best working experience. We believe that the power of creativity and dedication to customer service is what sets us apart. Join the Digix family, and we'll lead you to opportunities for growth and development without limits!",
      teaminfo2: "At Digix, you're not just an employee; you're part of the change we're initiating. Let's be part of making history together!",
      job1: 'Product Manager, HR Technology Solution ',
      job2: 'People Data & Automations Specialist',
      job3: 'Director, People & Culture',
      job4: 'Employee Experience Specialist',
    }
  ];

  constructor() { }

  getTeams(): Observable<any[]> {
    return of(this.teams);
  }
}
