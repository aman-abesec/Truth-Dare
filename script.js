const list=["Truth: Tell me about the last time you got really embarrassed.","Dare: Hum a song of your choice, don’t stop until someone correctly guesses the song.","Truth: What’s the longest you’ve worn the same outfit for?","Dare: Pour a glass of ice water on your head.","Truth: Have you ever had a crush on one of your teachers?","Dare: Bite down on both of your pinky fingers for fifteen seconds, then tightly interlock your pinkies.","Truth: Where are you ticklish?","Dare: Do your best touchdown celebration dance.","Truth: What do you think is your best feature?","Dare: Go as long as you can without blinking.","Truth: Have you ever cheated on a test?","Dare: Choose another player to give you a wet willy.","Truth: Who was your first celebrity crush?","Dare: Do the salt and ice challenge.","Truth: Do you believe in any superstitions?","Dare: Lick your big toe.","Truth: Have you showered today?","Dare: Open the closest book to a random page, point at a random sentence, and then text that sentence to the last person that texted you without giving any other context.","Truth: Where’s the farthest you’ve traveled?","Dare: Take a deep breath of the socks you are wearing right now."];

function addName(){
  var inputName=document.querySelector(".text-input");
  var listName=document.querySelector(".list-item");
  if (inputName.value===""){
    alert("Invalid Input");
  }
  else{
    var li = document.createElement("li");
    li.innerHTML=inputName.value.slice(0,13);
    var attr = document.createAttribute('class');
    attr.value="list-element";
    li.setAttributeNode(attr);
    listName.appendChild(li);
    inputName.value='';
  }
}

function playFunction(){
  var selectedName=document.querySelectorAll(".list-element");
  var name=document.querySelector(".selected-name");
  var taskP=document.querySelector(".task");
  if (selectedName.length===0){
    alert("Please Mention Some Name");
  }
  else{
  var num=Math.floor(Math.random()*(selectedName.length));
  console.log(selectedName);
  console.log(num);
  name.innerHTML=selectedName[num].innerHTML;
  taskP.innerHTML=list[Math.floor(Math.random() *(list.length) )];
 }
}
