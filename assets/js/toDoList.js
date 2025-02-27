function addTask(){
  var input=document.getElementById("input");
  //get current text from input field
  var newTask=input.value;
  //only add new item to list if some text was entered
  if(newTask != ""){
    //create new HTML list ite
    var item=document.createElement("li style=\"list-style-type: none\;
  background-color\: \#eee\;
  border\: 1px solid \#c3c3c3\;
  padding\: 10px 0px 10px 5px\;
  font-size\: 20px\;");
    //add HTML for buttons and new task text
    //note, need to use "because of"" in HTML
    item.innerHTML='<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />'+'<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;"/>' + newTask;
    //add new item as part of existing list
    document.getElementById("task").appendChild(item);
    
    /*step 4 below here*/

  }
}
//change styling used for given item
function markDone(item){
  item.className='finished';
}
function remove(item){
  //remove item completely from document
 item.remove();
}
if ('li' == 'finished'){
  item.remove();
}
