function Airport () {

};

Airport.prototype.land = function(plane){
  plane.grounded();
}