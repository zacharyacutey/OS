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
Array.prototype.append_=function(item){this[this.length]=item;};

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

function WriteToUI(text)
{
  document.getElementById("ui").innerHTML=text;
}

function SaveFileEvalString(name)
{
  return "WriteToFile('"+name+"','"+GetFileText(name)+"');";
}

function SaveEvalString()
{
  var r="";
  for(var i in fs)
  {
    r+=SaveFileEvalString(i);
  }
  return r;
}

function CookieString()
{
  return 'eval="'+SaveEvalString()+'";';
}

function Save()
{
  document.cookie="expires=Wed, 1 Jan 2020 00:00:00 EST;"+CookieString();
}

function Load()
{
  eval(document.cookie.substring(37,document.cookie.length-2));
}
