// var originalLinks = document.getElementsByClassName('original');
// while(originalLinks.length > 0){
//     originalLinks[0].parentNode.removeChild(originalLinks[0]);
// }
//
//
// // First get all Ids within #markdown
//
// var sidebar = document.querySelector('.toclinkwrapper');
// var content = document.querySelector('.markdown');
// var allIds = [];
// var idSelect = content.querySelectorAll("h3");
// for (var i = 0, len = idSelect.length ; i < len; i++) {
//     var el = idSelect[i];
//     if (el.id) {
//       allIds.push(el.id);
//     }
// }
//
// var navItems = getNavItems(allIds);
//
// for(var i = 0; i < navItems.length; i++) {
//     sidebar.appendChild(navItems[i]);
// }
//
// var offsets = getOffsets(allIds);
//
// updateActiveNavItem(navItems);
//
// window.addEventListener('scroll', function(){
// //    updateActiveNavItem(navItems);
//     checkForFooter();
// });
//
// function getNavItems(items) {
//
//     return items.map(function(item) {
//         var name = item.split('-').join(' ');;
//         var anchor = document.createElement('a');
//         anchor.href = '#' + item;
//         anchor.setAttribute("class", "toclink");
//         anchor.appendChild(document.createTextNode(name));
//
//         return anchor;
//     });
// }
//
// function getOffsets(topics) {
//     return topics.map(function(topic) {
//         topiclocation = document.getElementById(topic);
//         return topiclocation.getBoundingClientRect().top + document.body.scrollTop;
//     });
// }
//
// function getCurrentTopic(offset, offsets) {
//     if (offset < offsets[0]) return -1;
//
//     for(var i = 0; i < offsets.length - 1; i++) {
//         var min = offsets[i];
//         var max = offsets[i + 1];
//         if (min < offset && offset < max)
//             return i;
//     }
//
//     return offsets.length - 1;
// }
//
// function updateActiveNavItem(items) {
//
//     var top = content.scrollTop - content.getBoundingClientRect().top;
//     var currentTopic = getCurrentTopic(top + 171, offsets);
//     if (currentTopic == -1) return;
//
//     for(var i = 0; i < items.length; i++) {
//         if (items[i].classList.contains('nav-active'))
//             items[i].classList.remove('nav-active');
//     }
//
//     items[currentTopic].classList.add('nav-active');
// }
//
// let tocmenu = Array.from(sidebar.querySelectorAll('.toclink'));
//
// const handleClick = (e) => {
//   tocmenu.forEach(node => {
//     node.classList.remove('nav-active');
//   });
//   e.currentTarget.classList.add('nav-active');
//
// }
//
//
//
// tocmenu.forEach(node => {
//   node.addEventListener('click', handleClick)
// });

// docs-sidebar scroll placement - original


var tocwrapper = document.querySelector('.toc-wrapper');
var toc = document.querySelector('.sidebar-docs');
var footer = document.querySelector('.footer');
// var wave = document.querySelector('.bottom-wave');

function checkForFooter() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }

  console.log("left: ", (getRectTop(tocwrapper) + document.body.scrollTop) + tocwrapper.offsetHeight)
  console.log("right: ", getRectTop(footer) + document.body.scrollTop)

  var footerposition = getRectTop(footer);
  if((getRectTop(toc) + document.body.scrollTop) + toc.offsetHeight >= (getRectTop(footer) + document.body.scrollTop)) {
  //  tocwrapper.setAttribute("style", "background-color: transparent");

    // toc.setAttribute("style", "bottom: " + (footer.offsetHeight) + "px");

    tocwrapper.classList.add('tocwrapperstick');
  }

  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    {// toc.removeAttribute("style");
    tocwrapper.classList.remove('tocwrapperstick');
    }
}

// var tocwrapper = document.querySelector('.toc-wrapper');
// var toc = document.querySelector('.sidebar-docs');
//
// var footer = document.querySelector('.footer');
// var wave = document.querySelector('.bottom-wave');
//
// console.log("wave offset: ", wave.offsetHeight);
// function checkForFooter() {
//   function getRectTop(el){
//     var rect = el.getBoundingClientRect();
//     return rect.top;
//   }
//
//   var wavelocation = getRectTop(wave);
//   //console.log("wave + scrolltop: ", getRectTop(wave) + document.body.scrollTop);
//   if((getRectTop(toc) + document.body.scrollTop) + toc.offsetHeight >= (getRectTop(wave) + document.body.scrollTop) - 100){
//     //tocwrapper.setAttribute("style","bottom: " + (wavelocation) + "px");
//     console.log("is this: ", (getRectTop(toc) + document.body.scrollTop) + toc.offsetHeight);
//     console.log("greater than this: ", (getRectTop(wave) + document.body.scrollTop))
//     //toc.setAttribute("style","bottom: " + (wavelocation) + "px");
//     toc.classList.remove('tocwrapperstick');
//
//   } else {
//   //  tocwrapper.setAttribute("style","background-color: transparent");
//     tocwrapper.setAttribute("style","bottom: " + (wavelocation) + "px");
//     console.log("====");
//     console.log("is this: ", document.body.scrollTop + window.innerHeight)
//     console.log("less than: ", (getRectTop(wave) + document.body.scrollTop))
//
//     toc.classList.add('tocwrapperstick');
//   }
// }
// 
// var urlcheck = document.getElementsByClassName('expanded')
// for(var i = 0, length = urlcheck.length; i < length; i++) {
//           urlcheck[i].checked = "true"
//     }

window.addEventListener('scroll', function(){
    checkForFooter();
});
