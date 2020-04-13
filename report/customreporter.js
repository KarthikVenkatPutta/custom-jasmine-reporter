var util=require('./UtilReport');
var file=require('fs');
var reporter = {
    jasmineStarted: function(suiteInfo) {
      console.log('Execution Started..')
      //start building html
      file.appendFileSync("Result.html",util.startHTML);

      
    },
  
    suiteStarted: function(result) {
        file.appendFileSync("Result.html",util.suiteStarted(result))
    },
  
    specStarted: function(result) {
           
    },
  
    specDone: function(result) {
     
      file.appendFileSync("Result.html",util.specEnded(result))
    },
  
    suiteDone: function(result) {
      file.appendFileSync("Result.html",util.suiteEnded(result))
    },
  
    jasmineDone: function(result) {
        file.appendFileSync("Result.html",util.endHTML);
        console.log('Execution Completed!')
        console.log('Check out the HTML report--Result.html');
    }
  };
module.exports=reporter;