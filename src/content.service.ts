import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    constructor() { }
    private content = [
        {
            contentId: 1,
            type: "Summer Internship",
            duration: "8-10 weeks, May - June",
            text: "Agoda’s Summer Internship Program is an opportunity like no other. Not only will you gain hands-on work experience at one of Asia’s leading tech companies, but you’ll also meet like-minded people, build valuable skills, and discover new passions through a curated learning program. Our 8-week paid internship program is the perfect way to kick-start your career.",
        },
        {
            contentId: 2,
            type: "Off-Cycle Internship",
            duration: "4 – 16 weeks, August – April",
            text: "Our internship opportunities aren’t just limited to the summertime. Agoda’s off-cycle internship program allows you to work with us at any time of the year. Plus, we’re open to part-time interns, because we understand that your study schedules are packed!",
        },


        {
            contentId: 3,
            type: "Cooperative Internship",
            duration: "4 – 12 months, all-year-round",
            text: "The cooperative internship (co-op) program offers full-time work opportunities for up to a year. You’ll complete your degree requirements and set yourself up for success in a technical career",
        }
    ];


    getContent() {
        return of(this.content);
    }

    getContentById(contentId: number) {
        const content = this.content.find(x => x.contentId === contentId)
        console.log("🚀 ~ ProductService ~ getProductById ~ product:", content)
        return of(content)
    }

}





