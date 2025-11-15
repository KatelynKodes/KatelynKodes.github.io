var tabContent, tabLinks

//On Window load
window.onload = function()
{
    tabContent = document.getElementsByClassName("tabContent");
    tabLinks = document.getElementsByClassName("tabLink");

    HideAllTabs();
    document.getElementById("defaultTab").click();

}
	
function openTab(tabnum)
{	
    HideAllTabs()

	for(var i = 0; i < tabLinks.length; i++)
	{
		if( i == tabnum)
		{
			tabContent[i].style.display = "block";
			tabLinks[i].className += " active";
		}
	}
}

function HideAllTabs()
{
	//Hide all tabContent elements and deactivate all buttons
	for(var i = 0; i < tabLinks.length; i++)
	{
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
		tabContent[i].style.display = "none";
	}
}