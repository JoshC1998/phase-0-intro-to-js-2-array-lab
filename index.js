// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    }
    function destructivelyPrependCat(name) {
        cats.unshift(name);
        } 
        function destructivelyRemoveLastCat(name) {
            cats.pop(name);
            } 
            function destructivelyRemoveFirstCat(name) {
                cats.shift(name);
                }  
                function appendCat(name) {
                    // Declare an empty array
                    const newCatsArray = [];
                  
                    // Use the spread operator to append the new cat
                    newCatsArray.push(...cats, name);
                  
                    // Return the new array
                    return newCatsArray;
                  }
                  function prependCat(name) {
                    // Declare an empty array
                    const newCatsArray = [];
                  
                    // Use the spread operator to append the new cat
                    newCatsArray.push(name, ...cats);
                  
                    // Return the new array
                    return newCatsArray;
                  }
                  function removeLastCat () {
                  const newCatsArray = cats.slice(0, -1);
                  return newCatsArray; 
                }
                function removeFirstCat () {
                  const newCatsArray = cats.slice(1);
                  return newCatsArray; 
                }
          
