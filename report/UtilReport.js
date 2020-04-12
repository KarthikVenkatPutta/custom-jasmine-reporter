
//start of HTML
var startHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
<table border="1">
<tr>
  <th>Spec</th>
  <th>Result</th>
</tr>`;

//End of HTML
var endHTML=`
</table>
</body>
</html>`

//suite started HTML
var suiteStarted=function(result)
{
return `
<tr>
<th colspan="3">${result.description}</th>
</tr>`
}

//suite Ended HTML
var suiteEnded=function(result)
{
  return `
  <tr>
    <th colspan="3">${result.description}+" "+"Ended"</th>
  </tr>`
}


var specEnded=function(result)
{
  return `
  <tr>
  <td>${result.description}</td>
  <td>${result.status}</td>
  </tr>
  `
}




module.exports={
    startHTML:startHTML,
    endHTML:endHTML,
    suiteStarted:suiteStarted,
    suiteEnded:suiteEnded,
    specEnded:specEnded
}