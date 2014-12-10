var skills = ["Python","Javascript","Django"];
var bio = {
  "name": "Barry Peddycord III",
  "role": "Research Assistant",
  "pictureURL": "http://isharacomix.org/img/barry_avatar.png",
  "welcome": "Hello world!",
  "skills": skills
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

var formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelcome = HTMLWelcomeMsg.replace("%data",bio.welcome);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
