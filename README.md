# Job-Application-Tracker

<hr>
<h1>Questions & Answers</h1>
<hr>
<h3>1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? </h3>
<ul>
 <li>It finds ONE element using its id  and it always returns a single element.</li>
  <li>getElementsByClassName() ->select multiple elements by class (returns a collection). </li>
  <li>querySelector() It works like CSS.,it only returns the first matching element. Even if there are many matches, it gives only the first one. </li>
  <li>querySelectorAll() it's very similar to querySelector(), However it's it returns all matching elements.it gives NodeList witch is like an arry. </li>
 </ul> 
 <hr>
 <h3>2. How do you create and insert a new element into the DOM?</h3>
 <hr>
 <ul> 
   <li>Using JavaScript, it can be done by only 3 steps. we create the element → createElement(),add content or attributes to it like → innerText, className, etc & we Insert it into the webpage → appendChild()  </li>
 </ul>
  <hr>
 <h3>3. What is Event Bubbling? And how does it work?</h3>
 <hr>
 <ul>
   <li>Bubbling means when an event happens on an element, it first runs on that element, then it automatically goes up to its parent elements one by one.
That’s how Event Bubbling works.</li>
 </ul>
  <hr>
 <h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
 <hr>
 <p>Event Delegation is a technique where instead of adding event listeners to many child elements, we add a single event listener to their parent element and handle the events from up there.</p>
  <ul>
   <li>It improves performance</li>
   <li>It works for dynamically</li>
   <li>It keeps code cleaner</li>
 </ul>
 <hr>
 <h3>5. What is the difference between preventDefault() and stopPropagation() methods?</h3>
 <hr>
 <p>Both are used inside the event handlers, but they do completely different things.<br>
   One controls browser behavior [ preventDefault() ] .<br>
   The other controls event flow in the DOM [ stopPropagation() ] . </p>

