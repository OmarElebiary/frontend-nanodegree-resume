var bio = {
	"name": "Omar Elebiary",
	"role": "Full Stack Developer",
	"contacts":{
		"email":"es-omar.khairy1217@alexu.edu.eg",
		"mobile": "0000000000",
		"github": "OmarElebiary",
		"location": "Alexandria"
	},
	"welcomeMessage": "Welcome to my Resume!",
	"skills":[
		"Self-learning","Fast learner","Hard working"
	],
	"biopic": "images/pp.jpg",
	"display": function(){
	var Name = HTMLheaderName.replace("%data%",bio['name']);
	$("#header").append(Name);
	var Role = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(Role);
	var pic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(pic);
	var c = HTMLcontactGeneric.replace("%contact%","Mobile").replace("%data%",bio.contacts.mobile);
	c += HTMLcontactGeneric.replace("%contact%","Email").replace("%data%",bio.contacts.email);
	c += HTMLcontactGeneric.replace("%contact%","Github").replace("%data%",bio.contacts.github);
	c += HTMLcontactGeneric.replace("%contact%","Location").replace("%data%",bio.contacts.location);
	//c += HTMLcontactGeneric.replace("%contact%","").replace("%data%",bio.welcomeMessage);
	$("#header").append(c);
	$("#footerContacts").append(c);
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		var s = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(s);
	}
	}
}
bio.display();
var education = {
	"schools":[
		{
			"name": "Faculty of Engineering, Alexandria University",
			"location": "Alexandria",
			"degree":"BA",
			"major":["Civil Engineering"],
			"date":"September-2013 - Present",
			"url":" "
		}
	],
	"onlineCourses":[
		{
			"title": "Intro to Computer Science",
			"school":"Udacity",
			"date": "March-2016 - Present",
			"url":"https://www.udacity.com/course/intro-to-computer-science--cs101"
		},
		{
			"title":"Front-end Developer Nanodegree",
			"school":"Udacity",
			"date":"March-2016 - Present",
			"url": "https://www.udacity.com/degrees/front-end-web-developer-nanodegree--nd001"
		}
	],
	"display": function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		formattedSchool += HTMLschoolLocation.replace("%data%",education.schools[school].location);
		formattedSchool += HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		formattedSchool += HTMLschoolDates.replace("%data%",education.schools[school].date);
		formattedSchool += HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchool);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var course in education.onlineCourses){
		var formattedCourses = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		formattedCourses += HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		formattedCourses += HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
		formattedCourses += HTMLonlineURL.replace("#",education.onlineCourses[course].url).replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourses);
	}
	}
}
education.display();
var work = {
	"jobs":[
		{
			"employer":"Lorem Ipsum",
			"title":"Lorem Ipsum",
			"location":"Taba",
			"dates": "DEC-2016",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dignissim orci. "
		}
	],
	"display" : function() {
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates).append(formattedDescription);
	}
	}
}
work.display();
var projects = {
	"projects":[
		{
			"title":"Lorem Ipsum",
			"dates":"DEC-2016",
			"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dignissim orci. Vivamus euismod ligula justo, nec ultrices dui tempor sit amet. Donec vel pharetra lectus. Ut tempus mi non iaculis bibendum. Curabitur vitae varius risus. Aliquam ullamcorper erat id purus ornare, vitae auctor tellus suscipit. Fusce feugiat porttitor arcu, dictum fermentum ipsum bibendum sit amet. Curabitur volutpat dictum justo, nec vestibulum erat ultrices pellentesque. Suspendisse vel augue dignissim, fermentum enim id, sagittis neque.",
			"images":["images/project.png"]
		}
	],
	"display": function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedDescription).append(formattedImage);

	}
	}
}
projects.display();
$("#mapDiv").append(googleMap);
