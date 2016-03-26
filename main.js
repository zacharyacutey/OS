var fs=[]; //the root object;

Array.prototype.append=function(item){
  if(item in this.map(function(arg){return arg[0];}))
  {
    var i=this.map(function(arg){return arg[0];}).indexOf(item[0]);
    this[i]=item;
  }
  else
  {
   this[this.length]=item;
  }
};

function WriteToFile(name,text)
{
  fs.append([name,text]);
}

function GetFileText(name)
{
  return String(fs[fs.map(function(arg){return arg[0];}).indexOf(name)]);
}

function AppendToFile(name,text)
{
  WriteToFile(GetFileText(name)+text);
}

function DeleteFile(name)
{
  fs.splice(fs.map(function(arg){return arg[0];}).indexOf(name) , 1);
}
