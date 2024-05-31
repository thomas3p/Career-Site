import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'express';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs = [    {
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
    },
    "qualifications": [
        {
            "id": 7,
            "description": "Understanding of cosmetic quality standards (e.g., defining and measuring color, specifying and measuring surface finish, creating cosmetic defect catalogs, establishing grading limits)."
        },
        {
            "id": 8,
            "description": "Expertise in many facets of mechanical manufacturing and executive leadership communication and presence."
        },
        {
            "id": 9,
            "description": "Knowledge of common surface finishing operations and mechanical bonding processes."
        },
        {
            "id": 2,
            "description": "10 years of experience enabling the transition of consumer electronics products from NPI to mass production scale."
        },
        {
            "id": 3,
            "description": "5 years of experience managing a team of Manufacturing Engineers."
        },
        {
            "id": 1,
            "description": "Bachelor's degree in Electrical, Process, or Manufacturing Engineering, or equivalent practical experience."
        },
        {
            "id": 4,
            "description": "Experience with statistical process control (e.g., Cp/CPk), Geometric Dimensioning and Tolerancing (GD&T), Gauge R&R, Design for X (DFX), and fixture design/qualification."
        },
        {
            "id": 5,
            "description": "Experience with emerging technology in the consumer electronics industry including materials and automation solutions, all traditional mechanical manufacturing processes, and insight to where trends are heading in 2 to 3 years."
        },
        {
            "id": 6,
            "description": "Experience with mechanical manufacturing processes and Materials Engineering, system integration and how they impact the manufacturing process."
        }
    ],
    "details": [
        {
            "id": 1,
            "description": "Our computational challenges are so big, complex and unique we can't just purchase off-the-shelf hardware, we've got to make it ourselves. Your team designs and builds the hardware, software and networking technologies that power all of Google's services. As a Hardware Engineer, you design and build the systems that are the heart of the world's largest and most powerful computing infrastructure. You develop from the lowest levels of circuit design to large system design and see those systems all the way through to high volume manufacturing. Your work has the potential to shape the machinery that goes into our cutting-edge data centers affecting millions of Google users."
        },
        {
            "id": 2,
            "description": "As a Supplier Development Engineering Manager, you will be responsible for leading a highly technical team of Subject Matter Experts in mechanical materials, tools, and processes. This team works closely with Architecture, Materials Engineering, Early Involvement Engineers, and suppliers to develop exceptional, innovative, and sustainable designs assessing manufacturing technologies and process development feasibility and scalability. You will develop leading edge manufacturing processes, establish process capability, and manage quality and inspection systems to consistently deliver products into Mass Production. You'll drive technical and operational leadership with a cross-functional organization for material, process, fixtures, and equipment."
        },
        {
            "id": 3,
            "description": "Google's mission is to organize the world's information and make it universally accessible and useful. Our Devices & Services team combines the best of Google AI, Software, and Hardware to create radically helpful experiences for users. We research, design, and develop new technologies and hardware to make our user's interaction with computing faster, seamless, and more powerful. Whether finding new ways to capture and sense the world around us, advancing form factors, or improving interaction methods, the Devices & Services team is making people's lives better through technology."
        },
        {
            "id": 4,
            "description": "The US base salary range for this full-time position is $159,000-$239,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process."
        },
        {
            "id": 5,
            "description": "Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google."
        }
    ],
    "responsibilities": [
        {
            "id": 1,
            "description": "Lead a team of engineers in a fast-paced and fluid environment. Collaborate proactively with cross-functional teams, including Architecture, Materials Science, Reliability, Product Operations, and ID/CMF."
        },
        {
            "id": 2,
            "description": "Establish and align on key specifications, validate process capability (Cp/Cpk), and drive process development in partnership with cross-functional teams and suppliers to fully validate new technologies."
        },
        {
            "id": 3,
            "description": "Establish outgoing/incoming quality control processes for materials/processes/design, define measurement systems, ensure correlation for data collection/analysis."
        },
        {
            "id": 4,
            "description": "Work with Reliability Engineering to develop reliability test plans for manufacturing processes that meet critical design validation and user expectations."
        },
        {
            "id": 5,
            "description": "Identify and highlight manufacturability issues during architecture builds to ensure product quality during ramp."
        }
    ]
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
    },
    "qualifications": [
        {
            "id": 11,
            "description": "Experience with analog/digital circuit design and transmission line theory."
        },
        {
            "id": 12,
            "description": "Master's degree."
        },
        {
            "id": 10,
            "description": "Bachelor’s degree in Electrical Engineering, Computer Engineering, Physics, a related field, or equivalent practical experience."
        },
        {
            "id": 13,
            "description": "3 years of experience in video centric type of consumer electronic products with solid"
        },
        {
            "id": 14,
            "description": "engineering fundamentals (e.g., signal/power integrity, layout practices, and understanding of basic components)."
        },
        {
            "id": 15,
            "description": "Understanding of image sensor/camera modules, mobile SoC platform, and other subsystems."
        },
        {
            "id": 16,
            "description": "Ability to be comfortable in the lab with general lab equipment (e.g., DMM, scope, network analyzer, spectrum analyzer, E-load, etc.) and have competency in Python for writing scripts for automating validation and general testing."
        }
    ],
    "details": [
        {
            "id": 6,
            "description": "Our computational challenges are so big, complex and unique we can't just purchase off-the-shelf hardware, we've got to make it ourselves. Your team designs and builds the hardware, software and networking technologies that power all of Google's services. As a Hardware Engineer, you design and build the systems that are the heart of the world's largest and most powerful computing infrastructure. You develop from the lowest levels of circuit design to large system design and see those systems all the way through to high volume manufacturing. Your work has the potential to shape the machinery that goes into our cutting-edge data centers affecting millions of Google users."
        },
        {
            "id": 7,
            "description": "Google's mission is to organize the world's information and make it universally accessible and useful. Our Devices & Services team combines the best of Google AI, Software, and Hardware to create radically helpful experiences for users. We research, design, and develop new technologies and hardware to make our user's interaction with computing faster, seamless, and more powerful. Whether finding new ways to capture and sense the world around us, advancing form factors, or improving interaction methods, the Devices & Services team is making people's lives better through technology."
        },
        {
            "id": 8,
            "description": "The US base salary range for this full-time position is $102,000-$150,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process."
        },
        {
            "id": 9,
            "description": "Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google."
        }
    ],
    "responsibilities": [
        {
            "id": 6,
            "description": "Oversee schematic and the electrical layout to ensure that the image sensor performance, reliability with other systems is robust as well as meeting DFM."
        },
        {
            "id": 7,
            "description": "Design test hardware such as adapters, flex cable peripherals to enable internal validation."
        },
        {
            "id": 8,
            "description": "Perform validation on bench for the camera sub-system including electrical testing and image sensor image analysis."
        },
        {
            "id": 9,
            "description": "Write scripts to automate testing or to facilitate system level stress tests."
        },
        {
            "id": 10,
            "description": "Triage and/or debug issues that arise during development."
        }
    ]
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
    },
    "qualifications": [
        {
            "id": 17,
            "description": "Bachelor's degree in Computer Science, a related technical field, or equivalent practical experience."
        },
        {
            "id": 18,
            "description": "8 years of experience in debugging/troubleshooting, systems administration, and networking or infrastructure design."
        },
        {
            "id": 19,
            "description": "5 years of experience with managing technical work, driving engineering strategy and roadmap, and 3 years of experience in a people management, supervision/team leadership role."
        },
        {
            "id": 20,
            "description": "Experience with building/running monitoring pipelines."
        },
        {
            "id": 21,
            "description": "Ability to debug, optimize code and automate routine tasks."
        }
    ],
    "details": [
        {
            "id": 10,
            "description": "Systems Development Engineering (SDE) at Google is a role where you manage services and systems at scale. SDEs creatively put their engineering discipline to use automating the mundane and reducing toil. We don’t just write code to fix bugs, but emphasize the development of tools and solutions that fix classes of problems. We know it’s hard to control what you can’t measure – so we focus on observability: instrumenting first, then turning data into knowledge, and finally knowledge into action. We know that the operational efficiency of Google systems, services, virtual compute environments and the operating systems that power them impact the environment, not just the bottom line. We know that working together we can do more, and that community matters.\r\n"
        },
        {
            "id": 11,
            "description": "Google brings together people with a wide variety of backgrounds, experiences and perspectives. We encourage them to collaborate, think big and take risks in a blame-free environment. We promote self-direction to work on meaningful projects, while we also strive to create an environment that provides the support and mentorship needed to learn and grow."
        },
        {
            "id": 12,
            "description": "Together we engineer and build the infrastructure, tools, access and telemetry for systems that enable orchestration of Google-scale services. Come build things that matter."
        },
        {
            "id": 13,
            "description": "Bare Metal Solution provides a Google Cloud Platform (GCP) service that allows customers to run their enterprise workloads on traditional servers in colocation spaces adjacent to GCP, providing the capability to the enterprise customers to exit their data centers and migrate to the Google Cloud with all the workloads. The team builds the service that is integrated with GCP allowing customers to have consistent experiences with servers."
        },
        {
            "id": 14,
            "description": "Google Cloud accelerates every organization’s ability to digitally transform its business and industry. We deliver enterprise-grade solutions that leverage Google’s cutting-edge technology, and tools that help developers build more sustainably. Customers in more than 200 countries and territories turn to Google Cloud as their trusted partner to enable growth and solve their most critical business problems."
        }
    ],
    "responsibilities": [
        {
            "id": 11,
            "description": "Set technical strategy and direction for a project or team. Build and develop a team in the Bengaluru office."
        },
        {
            "id": 12,
            "description": "Refine the strategy for building and supporting features for customers."
        },
        {
            "id": 13,
            "description": "Be in a 24/7 on-call to help triage/troubleshoot issues in the production environment and customer on-boarding."
        },
        {
            "id": 14,
            "description": "Communicate/Negotiate to build consensus and influence leadership and partners."
        }
    ]
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
    },
    "qualifications": [
        {
            "id": 54,
            "description": "Experience using motion to reduce perceived latency."
        },
        {
            "id": 56,
            "description": "Ability to fuse creativity and code to deliver cutting edge interactions, using motion to a narrative effect and understanding the future of interactive motion."
        },
        {
            "id": 55,
            "description": "Understanding of basic principles of animation, and experience with using animation tools (e.g., After Effects or similar)."
        },
        {
            "id": 53,
            "description": "3 years of experience working in a complex, cross-functional organization. 2 years of experience leading design projects. 1 year of experience working with executive leaders."
        },
        {
            "id": 52,
            "description": "8 years of experience in product design or UX."
        },
        {
            "id": 51,
            "description": "Master's degree in Design, Human-Computer Interaction, Computer Science, a related field, or equivalent practical experience."
        },
        {
            "id": 50,
            "description": "Include a portfolio, website, or any other relevant link to your work in your resume (providing a viewable link and/or access instructions)."
        },
        {
            "id": 49,
            "description": "Motion design experience related to physics, patterns, and visual design elements."
        },
        {
            "id": 48,
            "description": "6 years of experience in product design or UX."
        },
        {
            "id": 47,
            "description": "Bachelor's degree in Design, Human-Computer Interaction, Computer Science, a related field, or equivalent practical experience."
        }
    ],
    "details": [
        {
            "id": 35,
            "description": "Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google."
        },
        {
            "id": 30,
            "description": "At Google, we follow a simple but vital premise: \"Focus on the user and all else will follow.\" Google’s Motion Designers collaborate with cross-functional partners to create desirable and relevant product experiences that consistently elevate the Google brand. They help people make sense of their world by choreographing experiences that feel fluid, natural, and informative."
        },
        {
            "id": 31,
            "description": "Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. The UX team plays an integral part in gathering insights about the attitudes, emotions, and behaviors of people who use our products to inspire and inform design. We collaborate closely with each other and with engineering and product management to create industry-leading products that deliver value for the people who use them, and for Google’s businesses."
        },
        {
            "id": 32,
            "description": "As a Motion Designer, you’ll apply your passion for animation to simplify complex interactions and solve challenging design problems. You’ll help define and implement Google’s motion design language and you’ll think critically about how motion reinforces Google’s UX brand, enhances interactivity, and delights our users."
        },
        {
            "id": 33,
            "description": "Google Photos is a photo sharing and storage service developed by Google. Photos is one of the most sought after products at Google and is looking for both client-side (web and mobile), with server-side (search, storage, serving) and machine intelligence (learning, computer vision) Software Engineers. We are dedicated to making Google experiences centered around the user."
        },
        {
            "id": 34,
            "description": "The US base salary range for this full-time position is $142,000-$211,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process."
        }
    ],
    "responsibilities": [
        {
            "id": 32,
            "description": "Create high quality design proposals and drive projects from concept to iterations and implementation."
        },
        {
            "id": 30,
            "description": "Define and implement the look and feel of Google products through motion design."
        },
        {
            "id": 31,
            "description": "Provide patterns, best practices and guidance on animation and transitions for different devices (such as TV, tablets, wearables, mobile, etc.) and platforms (such as web, Android, iOS, etc.)."
        }
    ]
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
    },
    "qualifications": [
        {
            "id": 41,
            "description": "15 years of experience leading multi-disciplinary UX teams."
        },
        {
            "id": 42,
            "description": "Portfolio of product design work with evidence of impact at scale."
        },
        {
            "id": 43,
            "description": "PhD in Human-Computer Interaction, Visual Design, Interaction Design, UX, Cognitive Science, Experimental Psychology, Anthropology, Information Science, or a related field."
        },
        {
            "id": 44,
            "description": "Experience in enterprise roles in the commerce/payments space."
        },
        {
            "id": 45,
            "description": "Experience leading multi-disciplinary UX teams."
        },
        {
            "id": 46,
            "description": "Outstanding leadership skills, and ability to lead UX in an ambiguous and technical space, working to define methods and approaches."
        },
        {
            "id": 40,
            "description": "Bachelor’s degree in Design (e.g., graphic, interaction, industrial, architecture, etc.) or equivalent practical experience."
        }
    ],
    "details": [
        {
            "id": 26,
            "description": "As the Director of UX, you will lead a global team of UX designers and writers to create the next-generation of payment experiences for first-party Google products. You'll drive collaboration, transparency, and clarity between multiple product areas and functions, while fostering a culture of user-centric design. You will create simple, elegant, and reusable payment patterns that scale across numerous design languages, products, and surfaces."
        },
        {
            "id": 27,
            "description": "Whether it is paying online with Autofill, using tap and pay in stores, or using the Google Pay app, the Payments team at Google is focused on making payments simple, seamless, and secure. In addition to consumer payment technologies, the Payments team also powers the money movement between Google and its consumers and businesses."
        },
        {
            "id": 28,
            "description": "The US base salary range for this full-time position is $253,000-$363,000 + bonus + equity + benefits. Our salary ranges are determined by role, level, and location. The range displayed on each job posting reflects the minimum and maximum target salaries for the position across all US locations. Within the range, individual pay is determined by work location and additional factors, including job-related skills, experience, and relevant education or training. Your recruiter can share more about the specific salary range for your preferred location during the hiring process."
        },
        {
            "id": 29,
            "description": "Please note that the compensation details listed in US role postings reflect the base salary only, and do not include bonus, equity, or benefits. Learn more about benefits at Google."
        }
    ],
    "responsibilities": [
        {
            "id": 28,
            "description": "Partner with UX and cross-functional teams across Google to develop consistent and insights-informed best practices, and build communities of UX practice."
        },
        {
            "id": 29,
            "description": "Plan, allocate, and advocate for resources across the team’s primary areas of responsibility, working with leadership to ensure prioritization and alignment across the wider Payments team. "
        },
        {
            "id": 25,
            "description": "Lead, grow, and manage a team of User Experience Designers and Content Writers developing design and product solutions for payments-related products."
        },
        {
            "id": 26,
            "description": "Partner with Engineering, Product Management, and cross-functional leadership to develop strategy, perspective, and narrative around user needs that is high craft, consistent, and user friendly. Develop strategies for communicating user insights and design solutions that build conviction and influence decision making at the executive level."
        },
        {
            "id": 27,
            "description": "Prioritize UX in conjunction with our partners, and raise the quality bar for design methods/communication within the team and across Google."
        }
    ]
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
    },
    "qualifications": [
        {
            "id": 35,
            "description": "3 years of experience leading design projects and managing people or teams."
        },
        {
            "id": 33,
            "description": "Bachelor's degree in Design, Human-Computer Interaction, Computer Science, a related field, or equivalent practical experience."
        },
        {
            "id": 34,
            "description": "8 years of experience in product design or UX."
        },
        {
            "id": 36,
            "description": "Master's degree in Design, Human-Computer Interaction, Computer Science, a related field, or equivalent practical experience."
        },
        {
            "id": 37,
            "description": "5 years of experience working in a complex, cross-functional organization."
        },
        {
            "id": 38,
            "description": "3 years of work experience working with executive leaders."
        },
        {
            "id": 39,
            "description": "Knowledge of design systems and their contemporary trends/usage with experience in designing across a range of products/services."
        }
    ],
    "details": [
        {
            "id": 25,
            "description": "At YouTube, we believe that everyone deserves to have a voice, and that the world is a better place when we listen, share, and build community through our stories. We work together to give everyone the power to share their story, explore what they love, and connect with one another in the process. Working at the intersection of cutting-edge technology and boundless creativity, we move at the speed of culture with a shared goal to show people the world. We explore new ideas, solve real problems, and have fun — and we do it all together."
        },
        {
            "id": 21,
            "description": "At Google, we follow a simple but vital premise: \"Focus on the user and all else will follow.\" Google’s UX leaders help define and drive the future of Google design. They create and clarify product strategy, conceptualize UX ecosystems in ways that mitigate complexity, and inspire teams to push the boundaries of what’s possible. They possess a clear vision of the future of user experience and have the courage to pursue forward-thinking design."
        },
        {
            "id": 22,
            "description": "Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. You are a thoughtful team leader, manager, systems-level design thinker, and visionary - with strong instincts and outstanding intuition informed by user needs and insights. You'll be responsible for guiding the careers of your team members, working closely with each of them to help them realize their full potential."
        },
        {
            "id": 23,
            "description": "UX Design Managers are fierce advocates for the people who use our products as well as the members of their teams. They have a practiced eye for effective design, and are committed to creating elegantly simple user experiences from otherwise complex workflows."
        },
        {
            "id": 24,
            "description": "In this role, you’ll take the time to understand not just the execution side of UX, but also the business aspects of the products we build. You’ll collaborate with leaders of other UX, Engineering, and Product Management teams to create innovative experiences across all of Google’s products, leveraging your passion for brand, craft, and design quality."
        }
    ],
    "responsibilities": [
        {
            "id": 23,
            "description": "Deliver improvements in design based on UX testing and stakeholder input and provide guidance and expertise to effectively engage stakeholders on product design to achieve product goals. "
        },
        {
            "id": 24,
            "description": "Drive project priorities in alignment with larger project goals, and coordinate allocation of resources within the design project and guide team members to develop individual OKRs. "
        },
        {
            "id": 20,
            "description": "Influence stakeholders across functions to gain support for design strategies.  "
        },
        {
            "id": 21,
            "description": "Drive the development of innovative design solutions to user, product, and business problems. "
        },
        {
            "id": 22,
            "description": "Drive a holistic design process, design system, or design language across teams or products. "
        }
    ]
},
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
    },
    "qualifications": [
        {
            "id": 32,
            "description": "Knowledge of different research methods, including when and how to apply them during the product development process."
        },
        {
            "id": 31,
            "description": "Experience communicating user research findings with cross-functional partners to drive impact."
        },
        {
            "id": 30,
            "description": "Experience in a variety of product spaces, applied research, or academic settings."
        },
        {
            "id": 29,
            "description": "3 years of experience managing projects in an organization."
        },
        {
            "id": 28,
            "description": "5 years of experience conducting UX research on products and working with executive leadership."
        },
        {
            "id": 27,
            "description": "Master's or PhD degree in Human-Computer Interaction, Cognitive Science, Statistics, Psychology, Anthropology, or related field."
        },
        {
            "id": 26,
            "description": "Include a portfolio, website, or any other relevant link to your work in your resume (providing a viewable link or access instructions)."
        },
        {
            "id": 25,
            "description": "Experience with product research in a usability or generative setting."
        },
        {
            "id": 24,
            "description": "Experience with research design utilizing various methods (e.g., usability studies, contextual inquiry, surveys, etc.)."
        },
        {
            "id": 23,
            "description": "5 years of experience in an applied research setting, or similar."
        },
        {
            "id": 22,
            "description": "Bachelor's degree in Human-Computer Interaction, Cognitive Science, Statistics, Psychology, Anthropology, related field, or equivalent practical experience."
        }
    ],
    "details": [
        {
            "id": 15,
            "description": "At Google, we follow a simple but vital premise: \"Focus on the user and all else will follow.\" User Experience Researchers (UXRs) make this possible."
        },
        {
            "id": 16,
            "description": "Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. The UX team plays an integral part in gathering insights about the needs, attitudes, emotions, and behaviors of people who use our products to inspire and inform design. We collaborate closely with each other and with engineering and product management to create industry-leading products that deliver value for the people who use them, and for Google’s businesses.\r\n"
        },
        {
            "id": 17,
            "description": "As a User Experience Researcher (UXR), you’ll help your team of UXers, product managers, and engineers understand user needs. You’ll work with stakeholders across functions and levels and have impact at all stages of product development. You’ll play a critical role in creating useful, usable, and delightful products. You’ll explore user behaviors and motivations by conducting primary research such as field studies, interviews, diary studies, participatory workshops, ethnography, surveys, usability testing, and logs analysis."
        },
        {
            "id": 18,
            "description": "The UXR community at Google is unique and will help you do your best work. You’ll have the opportunity to work with and learn from UXRs across Google through regular meetups, mentor programs, and access to internal research tools."
        },
        {
            "id": 19,
            "description": "The Creator Support team designs and builds products to support creators at scale through authoritative data, internal tools, creator facing products, and advanced technologies like Generative-AI virtual help assistants. The team strives to make interactions easy, helpful, and empowering."
        },
        {
            "id": 20,
            "description": "At YouTube, we believe that everyone deserves to have a voice, and that the world is a better place when we listen, share, and build community through our stories. We work together to give everyone the power to share their story, explore what they love, and connect with one another in the process. Working at the intersection of cutting-edge technology and boundless creativity, we move at the speed of culture with a shared goal to show people the world. We explore new ideas, solve real problems, and have fun — and we do it all together."
        }
    ],
    "responsibilities": [
        {
            "id": 17,
            "description": "Work with Designers, Product Managers, Engineers and other UX Researchers to prioritize research opportunities in a fast-paced changing environment."
        },
        {
            "id": 19,
            "description": "Advocate research findings to diverse audiences through written reports and in-person presentations."
        },
        {
            "id": 15,
            "description": "Conduct independent research on multiple aspects of products and experiences."
        },
        {
            "id": 16,
            "description": "Collect and analyze user behavior through lab studies, field visits, ethnography, surveys, benchmark studies, server logs and online experiments (e.g., A/B testing)."
        },
        {
            "id": 18,
            "description": "Understand and incorporate technical and business requirements into research."
        }
    ]
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
    },
    "qualifications": [],
    "details": [],
    "responsibilities": []
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
    },
    "qualifications": [],
    "details": [],
    "responsibilities": []
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
    },
    "qualifications": [],
    "details": [],
    "responsibilities": []
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
    },
    "qualifications": [],
    "details": [],
    "responsibilities": []
},
{
    "id": 20,
    "title": "Account Manager, Ad Sales",
    "team": {
        "id": 6,
        "tag_name": "Finance"
    },
    "location": {
        "id": 1,
        "tag_name": "Bangkok"
    },
    "type": {
        "id": 1,
        "tag_name": "Regular"
    },
    "qualifications": [],
    "details": [],
    "responsibilities": []
}]
  constructor(private http:HttpClient) { 
    
  }
  getjob(){
    return this.jobs
  }

  getJobById(id: any): any {
    let num:number = +id
    return this.jobs.find(job => job.id === num);
  }
}
