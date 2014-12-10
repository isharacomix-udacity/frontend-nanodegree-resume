/* General biographical information. */

var bio = {
  "name": "Barry Peddycord III",
  "role": "Research Assistant",
  "pictureURL": "http://isharacomix.org/img/barry_avatar.png",
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
  "positions" : [
    {
      "position": "Research Assistant",
      "employer": "North Carolina State University",
      "years": "2011-present",
      "city": "Raleigh, NC, US"
    }
  ]
}


/* School information */
var education = {
  "schools" : [
    {
      "name": "North Carolina State University",
      "city": "Raleigh, NC, US",
      "degree": "Bachelor of Science",
      "majors": ["computer science"],
      "year": 2011
    },
    {
      "name": "North Carolina State University",
      "city": "Raleigh, NC, US",
      "degree": "Master of Science",
      "majors": ["computer science"],
      "year": 2014
    }
  ],
  "MOOCs" : [
    {
      "name": "Games without Chance: Combinatorial Game Theory",
      "completed": "March 2014",
      "site": "Coursera",
      "instructor": "Tom Morley",
      "url": "https://www.coursera.org/course/cgt"
    },
    {
      "name": "Internet History, Technology, and Security",
      "completed": "March 2014",
      "site": "Coursera",
      "instructor": "Charles Severance",
      "url": "https://www.coursera.org/learn/insidetheinternet"
    },
    {
      "name": "Gamification",
      "completed": "May 2013",
      "site": "Coursera",
      "instructor": "Kevin Werbach",
      "url": "https://www.coursera.org/learn/gamification"
    }
  ]
}


var projects = {


}



/* Push things to the web page now! */
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data",bio.welcome);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
