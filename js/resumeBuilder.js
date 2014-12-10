/* General biographical information. */

var bio = {
  "name": "Barry Peddycord III",
  "role": "Research Assistant",
  "bioPic": "http://isharacomix.org/img/barry_avatar.png",
  "welcome": "Hello world!",
  "skills": ["Python","Javascript","Django"],
  "contacts":
  {
     "email": "ishara@isharacomix.org",
     "github": "isharacomix",
     "twitter": "@isharacomix",
     "location": "Raleigh, NC"
  }
}


/* Work information */
var work = {
  "jobs" : [
    {
      "employer": "North Carolina State University",
      "title": "Teaching and Research Assistant",
      "dates": "2011-present",
      "city": "Raleigh, NC, US",
      "description": "Teacher and researcher"
    }
  ]
}


/* School information */
var education = {
  "schools" : [
    {
      "name": "North Carolina State University",
      "city": "Raleigh, NC, US",
      "degree": "Master of Science",
      "majors": ["computer science"],
      "year": 2014,
      "url": "http://csc.ncsu.edu"
    },
    {
      "name": "North Carolina State University",
      "city": "Raleigh, NC, US",
      "degree": "Bachelor of Science",
      "majors": ["computer science"],
      "year": 2011,
      "url": "http://csc.ncsu.edu"
    }
  ],
  "MOOCs" : [
    {
      "name": "Games without Chance: Combinatorial Game Theory",
      "completed": "March 2014",
      "school": "Coursera",
      "instructor": "Tom Morley",
      "url": "https://www.coursera.org/course/cgt"
    },
    {
      "name": "Internet History, Technology, and Security",
      "completed": "March 2014",
      "school": "Coursera",
      "instructor": "Charles Severance",
      "url": "https://www.coursera.org/learn/insidetheinternet"
    },
    {
      "name": "Gamification",
      "completed": "May 2013",
      "school": "Coursera",
      "instructor": "Kevin Werbach",
      "url": "https://www.coursera.org/learn/gamification"
    }
  ]
}


var projects = {
  "projects":[
    {
      "title": "#8bitmooc",
      "dates": "2012-2013",
      "description": "Make NES games",
      "images": [
        "http://isharacomix.org/img/barry_avatar.png"
      ]
    }

  ]
}



/* Push things to the web page now! */
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data",bio.welcome);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
