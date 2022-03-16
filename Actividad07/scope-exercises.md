# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> _Undefined y 2, se hace el llamado de la función
test() que imprimer la variable a que aún no se ha definido, además imprime la función foo() que retorna el 2_
> _Undefined_


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _1_
> _undefined_


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> _undefined_
> _baz no está declarada como una funcion_


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> _undefined_
> _se imprime la función b(), pero no retorna nada_
