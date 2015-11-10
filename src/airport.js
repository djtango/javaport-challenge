function Airport () {
  this.hangar = []
};

Airport.prototype.land = function(plane){
  plane.grounded();
  this.hangar.push(plane);
};

