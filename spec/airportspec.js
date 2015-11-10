describe("Airport", function(){
  var airport = new Airport();
  var plane = new Plane();

  describe("#land", function(){

    it("calls grounded on the plane", function(){
      // spyOn(plane, "grounded");
      // airport.land(plane);
      airport.land(plane);
      expect(plane.isFlying()).toBe(false);
    });

  });

});