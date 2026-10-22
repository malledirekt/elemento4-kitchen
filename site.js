(function(){
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Hero beim Laden sanft aufbauen
var bg=document.querySelector('.hero-bg');
var heroEls=document.querySelectorAll('.hero .display,.hero h1,.hero .btns');
heroEls.forEach(function(el,i){el.classList.add('hero-in');el.style.setProperty('--d',(0.25+i*0.18)+'s')});
requestAnimationFrame(function(){requestAnimationFrame(function(){if(bg)bg.classList.add('in');heroEls.forEach(function(el){el.classList.add('in')})})});
// Bilder und Texte beim Scrollen einblenden, je Abschnitt gestaffelt
var sel='h1,h2,h3,p,.eyebrow,.statement,.btns,.step,.quote,.card,.acc details,.csteps li';
document.querySelectorAll('main section:not(.hero)').forEach(function(sec){
  var n=0;
  sec.querySelectorAll('.media img,.row>img').forEach(function(im){im.classList.add('rv-img');im.style.setProperty('--d',Math.min(n++,3)*0.12+'s')});
  var k=0;
  sec.querySelectorAll(sel).forEach(function(el){if(el.parentElement.closest('.rv,.step,.quote,.card,.csteps li,.acc details'))return;el.classList.add('rv');el.style.setProperty('--d',Math.min(k++,6)*0.1+'s')});
});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv,.rv-img,.step').forEach(function(el){io.observe(el)});
// 2-stufiges Formular
var f=document.getElementById('lead-form');if(f){var s1=f.querySelector('[data-step="1"]'),s2=f.querySelector('[data-step="2"]'),lab=f.querySelector('[data-step-label]');
f.querySelector('[data-next]').addEventListener('click',function(){var bad=[].slice.call(s1.querySelectorAll('[required]')).find(function(el){return!el.checkValidity()});if(bad){bad.reportValidity();return}s1.hidden=true;s2.hidden=false;lab.textContent='Schritt 2 von 2';s2.querySelector('input').focus()});
f.querySelector('[data-prev]').addEventListener('click',function(){s2.hidden=true;s1.hidden=false;lab.textContent='Schritt 1 von 2'});
f.addEventListener('submit',function(e){e.preventDefault();var v=function(n){return(f.elements[n]&&f.elements[n].value)||''};var b=['Projekt: '+v('projekt'),'Ort der Immobilie: '+v('ort'),'Gewünschter Zeitraum: '+v('zeitraum'),'','Name: '+v('name'),'Telefon: '+v('telefon'),'E-Mail: '+v('email'),'',v('nachricht')].join('\n');location.href='mailto:info@elemento4-kitchen.com?subject='+encodeURIComponent('Terminanfrage von '+v('name'))+'&body='+encodeURIComponent(b)})}
})();
