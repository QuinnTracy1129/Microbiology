function showLesson(){
  document.getElementById("homeButton").style.backgroundColor = "inherit";
  document.getElementById("exerciseButton").style.backgroundColor = "inherit";
  document.getElementById("progressButton").style.backgroundColor = "inherit";
  document.getElementById("main-homeMenu").style.display = "none";
  document.getElementById("main-exerciseMenu").style.display = "none";
  document.getElementById("main-progressMenu").style.display = "none";

  document.getElementById("lessonButton").style.backgroundColor = "white";
  document.getElementById("main-lessonMenu").style.display = "block";
  document.getElementById("lesson1").style.transform = "rotate(0deg)";
  document.getElementById("topic1").style.visibility = "hidden";
  document.getElementById("lesson2").style.transform = "rotate(0deg)";
  document.getElementById("topic2").style.visibility = "hidden";
  document.getElementById("lesson3").style.transform = "rotate(0deg)";
  document.getElementById("topic3").style.visibility = "hidden";

  linker(7);
}

function showProgress(){
  document.getElementById("homeButton").style.backgroundColor = "inherit";
  document.getElementById("exerciseButton").style.backgroundColor = "inherit";
  document.getElementById("lessonButton").style.backgroundColor = "inherit";
  document.getElementById("main-homeMenu").style.display = "none";
  document.getElementById("main-exerciseMenu").style.display = "none";
  document.getElementById("main-lessonMenu").style.display = "none";

  document.getElementById("progressButton").style.backgroundColor = "white";
  document.getElementById("main-progressMenu").style.display = "block";
  for(var i = 1; i <= 5; i++){
    document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
    document.getElementById("topic"+i).style.visibility = "hidden";
  }

  linker(23);
}

function showHome(){
  document.getElementById("lessonButton").style.backgroundColor = "inherit";
  document.getElementById("exerciseButton").style.backgroundColor = "inherit";
  document.getElementById("progressButton").style.backgroundColor = "inherit";
  document.getElementById("main-lessonMenu").style.display = "none";
  document.getElementById("main-exerciseMenu").style.display = "none";
  document.getElementById("main-progressMenu").style.display = "none";

  document.getElementById("homeButton").style.backgroundColor = "white";
  document.getElementById("main-homeMenu").style.display = "block";
  for(var i = 1; i <= 5; i++){
    document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
    document.getElementById("topic"+i).style.visibility = "hidden";
  }

  linker(1);
}

function showExercise(){
  document.getElementById("homeButton").style.backgroundColor = "inherit";
  document.getElementById("progressButton").style.backgroundColor = "inherit";
  document.getElementById("lessonButton").style.backgroundColor = "inherit";
  document.getElementById("main-homeMenu").style.display = "none";
  document.getElementById("main-progressMenu").style.display = "none";
  document.getElementById("main-lessonMenu").style.display = "none";

  document.getElementById("exerciseButton").style.backgroundColor = "white";
  document.getElementById("main-exerciseMenu").style.display = "block";
  for(var i = 1; i <= 5; i++){
    document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
    document.getElementById("topic"+i).style.visibility = "hidden";
  }

  linker(22);
}

