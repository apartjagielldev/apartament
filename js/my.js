$(document).ready(function(){
    
    function RemoveClassInSection(sectionName, selector, className)
    {
        $('#' + sectionName).find(selector + '.' + className).each(function(index,value){        
            $(value).removeClass(className);
        });
    };

    function RemoveHeader(sectionName)
    {
        RemoveClassInSection(sectionName, 'h2', 'animated');
        RemoveClassInSection(sectionName, 'h2', 'bounceInDown');
    }

    RemoveClassInSection('gallery', 'div', 'animated');
    RemoveClassInSection('gallery', 'div', 'fadeInUp');
    
    RemoveClassInSection('atractions', 'div', 'animated');
    RemoveClassInSection('atractions', 'div', 'rotateInDownLeft');
    RemoveClassInSection('atractions', 'div', 'slow');

    RemoveClassInSection('description', 'div', 'animated');
    RemoveClassInSection('description', 'div', 'bounceInDown');

    RemoveClassInSection('intro', 'h1', 'fadeInDown');
    RemoveClassInSection('intro', 'h1', 'animated');

    RemoveClassInSection('intro', 'p', 'fadeInUp');
    RemoveClassInSection('intro', 'p', 'animated');
    
    RemoveHeader('atractions');
    RemoveHeader('gallery');
    RemoveHeader('contact');
    RemoveHeader('prices');

    $('ul.nav >li > a').css('color','black');
    
});