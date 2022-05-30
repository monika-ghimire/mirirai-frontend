
let userList=document.getElementById('userlist')
let button1=document.getElementById('ans')
let button=document.getElementById('remove')
let todoList=[]
var liStr="";
button1.addEventListener('click',fun1);
var ulList=document.getElementById("todoList");
function fun1()
{
    console.log(userlist.value) ;
    let task=userlist.value;
   todoList.push(task);
   console.log(todoList);
   let innerListStr="<li>"+task+"</li>";
    liStr+=innerListStr;
    ulList.innerHTML=liStr; 
}

function forRemove(task,innerListStr)
{
 
    todoList.pop(task);
    console.log(todoList);
    let removeStr="";
        for(var i=0;i<todoList.length;i++)
        {
            let str="<li>"+todoList[i]+"</li>";
            removeStr=removeStr+str;
        }
    ulList.innerHTML="";
    ulList.innerHTML=removeStr;

    
}
button.addEventListener('click',forRemove);

    