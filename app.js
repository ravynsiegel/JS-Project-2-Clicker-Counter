// set up count value
// assigns 0 to variable 'count'
let count = 0;

// JS variable 'value' inherits properties from id '#value'
const value = document.querySelector('#value');

// JS variable 'btns' inherits ALL properties of classes '.btn' via querySelectorAll
const btns = document.querySelectorAll('.btn');

// forEach() method accesses all buttons/properties in element (btn)
// 'btn' gets passed through function() to execute the following code
btns.forEach(function (btn) {

    // element.addEventListener('eventName', handler)
    // .addEventListener is a method that attaches event handler to element 'btn'
    // 'handler' is the function() that passes event object 'e' when event 'click' happens
    btn.addEventListener('click', function (e) {

        // .classList returns ALL .class attributes
        // of the .currentTarget (element 'btn' that addEventListener is attached to)
        // from 'e', the event object
        // and assigns it to variable 'styles'
        const styles = e.currentTarget.classList;

        // contains() is a Boolean (either True or False)

        // if variable 'styles' contains button class 'decrease':
        if (styles.contains('decrease')) {

            // decrease count by 1
            count--;
        }

        // if variable 'styles' contains button class 'increase':
        else if (styles.contains('increase')){

            // increase count by 1
            count++;
        }
        else{

            // if there is no button 'increase' or 'decrease', default 0:
            count = 0;
        }

        // color of counter will change depending on if count >, <, === 0:
        if (count > 0){
            value.style.color = 'green';
        }
        if (count < 0){
            value.style.color = 'red'
        }
        if (count === 0){
            value.style.color = '#222'
        }
        // .textContent removes the original text properties of variable 'value'
        // and replaces them with properties of variable 'count'
        // properties change depending on if count is >, <, === 0
        value.textContent = count;
    });
});