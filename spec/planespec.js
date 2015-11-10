describe("Plane", function(){
  var plane = new Plane();

  describe("#isFlying", function(){

    it("returns the flying status", function(){
      expect(plane.isFlying()).toBe(true)
    });

  });

  describe("#grounded", function(){

    it("changes flying status to false", function(){
      plane.grounded();
      expect(plane.isFlying()).toBe(false);
      });
  });

  describe("#flying", function(){
    it("changes flying status to true", function(){
      plane.grounded();
      plane.flying();
      expect(plane.isFlying()).toBe(true);
    });
  });

});