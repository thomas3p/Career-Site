import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContentService {
    constructor() { }
    private content = [
        {
            contentId:1,
            type: "Summer Internship",
            duration: "8-10 weeks, May - June",
            join_link_text: "Join Now",
        },
        {
            contentId:2,
            type: "Off-Cycle Internship",
            duration: "4 – 16 weeks, August – April",
            oin_link_text: "Join Now",
        },


        {
            contentId:3,
            type: "Cooperative Internship",
            duration: "4 – 12 months, all-year-round",
            join_link_text: "Join Now",
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





