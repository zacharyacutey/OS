function ListDirectory()
{
  var r="";
  for(var i in fs.map(function(arg){return arg[0];}))
  {
    r+=i+"<br>";
  }
  WriteToUI( r );
}
