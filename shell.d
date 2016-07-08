import std.stdio;

string to_d(string arg)
{
	string temp = "";
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