function linker(y){
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
  var details=document.getElementById("main-content");
  details.innerHTML=xmlhttp.responseText; }
    if(y==1){
      xmlhttp.open("GET","inc/introduction.html",true);
    }else if(y==2){
      xmlhttp.open("GET","inc/mission.html",true);
    }else if(y==3){
      xmlhttp.open("GET","inc/vision.html",true);
    }else if(y==4){
      xmlhttp.open("GET","inc/help.html",true);
    }else if(y==5){
      xmlhttp.open("GET","inc/about.html",true);
    }else if(y==6){
      xmlhttp.open("GET","inc/email.html",true);
    }else if(y==7){
      xmlhttp.open("GET","inc/nucleotide.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==8){
      xmlhttp.open("GET","inc/complementary.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==9){
      xmlhttp.open("GET","inc/heredity.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==10){
      xmlhttp.open("GET","inc/theory.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==11){
      xmlhttp.open("GET","inc/vaccines.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==12){
      xmlhttp.open("GET","inc/comparison.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==13){
      xmlhttp.open("GET","inc/classification.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==14){
      xmlhttp.open("GET","inc/cytoplasm.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==15){
      xmlhttp.open("GET","inc/walls.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==16){
      xmlhttp.open("GET","inc/fixation.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==17){
      xmlhttp.open("GET","inc/cycle.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==18){
      xmlhttp.open("GET","inc/anaerobic.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==19){
      xmlhttp.open("GET","inc/toxoplasmosis.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==20){
      xmlhttp.open("GET","inc/giardia.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==21){
      xmlhttp.open("GET","inc/malaria.html",true);
      for(var i = 1; i <= 5; i++){
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else if(y==22){
      xmlhttp.open("GET","inc/exercise.html",true);
    }else if(y==23){
      xmlhttp.open("GET","inc/progress.html",true);
    }else if(y==24){
      xmlhttp.open("GET","inc/dna.html",true);
    }else if(y==25){
      xmlhttp.open("GET","inc/diseases.html",true);
    }else if(y==26){
      xmlhttp.open("GET","inc/cellMorphology.html",true);
    }else if(y==27){
      xmlhttp.open("GET","inc/cellMorphology.html",true);
    }else if(y==28){
      xmlhttp.open("GET","inc/protozoan.html",true);
    }
  xmlhttp.send(null);
}

function DropDown(x){
  var dropDown = document.getElementById("topic"+x).style.visibility;
  for(var i = 1; i <= 5; i++){
    if(i == x){
      if(dropDown == "hidden"){
        document.getElementById("lesson"+i).style.transform = "rotate(90deg)";
        document.getElementById("topic"+i).style.visibility = "visible";
      }else{
        document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
        document.getElementById("topic"+i).style.visibility = "hidden";
      }
    }else{
      document.getElementById("lesson"+i).style.transform = "rotate(0deg)";
      document.getElementById("topic"+i).style.visibility = "hidden";
    }
  }
}

function inColors(x){
  if(x == 1){
    document.getElementById("mission").style.color = "#00c292";
    document.getElementById("mission").style.borderColor = "#00c292";
  }else if(x == 2){
    document.getElementById("vision").style.color = "#00c292";
    document.getElementById("vision").style.borderColor = "#00c292";
  }
}

function outColors(x){
  if(x == 1){
    document.getElementById("mission").style.color = "#afafaf";
    document.getElementById("mission").style.borderColor = "#afafaf";
  }else if(x == 2){
    document.getElementById("vision").style.color = "#afafaf";
    document.getElementById("vision").style.borderColor = "#afafaf";
  }
}

function showIcons(x){
  document.getElementById("homeButton").style.backgroundColor = "inherit";
  document.getElementById("progressButton").style.backgroundColor = "inherit";
  document.getElementById("lessonButton").style.backgroundColor = "inherit";
  document.getElementById("exerciseButton").style.backgroundColor = "inherit";
  document.getElementById("main-homeMenu").style.display = "none";
  document.getElementById("main-progressMenu").style.display = "none";
  document.getElementById("main-lessonMenu").style.display = "none";
  document.getElementById("main-exerciseMenu").style.display = "none";
  document.getElementById("follow").style.visibility = "hidden";
  document.getElementById("follow-tri").style.visibility = "hidden";

  if(x==1){
    linker(4);
  }else if(x==2){
    linker(5);
  }else if(x==3){
    linker(6);
  }
}

function showFollow(){
  if(document.getElementById("follow").style.visibility == "visible"){
    document.getElementById("follow").style.visibility = "hidden";
    document.getElementById("follow-tri").style.visibility = "hidden";
  }else{
    document.getElementById("follow").style.visibility = "visible";
    document.getElementById("follow-tri").style.visibility = "visible";
  }
}

function rateMe(y,x){
  if(y == 1){
    if(x == 1){
      document.getElementById("d1").style.color = "#ffea00";
      document.getElementById("d2").style.color = "#afafaf";
      document.getElementById("d3").style.color = "#afafaf";
      document.getElementById("d4").style.color = "#afafaf";
      document.getElementById("d5").style.color = "#afafaf";
    }else if(x == 2){
      document.getElementById("d1").style.color = "#ffea00";
      document.getElementById("d2").style.color = "#ffea00";
      document.getElementById("d3").style.color = "#afafaf";
      document.getElementById("d4").style.color = "#afafaf";
      document.getElementById("d5").style.color = "#afafaf";
    }else if(x == 3){
      document.getElementById("d1").style.color = "#ffea00";
      document.getElementById("d2").style.color = "#ffea00";
      document.getElementById("d3").style.color = "#ffea00";
      document.getElementById("d4").style.color = "#afafaf";
      document.getElementById("d5").style.color = "#afafaf";
    }else if(x == 4){
      document.getElementById("d1").style.color = "#ffea00";
      document.getElementById("d2").style.color = "#ffea00";
      document.getElementById("d3").style.color = "#ffea00";
      document.getElementById("d4").style.color = "#ffea00";
      document.getElementById("d5").style.color = "#afafaf";
    }else if(x == 5){
      document.getElementById("d1").style.color = "#ffea00";
      document.getElementById("d2").style.color = "#ffea00";
      document.getElementById("d3").style.color = "#ffea00";
      document.getElementById("d4").style.color = "#ffea00";
      document.getElementById("d5").style.color = "#ffea00";
    }
  }else if(y == 2){
    if(x == 1){
      document.getElementById("l1").style.color = "#ffea00";
      document.getElementById("l2").style.color = "#afafaf";
      document.getElementById("l3").style.color = "#afafaf";
      document.getElementById("l4").style.color = "#afafaf";
      document.getElementById("l5").style.color = "#afafaf";
    }else if(x == 2){
      document.getElementById("l1").style.color = "#ffea00";
      document.getElementById("l2").style.color = "#ffea00";
      document.getElementById("l3").style.color = "#afafaf";
      document.getElementById("l4").style.color = "#afafaf";
      document.getElementById("l5").style.color = "#afafaf";
    }else if(x == 3){
      document.getElementById("l1").style.color = "#ffea00";
      document.getElementById("l2").style.color = "#ffea00";
      document.getElementById("l3").style.color = "#ffea00";
      document.getElementById("l4").style.color = "#afafaf";
      document.getElementById("l5").style.color = "#afafaf";
    }else if(x == 4){
      document.getElementById("l1").style.color = "#ffea00";
      document.getElementById("l2").style.color = "#ffea00";
      document.getElementById("l3").style.color = "#ffea00";
      document.getElementById("l4").style.color = "#ffea00";
      document.getElementById("l5").style.color = "#afafaf";
    }else if(x == 5){
      document.getElementById("l1").style.color = "#ffea00";
      document.getElementById("l2").style.color = "#ffea00";
      document.getElementById("l3").style.color = "#ffea00";
      document.getElementById("l4").style.color = "#ffea00";
      document.getElementById("l5").style.color = "#ffea00";
    }
  }else if(y == 3){
    if(x == 1){
      document.getElementById("p1").style.color = "#ffea00";
      document.getElementById("p2").style.color = "#afafaf";
      document.getElementById("p3").style.color = "#afafaf";
      document.getElementById("p4").style.color = "#afafaf";
      document.getElementById("p5").style.color = "#afafaf";
    }else if(x == 2){
      document.getElementById("p1").style.color = "#ffea00";
      document.getElementById("p2").style.color = "#ffea00";
      document.getElementById("p3").style.color = "#afafaf";
      document.getElementById("p4").style.color = "#afafaf";
      document.getElementById("p5").style.color = "#afafaf";
    }else if(x == 3){
      document.getElementById("p1").style.color = "#ffea00";
      document.getElementById("p2").style.color = "#ffea00";
      document.getElementById("p3").style.color = "#ffea00";
      document.getElementById("p4").style.color = "#afafaf";
      document.getElementById("p5").style.color = "#afafaf";
    }else if(x == 4){
      document.getElementById("p1").style.color = "#ffea00";
      document.getElementById("p2").style.color = "#ffea00";
      document.getElementById("p3").style.color = "#ffea00";
      document.getElementById("p4").style.color = "#ffea00";
      document.getElementById("p5").style.color = "#afafaf";
    }else if(x == 5){
      document.getElementById("p1").style.color = "#ffea00";
      document.getElementById("p2").style.color = "#ffea00";
      document.getElementById("p3").style.color = "#ffea00";
      document.getElementById("p4").style.color = "#ffea00";
      document.getElementById("p5").style.color = "#ffea00";
    }
  }
}

function rateSubmit(){
  alert('Succesfully rated, thank you 😊.');

  document.getElementById("d1").style.color = "#afafaf";
  document.getElementById("d2").style.color = "#afafaf";
  document.getElementById("d3").style.color = "#afafaf";
  document.getElementById("d4").style.color = "#afafaf";
  document.getElementById("d5").style.color = "#afafaf";

  document.getElementById("l1").style.color = "#afafaf";
  document.getElementById("l2").style.color = "#afafaf";
  document.getElementById("l3").style.color = "#afafaf";
  document.getElementById("l4").style.color = "#afafaf";
  document.getElementById("l5").style.color = "#afafaf";

  document.getElementById("p1").style.color = "#afafaf";
  document.getElementById("p2").style.color = "#afafaf";
  document.getElementById("p3").style.color = "#afafaf";
  document.getElementById("p4").style.color = "#afafaf";
  document.getElementById("p5").style.color = "#afafaf";
}

function submitDna(){
  var x = document.getElementById('qNumber').value;
  if(x == 1){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "A phosphodiester bond links:";
    document.getElementById("ca").innerHTML = "A) A sugar to another sugar";
    document.getElementById("cb").innerHTML = "B) A nitrogenous base and another nitrogenous base";
    document.getElementById("cc").innerHTML = "C) A sugar and a phosphate group";
    document.getElementById("cd").innerHTML = "D) A sugar and a phosphate group";
  }else if(x == 2){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which of the following bases are categorized as purines?";
    document.getElementById("ca").innerHTML = "A) Thymine, cytosine and uracil";
    document.getElementById("cb").innerHTML = "B) Guanine, adenine and uracil";
    document.getElementById("cc").innerHTML = "C) Guanine and cytosine";
    document.getElementById("cd").innerHTML = "D) Guanine and adenine";
  }else if(x == 3){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which of the following statements is true?";
    document.getElementById("ca").innerHTML = "A) Adenine forms hydrogen bonds with thymine.";
    document.getElementById("cb").innerHTML = "B) Adenine forms carbon bonds with thymine.";
    document.getElementById("cc").innerHTML = "C) Cytosine forms hydrogen bonds with adenine.";
    document.getElementById("cd").innerHTML = "D) Cytosine forms carbon bonds with guanine.";
  }else if(x == 4){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Why do DNA strands need to be antiparallel?";
    document.getElementById("ca").innerHTML = "A) The strands need to run in opposite directions for hydrogen bonding to work.";
    document.getElementById("cb").innerHTML = "B) This is false; DNA strands need to be parallel.";
    document.getElementById("cc").innerHTML = "C) Both strands need to have sugars at the top and phosphates at the bottom.";
    document.getElementById("cd").innerHTML = "D) DNA needs to have sides.";
  }else if(x == 5){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    alert('Succesfully answered all the questions.');
    document.getElementById("excercise").style.display = "none";
    document.getElementById("scores").style.display = "block";
    results();
  }
  document.getElementById("answer").innerHTML = "";
  if(x != 5){
    x++;
    document.getElementById('qNumber').value = x;
  }else{
    document.getElementById('qNumber').value = 1;
  }
}

function submitCell(){
  var x = document.getElementById('qNumber').value;
  if(x == 1){
    var choice = document.getElementById("para").value;
    if(choice == "c"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Under a microscope, which organism would appear as a grape-like cluster of round cells?";
    document.getElementById("ca").innerHTML = "A) Vibrio";
    document.getElementById("cb").innerHTML = "B) Staphylococcus";
    document.getElementById("cc").innerHTML = "C) Streptococcus";
    document.getElementById("cd").innerHTML = "D) Sarcina";
  }else if(x == 2){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Under a microscope, which organism would appear as a chain of rod-shaped cells?";
    document.getElementById("ca").innerHTML = "A) Diplobacillus";
    document.getElementById("cb").innerHTML = "B) Vibrio";
    document.getElementById("cc").innerHTML = "C) Streptobacillus";
    document.getElementById("cd").innerHTML = "D) Sarcina";
  }else if(x == 3){
    var choice = document.getElementById("para").value;
    if(choice == "c"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "As a bacterium gets larger, how does it compensate for the large volume relative to the surface area?";
    document.getElementById("ca").innerHTML = "A) By increasing invaginations in the cell membrane.";
    document.getElementById("cb").innerHTML = "B) By maintaining a smooth cell membrane.";
    document.getElementById("cc").innerHTML = "C) By increasing the number of mitochondria.";
    document.getElementById("cd").innerHTML = "D) By developing more ER and Golgi apparatuses.";
  }else if(x == 4){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which statement BEST describes the bacterial cell membrane?";
    document.getElementById("ca").innerHTML = "A) A single layer of lipids surrounding the internal organelles.";
    document.getElementById("cb").innerHTML = "B) A highly selective phospholipid bilayer that surrounds the nucleus.";
    document.getElementById("cc").innerHTML = "C) A highly selective phospholipid bilayer with a mesh of open pores.";
    document.getElementById("cd").innerHTML = "D) A highly selective phospholipid bilayer studded with proteins.";
  }else if(x == 5){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    alert('Succesfully answered all the questions.');
    document.getElementById("excercise").style.display = "none";
    document.getElementById("scores").style.display = "block";
    results();
  }
  document.getElementById("answer").innerHTML = "";
  if(x != 5){
    x++;
    document.getElementById('qNumber').value = x;
  }else{
    document.getElementById('qNumber').value = 1;
  }
}

function submitProto(){
  var x = document.getElementById('qNumber').value;
  if(x == 1){
    var choice = document.getElementById("para").value;
    if(choice == "c"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which of the following is the most common route of exposure to T. gondii?";
    document.getElementById("ca").innerHTML = "A) Transplacentally";
    document.getElementById("cb").innerHTML = "B) Ingestion of undercooked, contaminated meat.";
    document.getElementById("cc").innerHTML = "C) Ingestion of oocysts picked up from soil.";
    document.getElementById("cd").innerHTML = "D) Cleaning the litter box.";
  }else if(x == 2){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which of the following is TRUE of a T. gondii' infection?";
    document.getElementById("ca").innerHTML = "A) T. gondii can reproduce sexually in any mammal.";
    document.getElementById("cb").innerHTML = "B) It is caused by a bacteria.";
    document.getElementById("cc").innerHTML = "C) T. gondii is more of a threat to the human mother than the fetus.";
    document.getElementById("cd").innerHTML = "D) Most people never know they have been exposed.";
  }else if(x == 3){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "A reservoir host is";
    document.getElementById("ca").innerHTML = "A) Any nonhuman organism that sustains a parasite as a source of infection for humans";
    document.getElementById("cb").innerHTML = "B) Any organism that hosts the sexually mature, reproductive stage of a parasite";
    document.getElementById("cc").innerHTML = "C) Any organism that hosts an immature, non-reproductive stage of a parasite";
    document.getElementById("cd").innerHTML = "D) Any organism that lives on or inside another species";
  }else if(x == 4){
    var choice = document.getElementById("para").value;
    if(choice == "c"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Which of the following is the dormant stage of Giardia lamblia?";
    document.getElementById("ca").innerHTML = "A) Cyst";
    document.getElementById("cb").innerHTML = "B) Trophozoite";
    document.getElementById("cc").innerHTML = "C) Tachyzoite";
    document.getElementById("cd").innerHTML = "D) Oocyst";
  }else if(x == 5){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    alert('Succesfully answered all the questions.');
    document.getElementById("excercise").style.display = "none";
    document.getElementById("scores").style.display = "block";
    results();
  }
  document.getElementById("answer").innerHTML = "";
  if(x != 5){
    x++;
    document.getElementById('qNumber').value = x;
  }else{
    document.getElementById('qNumber').value = 1;
  }
}

function submitDiseases(){
  var x = document.getElementById('qNumber').value;
  if(x == 1){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "How was the theory of spontaneous generation used to explain why food that was left out would eventually be covered in microbes, maggots, flies, and rodents?";
    document.getElementById("ca").innerHTML = "A) It explains how living organisms can arise from nonliving matter.";
    document.getElementById("cb").innerHTML = "B) These organisms were created by and arose from the food itself.";
    document.getElementById("cc").innerHTML = "C) These organisms were caused by tiny microorganisms invading a host organism.";
    document.getElementById("cd").innerHTML = "D) The theory of spontaneous generation was used to explain why heat and refrigeration are best for preserving food.";
  }else if(x == 2){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "What is the Germ Theory of Disease?";
    document.getElementById("ca").innerHTML = "A) Some infectious diseases are caused by tiny microorganisms invading a host organism.";
    document.getElementById("cb").innerHTML = "B) Living organisms can only come from other living organisms.";
    document.getElementById("cc").innerHTML = "C) Living organisms can arise from inanimate, nonliving matter.";
    document.getElementById("cd").innerHTML = "D) Disease is often a result of breathing bad or polluted air.";
  }else if(x == 3){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Why are there so many different kinds of antibiotics?";
    document.getElementById("ca").innerHTML = "A) Different antibiotics combat a different set of diseases.";
    document.getElementById("cb").innerHTML = "B) Different regions need different antibiotics.";
    document.getElementById("cc").innerHTML = "C) You need to combine antibiotics to combat certain diseases, so there needs to be a variety.";
    document.getElementById("cd").innerHTML = "D) There is really only one kind of antibiotic, but many different companies produce it.";
  }else if(x == 4){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Why was the discovery of germ theory so important?";
    document.getElementById("ca").innerHTML = "A) It led to the discovery of vaccines.";
    document.getElementById("cb").innerHTML = "B) It increased people's life spans by changing medicine, food preparation, and waste disposal.";
    document.getElementById("cc").innerHTML = "C) It led to the discovery of antibiotics.";
    document.getElementById("cd").innerHTML = "D) It helped to decrease tuberculosis rates.";
  }else if(x == 5){
    var choice = document.getElementById("para").value;
    if(choice == "b"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    alert('Succesfully answered all the questions.');
    document.getElementById("excercise").style.display = "none";
    document.getElementById("scores").style.display = "block";
    results();
  }
  document.getElementById("answer").innerHTML = "";
  if(x != 5){
    x++;
    document.getElementById('qNumber').value = x;
  }else{
    document.getElementById('qNumber').value = 1;
  }
}

function submitMicro(){
  var x = document.getElementById('qNumber').value;
  if(x == 1){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "Nitrogen is part of what vital substance in plant cells?";
    document.getElementById("ca").innerHTML = "A) Nectar";
    document.getElementById("cb").innerHTML = "B) Cellulose";
    document.getElementById("cc").innerHTML = "C) Glucose";
    document.getElementById("cd").innerHTML = "D) Chlorophyll";
  }else if(x == 2){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "The relationship between nitrogen-fixing bacteria and legumes can best be described as:";
    document.getElementById("ca").innerHTML = "A) Amensalism";
    document.getElementById("cb").innerHTML = "B) Parasitism";
    document.getElementById("cc").innerHTML = "C) Predation";
    document.getElementById("cd").innerHTML = "D) Commensalism";
  }else if(x == 3){
    var choice = document.getElementById("para").value;
    if(choice == "c"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "What term describes the process of converting atmospheric nitrogen to ammonia?";
    document.getElementById("ca").innerHTML = "A) Assimilation";
    document.getElementById("cb").innerHTML = "B) Ammonification";
    document.getElementById("cc").innerHTML = "C) Denitrification";
    document.getElementById("cd").innerHTML = "D) Nitrogen fixation";
  }else if(x == 4){
    var choice = document.getElementById("para").value;
    if(choice == "a"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    document.getElementById("question").innerHTML = "When burned, which fossil fuel will release the greatest amount of pollution into the air?";
    document.getElementById("ca").innerHTML = "A) Wood";
    document.getElementById("cb").innerHTML = "B) Natural gas";
    document.getElementById("cc").innerHTML = "C) Coal";
    document.getElementById("cd").innerHTML = "D) Petroleum";
  }else if(x == 5){
    var choice = document.getElementById("para").value;
    if(choice == "d"){
      var right = document.getElementById('dnaRight').value;
      right++;
      document.getElementById('dnaRight').value = right;
    }else{
      var wrong = document.getElementById('dnaWrong').value;
      wrong++;
      document.getElementById('dnaWrong').value = wrong;
    }
    alert('Succesfully answered all the questions.');
    document.getElementById("excercise").style.display = "none";
    document.getElementById("scores").style.display = "block";
    results();
  }
  document.getElementById("answer").innerHTML = "";
  if(x != 5){
    x++;
    document.getElementById('qNumber').value = x;
  }else{
    document.getElementById('qNumber').value = 1;
  }
}

function setValue(x){
  if(x == 1){
    document.getElementById("para").value = "a";
    document.getElementById("answer").innerHTML = "A";
  }else if(x == 2){
    document.getElementById("para").value = "b";
    document.getElementById("answer").innerHTML = "B";
  }else if(x == 3){
    document.getElementById("para").value = "c";
    document.getElementById("answer").innerHTML = "C";
  }else if(x == 4){
    document.getElementById("para").value = "d";
    document.getElementById("answer").innerHTML = "D";
  }
}

function results(){
  var correct = document.getElementById('dnaRight').value;
  var incorrect = document.getElementById('dnaWrong').value;
  if(correct == "" || correct == null){
    correct = 0;
  }else{
    correct = document.getElementById('dnaRight').value;
  }
  if(incorrect == "" || incorrect == null){
    incorrect = 0;
  }else{
    incorrect = document.getElementById('dnaWrong').value;
  }
  document.getElementById('corrects').innerHTML = correct;
  document.getElementById('incorrects').innerHTML = incorrect;
  document.getElementById('dnaRight').value = "";
  document.getElementById('dnaWrong').value = "";
}

function checkProgress(){
  alert('Soon to be added.');
}
