/* Task:
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found". */

//code:

function checkObj(obj, checkProp) {
    let prop = obj.hasOwnProperty(checkProp);
    if (prop == true) {
      return obj[checkProp];
    } else {
    return "Not Found"
    }
    }