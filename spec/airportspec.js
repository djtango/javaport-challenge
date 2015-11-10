describe("Airport", function(){
  var airport = new Airport();
  var plane = new Plane();

  describe("#land", function(){

    it("calls grounded on the plane", function(){
      spyOn(plane, "grounded");
      airport.land(plane);
      expect(plane.grounded).toHaveBeenCalled();
    });

    it("puts the plane in the hangar", function(){
      // var plane1 = jasmine.createSpy('plane1');
      airport.land(plane);
      expect(airport.hangar[0]).toBe(plane)
    });

    it("has hangar as a readable attribute", function(){
      expect(airport.hangar[0]).toBe(nil)
    })

  });

});