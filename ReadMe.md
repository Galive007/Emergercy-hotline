What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1.querySelector I can write document.querySelector(".myclass") to get elements with class and document.querySelector("#myid") to get element with ID 

2.querySelector and getElementById both return a single element. querySelectorAll and getElementsByName both return NodeLists.

How do you create and insert a new element into the DOM?
i.create new div : its makes position to new div...
Example:    const newDiv=document.createElement('div')
            newDiv.innerHTML=`
            (create HTML structure)
             `
ii.insert a new element: 
Example:    'callingID'.append(newDiv)

What is Event Bubbling and how does it work?
When we clicked on the div with the child as its id, we should get the output as 'child' on our console. But unexpectedly, we are receiving a different output even we have not clicked on divs with parent and grandparent as their id. The child div lies inside the parent div as well as in the grandparent div. So, when the child div clicked, we indirectly clicked on both parent div and grandparent div. Thus, propagation is moving from inside to outside in the DOM or we can say events are getting bubble up. 

What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
Example:if (e.target.className.includes('call-btn')) {
        const callBtn = e.target;
        }

What is the difference between preventDefault() and stopPropagation() methods?
i.preventDefault() addresses the default browser behavior for an event.
ii.stopPropagation() addresses the propagation of the event through the DOM hierarchy.
