function Plane(){

};

Plane.prototype = {
  flyingStatus: true,
  isFlying: function(){
    return this.flyingStatus;
  },
  grounded: function(){
    this.flyingStatus = false
  },
  flying: function(){
    this.flyingStatus = true
  }
};
