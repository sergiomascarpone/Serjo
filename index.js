const inputElements = document.querySelectorAll('[m-model]');
const boundElements = document.querySelectorAll('[m-bind]');
//console.log(inputElements);
let scope = {
    //name: 'Bruce'
};

function init() {
    for (let el of inputElements) {
        if (el.type === "text") {
            let propName = el.getAttribute('m-model');


            el.addEventListener('keyup', (e) => {
                //console.log(e)
                scope[propName] = e.target.value;
            });
            setPropUpdate(propName);
        }
    }
}

function setPropUpdate(prop) {
    let value;

    Object.defineProperty(scope, prop, {

        set: (newValue) => {
            value = newValue;
            // console.log(newValue);
            for (let el of inputElements) {
                if (el.getAttribute('m-model') === prop) {
                    el.value = newValue;
                }
            }
        },

        get: () => {
            return value;
        },
        // enumerable: true
    });
};

init();