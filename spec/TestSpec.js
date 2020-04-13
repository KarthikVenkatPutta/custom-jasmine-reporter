
describe("Suite 1", function() {
    var a;
    //matcher

    var matcher={
      
      
          goofy:function(util)
          {
              return {
                  compare:function(actual,expected)
                  {
                      
                    return {pass:true}
                  }
              }
          }
        }
      
     
      
      // jasmine.addMatchers(customMatchers)
   
 beforeEach(function(){
   
   
 });

    beforeAll(function(){
      jasmine.addMatchers(matcher);
      
    });

  
    it("Spec 1", function() {
     
      a = true;
      
      expect(a).toBe(true);
      
    });

    it("Spec 2", function() {
      a = true;
  
      expect(a).goofy(true);
      
    });
  });

  describe("Suite 2", function() {
    var a;
    //matcher

    var matcher={
      
      
          goofy:function(util)
          {
              return {
                  compare:function(actual,expected)
                  {
                      
                    return {pass:true}
                  }
              }
          }
        }
      
     
      
      // jasmine.addMatchers(customMatchers)
   
 beforeEach(function(){
   
   
 });

    beforeAll(function(){
      jasmine.addMatchers(matcher);
      
    });

  
    it("Spec 1", function() {
     
      a = true;
      
      expect(a).toBe(true);
      
    });

    it("Spec 2", function() {
      a = true;
  
      expect(a).goofy(true);
      
    });
  });