var fs={};
function DirectoryExists(dir)
{
  if(dir in fs)
  {
    return fs[dir]===0;
  }
  return false;
}
function DirectoryCanMake(dir) 
{
  if(dir[dir.length-1]=="/")
  {
    return DirectoryCanMake(dir.substring(0,dir.length-2));
  }
  var t=dir.split("/");
  if(t.length==1) return true;
  return DirectoryExists(t.slice(0,t.length-1).join("/"))
}
function MakeDirectory(dir)
{
  if(!DirectoryCanMake(dir))
  {
    throw new Error("ERROR!");
  }
  fs[dir]=0;
}
