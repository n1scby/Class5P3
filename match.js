var highend = 100;
var lowend = 1;
var matchNumber = 5;
for (var i=lowend; i<=highend; i++)
{
    if (i%matchNumber == 0)
    {
        console.log('MATCH!');
    }
    else {
    console.log(i);
    }
}