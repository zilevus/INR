exports.taskinit=function(req,res){
	res.render('taskinit',{title:"Task Init"});
}
exports.survey=function(req, res){
	res.render('survey', {title:"survey"});
}
exports.tasksetup=function(req, res) {
  res.render('tasksetup', {title:"Task Setup"});
}
exports.home=function(req, res) {
	res.render('home', {title:"Home"});
}
exports.videosetup=function(req, res) {
	res.render('videosetup', {title:"Video"});
}
exports.armprep=function(req, res) {
	res.render('armprep', {title:"Prep Arm"});
}
exports.preactivity=function(req, res) {
	res.render('preactivity', {title:"Push To Start"});
}
exports.activitystarted=function(req, res) {
	res.render('activitystarted', {title:"Activity In Progress"});
}
exports.thanks=function(req, res) {
	res.render('thanks', {title:"Thank You"});
}
exports.studyend=function(req, res) {
    res.render('studyend', {title:"Study Concluded"});
}
exports.workspace=function(req, res) {
		res.render('workspace', {title:"Workspace"});
}
exports.instructions=function(req, res){
		res.render('instructions', {title:"Instructions"})
}
