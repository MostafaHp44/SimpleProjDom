let val=0
const moolike =document.getElementById("like")
let mooprice  =document.getElementById("price")

function additem()
{
    val+=1;
 document.getElementById("numitem").innerHTML=val;
 mooprice*=val;
 document.getElementById("price").innerHTML=mooprice;

 
}

function delitem()
{
    val=0
 document.getElementById("numitem").innerHTML=val;

 
}

function decitem()
{
    if (val>0) 
    {
        val-=1
        document.getElementById("numitem").innerHTML=val;
        document.getElementById("price").innerHTML=val*mooprice

        
    }
   
}

moolike.addEventListener('click', function()
{
  if(this.style.backgroundColor === 'red') {
    this.style.backgroundColor = '';
  }      
  else
  {
    this.style.backgroundColor = 'red';
  }      
});
