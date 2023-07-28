console.log(window)
function getAllMethods(object) {
    let methods = [];
  
    while (object && object !== Object.prototype) {
      methods = methods.concat(Object.getOwnPropertyNames(object));
      object = Object.getPrototypeOf(object);
    }
  
    return methods;
  }
  
  console.table(getAllMethods(document));