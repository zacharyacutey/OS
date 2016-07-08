import std.stdio;
module parser;
string to_d(string arg)
{
	string temp = "import shell;";
	int i = 0;
	while(i!=arg.length)
	{
		if(arg[i]=='(')
		{
			temp~="shell([";
		}
		else if(arg[i]==')')
		{
			temp~="])";
		}
		else
		{
			temp~=arg[i];
		}
	}
	return temp;
}
