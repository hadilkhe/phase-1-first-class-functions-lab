//receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  receivesAFunction(() => {
    console.log("This is a callback function.");
  });
  
  //returnsANamedFunction
  function returnsANamedFunction() {
    //  return a named function
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); 

  //returnsAnAnonymousFunction

  function returnsAnAnonymousFunction() {
  //  return an anonymous function
  return () => {
    console.log("This is an anonymous function.");
  };
}


const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); 

  