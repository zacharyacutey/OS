module encode_file;
string ContentEncodeString(dstring arg)
{
	import std.conv;
	int[] temp;
	int i = 0;
	while(i != arg.length)
	{
		temp~=arg[i];
		i++;
	}
	return text(temp);
}
dstring ContentDencodeString(string arg)
{
	import std.conv;
	string refd = arg;
	int[] temp = parse!(int[])(refd);
	dchar[] s;
	int i;
	while(i!=temp.length)
	{
		s~=temp[i];
		i++;
	}
	return s.idup;
}
