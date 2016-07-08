module shell;
string[string] vars;
string shell(string[] cmd)
{
  import std.stdio;
  string command = cmd[0];
  string[] args = cmd[1 .. $];
  /*
  Sigh, this is going to be a bunch of conditionals
  */
  if(command == "write")
  {
    write(args[0]);
    return args[0];
  }
  else if(command == "writeln")
  {
    writeln(args[0]);
    return args[0];
  }
  else if(command == "read")
  {
    return readln()[0 .. $ - 1];
  }
}
