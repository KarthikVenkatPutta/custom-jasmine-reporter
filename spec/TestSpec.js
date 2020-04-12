
describe("A suite is just a function", function() {
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

  
    it("and so is a spec", function() {
     
      a = true;
      
      expect(a).toBe(true);
      
    });

    it("goofytest", function() {
      a = true;
  
      expect(a).goofy(true);
      
    });
  });