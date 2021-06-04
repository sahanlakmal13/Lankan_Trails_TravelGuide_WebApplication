function changeFontSize(change)
{
	var texts = ["text1", "text2", "text3"];
	var i;
	for ( i=0; i<texts.length; i++)
	{
		txt = document.getElementById(texts[i]);
		style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
		fontSize = parseFloat(style);
		changedFont = fontSize + change;
		txt.style.fontSize = (changedFont) + 'px';
	}
}