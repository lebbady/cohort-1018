'use strict';


function main() {  
  
  /* Student search feature */

  var searchInput = document.querySelector('.input-student input');
  var searchResultElement = document.querySelector('div.search-results');
  searchInput.addEventListener('keyup', handleKeyUp);

  function findStudents(search){
    /* Returning students whose name match the search string*/
    return students.filter(function(student){
      return student.name.toLowerCase().includes(search);
    })
  }

  function displayResults(studentsFound){
    /*clear div content in search results before insserting new one*/
    searchResultElement.innerHTML = '';

    /*creates the list to display results*/
    var studentsList = document.createElement('ul');

    /*for each student found we create the li and add the name of the student*/
    studentsFound.forEach(function(student){
      var studentListElement = document.createElement('li');
      studentListElement.innerText = student.name;
      studentsList.appendChild(studentListElement);
    })

    /*Append li (studentsList) to the result list */
    searchResultElement.appendChild(studentsList);
  }

  function handleKeyUp(){
    var search = searchInput.value.toLowerCase();
    var studentsFound = findStudents(search);
    displayResults(studentsFound);
  }

  /*Section hiding*/
  
  var interests = document.querySelector('section.personal-interests');
  var experiments = document.querySelector('section.experiments');
  
  var button1 = document.querySelector('button#first');
  var button2 = document.querySelector('button#second');
  
  
  var hideSection = function(event){
    event.stopPropagation();
    interests.classList.toggle('hidden');
    if(interests.classList.contains('hidden')){
      button1.innerText = "Show section";
    } else {
      button1.innerText = "Hide section";
    }
  }

  var hideExperiment = function(event){
    event.stopPropagation();
    experiments.classList.toggle('hidden');
    if(experiments.classList.contains('hidden')){
      button2.innerText = "Show section";
    } else {
      button2.innerText = "Hide section";
    }
  }

  
  button1.addEventListener('click', hideSection);
  button2.addEventListener('click', hideExperiment);

}

window.addEventListener('load',main);