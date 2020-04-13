
//start of HTML
var startHTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
    <script src="./lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <title>Custom-Jasmine-Reporter</title>
</head>
<body>
<div class="container">
<table class="table">
<thead class="thead-dark">
<tr>
  <th scope="col">Spec</th>
  <th scope="col">Result</th>
</tr>
</thead>
<tbody>
`;

//End of HTML
var endHTML=`
</tbody>
</table>
</div>
</body>
</html>`

//suite started HTML
var suiteStarted=function(result)
{
return `
<tr>
<th colspan="3">${result.description} Started</th>
</tr>`
}

//suite Ended HTML
var suiteEnded=function(result)
{
  return `
  <tr>
    <th colspan="3">${result.description} Ended</th>
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