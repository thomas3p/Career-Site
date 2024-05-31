import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs = [
    {
        "id": 10,
        "title": "Senior UX Researcher, YouTube",
        "team": {
            "id": 1,
            "tag_name": "Design"
        },
        "location": {
            "id": 3,
            "tag_name": "Chiang Mai"
        },
        "type": {
            "id": 2,
            "tag_name": "WFH"
        }
    },
    {
        "id": 9,
        "title": "Senior UX Manager, Youtube Create",
        "team": {
            "id": 1,
            "tag_name": "Design"
        },
        "location": {
            "id": 3,
            "tag_name": "Chiang Mai"
        },
        "type": {
            "id": 4,
            "tag_name": "Intern"
        }
    },
    {
        "id": 8,
        "title": "Design Director, UX, Payments Platform",
        "team": {
            "id": 1,
            "tag_name": "Design"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 4,
            "tag_name": "Intern"
        }
    },
    {
        "id": 7,
        "title": "Senior Motion Designer, Google Photos",
        "team": {
            "id": 1,
            "tag_name": "Design"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 2,
            "tag_name": "WFH"
        }
    },
    {
        "id": 15,
        "title": "Product Manager II, Google Cloud Business Platforms",
        "team": {
            "id": 2,
            "tag_name": "Marketing"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 1,
            "tag_name": "Regular"
        }
    },
    {
        "id": 14,
        "title": "Market Responsibility Specialist, Trust and Safety, YouTube",
        "team": {
            "id": 2,
            "tag_name": "Marketing"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 1,
            "tag_name": "Regular"
        }
    },
    {
        "id": 17,
        "title": "Customer Acquisition Lead, Google Cloud",
        "team": {
            "id": 3,
            "tag_name": "Sale, Service & Support"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 1,
            "tag_name": "Regular"
        }
    },
    {
        "id": 16,
        "title": "Analytics and Growth Consultant (English, Mandarin)",
        "team": {
            "id": 3,
            "tag_name": "Sale, Service & Support"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 1,
            "tag_name": "Regular"
        }
    },
    {
        "id": 6,
        "title": "System Developing Engineering Manager, Baremetal Regional Extensions",
        "team": {
            "id": 4,
            "tag_name": "Technology"
        },
        "location": {
            "id": 3,
            "tag_name": "Chiang Mai"
        },
        "type": {
            "id": 4,
            "tag_name": "Intern"
        }
    },
    {
        "id": 1,
        "title": "Supplier Development Engineering Manager, NUDD",
        "team": {
            "id": 4,
            "tag_name": "Technology"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 4,
            "tag_name": "Intern"
        }
    },
    {
        "id": 5,
        "title": "Camera Electrical Engineer",
        "team": {
            "id": 4,
            "tag_name": "Technology"
        },
        "location": {
            "id": 1,
            "tag_name": "Bangkok"
        },
        "type": {
            "id": 1,
            "tag_name": "Regular"
        }
    }
]
  constructor(private http:HttpClient) { 
    
  }
  getjob(){
    return this.jobs
  }
  edtitjob(job:any){
    this.jobs = job
  }
}
