var util=require('../../UtilReport');
var file=require('fs');
var myReporter = {
    jasmineStarted: function(suiteInfo) {
      console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
      console.log('itsfun ' + suiteInfo.totalSpecsDefined);
      //start building html
      file.appendFileSync("Result.html",util.startHTML);

      
    },
  
    suiteStarted: function(result) {
      console.log('Suite started: ' + result.description
        + ' whose full description is: ' + result.fullName);
        console.log(util.specStarted);
      file.appendFileSync("Result.html",util.suiteStarted(result))
    },
  
    specStarted: function(result) {
      //await somethingAsync();
      console.log('Spec started: ' + result.description
        + ' whose full description is: ' + result.fullName);

    },
  
    specDone: function(result) {
      console.log('Spec: ' + result.description + ' was ' + result.status);
  
      for(var i = 0; i < result.failedExpectations.length; i++) {
        console.log('Failure: ' + result.failedExpectations[i].message);
        console.log(result.failedExpectations[i].stack);
      }
  
      console.log(result.passedExpectations.length);
      file.appendFileSync("Result.html",util.specEnded(result))
    },
  
    suiteDone: function(result) {
      console.log('Suite: ' + result.description + ' was ' + result.status);
      for(var i = 0; i < result.failedExpectations.length; i++) {
        console.log('Suite ' + result.failedExpectations[i].message);
        console.log(result.failedExpectations[i].stack);
      }
      file.appendFileSync("Result.html",util.suiteEnded(result))
    },
  
    jasmineDone: function(result) {
      console.log('Finished suite: ' + result.overallStatus);
      for(var i = 0; i < result.failedExpectations.length; i++) {
        console.log('Global ' + result.failedExpectations[i].message);
        console.log(result.failedExpectations[i].stack);
        
      }
      file.appendFileSync("Result.html",util.endHTML);
    }
  };
module.exports=myReporter;