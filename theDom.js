
    
//THE DOM

    // The window object
/*
    window.innerWidth;
    window.innerHeight;
    innerWidth;
    outerWidth;
    outerHeight;

    localStorage.setItem('key1', 1000);
    console.log(localStorage.getItem('key1'));

    sessionStorage.setItem('key2', 2000);
    console.log(sessionStorage.getItem('key2'));//Deletes stored data after browser is closed

    window.open("http://www.google.com");
    console.log(window.location);
    
    location.hostname; location.pathname; location.reload(true); 
    //location.replace('http://bing.com');
*/

///The Document Object and how to interact 
    
    console.log(document);
    console.log(document.URL);
    console.log(document.title);
    console.log(document.body);
    console.log(document.body.children);
    console.log(document.body.children[0]);
    console.log(document.body.children[0].children[0]);
    console.log(document.body.firstChild); //everything BEFORE the 1st <body> tag
    console.log(document.body.firstElementChild);
   // console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
    //console.log(document.body.firstElementChild.firstElementChild.parentElement);
    console.log(document.body.lastElementChild);//everything AFTER the 1st <body> tag
    console.log(document.body.children[0].textContent);
    document.body.children[0].textContent = "changed text for <h1>";
    document.body.children[0].style.backgroundColor = "red";

    console.log(document.getElementsByTagName('ul'));
    console.log(document.getElementById('someIdName'));
    console.log(document.getElementsByClassName('someClassName'));

    console.log(document.querySelector('h1'));
    console.log(document.querySelector('.someClassName'));
    console.log(document.querySelector('#someIdName'));
    console.log(document.querySelectorAll('#ALL-Id-Names'));
    //document.querySelector('a').style.backgroundColor = 'red';
    //document.querySelectorAll('a')[1].style.backgroundColor = 'red';
    //document.querySelectorAll('a').firstElementChild.textContent= 'Change link text';

//Create new element 
    
    var p = document.createElement('P');
    p.textContent = "Create new paragraph";
    p.style.fontSize = '20px';
    var a = document.querySelector('h1');
    a.appendChild(p);
    //a.insertBefore(p, a);

    //Deleting element
    var deleteH3tag_1 = querySelector('h3');
    deleteH3tag_1.remove();
    var deleteH2tag = querySelectorAll('h2')[1];
    deleteH2tag.parentElement.removeChild(deleteH2tag);
    deleteH2tag_1.parentNode.removeChild(deleteH2tag_1);

    alert("this is an alert");
    confirm("Are you sure method alert");
    prompt("Enter something ");

/////////////////////////////////////////////////////////////////////////////////////////

// THE DOM EVENTS!

    var btn = querySelector('button');
        
        //Event handlers

        window.onload = function(){
            console.log("window loaded!")
        }
        btn.onclick = function(){
            alert("clicked");
        }
        document.onclick = function(){
            console.log("clicked on the window");
        }

        //Event Listeners

        btn.addEventListener('click', listener1);
        btn.addEventListener('click', listener2);
        
        setTimeout(function(){
            btn.removeEventListener('click', listener1);
        }, 2000)

        function listener1(){
            console.log("Listener one");
        }
        function listener2(){
            console.log("Listener two");
        };

        //EVENT BEHAVIORS

        var innerBox = document.querySelector('#innerBox');
        innerBox.addEventListener('click', innerListener);
        function innerListener(event){
          console.log(event.bubbles);
          console.log(event.target);// Shows object details of a target event
          event.target.style.backgroundColor = "red";
          event.stopPropagation();//if propagation isnt stoped it triggers the inside and outside div listener
          console.log("Yellow box clicked");
        }
        
        var outerBox = document.querySelector('#outerBox');
        outerBox.addEventListener('click', outerListener);
        //outerBox.addEventListener('click', true); 
        function outerListener(event){
          console.log("Green box clicked" );
          console.log(event.clientX, event.clientY);
        }
        
        var changeColorEvent = addEventListener('click', colorChange);
        var mouseOverr = addEventListener('mouseover', mouseOver);
        var mouseOutt = addEventListener('mouseout', mouseOut);
        
        function colorChange(event){
            event.target.style.backgroundColor = "red";
        }
        function mouseOver(event){
            event.target.style.backgroundColor = 'purple'; 
        }
        function mouseOut(event){
            event.target.style.backgroundColor = 'black';
        }
