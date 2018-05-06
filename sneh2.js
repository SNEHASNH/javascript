
//var hElem = document.getElementById("my-heading");
//alert(hElem);
//alert(hElem.innerHTML);
//alert(hElem.getAttribute("id"));
//alert(hElem.tagName);

//var pElem = document.getElementsByClassName("my-paragraph");
//alert(pElem);
//alert(pElem[0]);
//alert(pElem[1].innerHTML);

//for(var i=0; i < pElem.length; i++){
	//alert(pElem[i].innerHTML);
}


//var ulElem = document.getElementsByTagName("ul");
//alert(ulElem);
//alert(ulElem[1].innerHTML);


//var liElem = ulElem[0].getElementsByTagName("li");
//alert(liElem[2].innerHTML);


//var nameElem = document.getElementsByName("user-name");
//alert(nameElem[0].tagName);

//var pElem = document.querySelector("p");
//alert(pElem.innerHTML);

//var hElem = document.querySelector("#my-heading");
//alert(hElem.innerHTML);


//var pElems = document.querySelectorAll("p");
//alert(pElems[1].innerHTML);


//var pElemss = document.querySelectorAll("div p");
//alert(pElemss[0].innerHTML);


//  Navigtaing between elements

//var ulElem = document.getElementsByTagName("ul")[0];

//alert("Node name: " + ulElem.nodeName);
//alert("Node type: " + ulElem.nodeType);



//alert("Node Parent: " + ulElem.parentNode.nodeName);

var ulElem= document.getElementById("my-list");
 
 var newLiElem= document.createElement("li");

 var newLiText=document.createTextNode("This is new list item");

 newLiElem.appendChild(newLiText);

 //ulElem.appendChild(newLiElem);


 // ALternate way toadd new element
 // Get list item using id

 var liElem= document.getElementById("list-item-01");

 // liElem.parentNode.appendChild(newLiElem);



// Add new element using insertBfore

//liElem.parentNode.insertBfore(newLiElem,liElem);

// Replace element using repalceChild

//liElem.parentNode.replaceChild(newLiElem, liElem);


var hElem= document.getElementById("my-heading");

// add attribute to element

hElem.setAttribute("align","center");

















