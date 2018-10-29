'use strict';

function main(){
  console.log('Loaded');

  /* Select students section and hide it */
  var studentsSectionElement = document.querySelector('section.students');
  var button = document.querySelector('button');

  var hideSection = function(event){
    event.stopPropagation();
    studentsSectionElement.classList.toggle('hidden');
    if(studentsSectionElement.classList.contains('hidden')){
      button.innerText = "Show students";
    } else {
      button.innerText = "Hide students";
    }
  }

  button.addEventListener('click', hideSection);

  /* Create a new section */
  var newSectionElement = document.createElement('section');
  var p = document.createElement('p');
  p.innerText = 'We did Katas this weekend';

  var ul = document.createElement('ul');
  var li = document.createElement('li');

  var weDidKatas = ['Gabriel', 'Jack', 'Ceci', 'Sergi', 'Robbie', 'Joaquin', 'Laura', 'Giulia', 'Poppy' ];

  for(var i = 0; i < weDidKatas.length; i++){
    var li = document.createElement('li');
    li.style.backgroundColor = getRandomColor();
    li.innerText = weDidKatas[i] + ' did many this weekend';
    ul.appendChild(li);
  }

  newSectionElement.appendChild(p);
  newSectionElement.appendChild(ul);

  document.body.prepend(newSectionElement);

  /* Get random colors */

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /* Students search feature*/

  var searchInput = document.querySelector('.input-student input');
  searchInput.addEventListener('keyup', handleKeyDown);

  function handleKeyDown() {
    console.log(searchInput.value);
  }

}
window.addEventListener('load', main);