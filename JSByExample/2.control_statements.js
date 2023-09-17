//for
    // > {
    //     for (initialization; condition; afterthought)
    //     statement
    // }

//do..while
    // When the condition is false, execution stops, and control passes to the statement following do...while.
    {let i = 0;
        do {
            i += 1;
            console.log(i);
        } while (i < 5);}
    
    //while
        // If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
        {let n = 0;
        let x = 0;
        while (n < 3) {
            n++;
            x += n;
        }}
    
    //break
        // Use the break statement to terminate a loop
        for (let i = 0; i < a.length; i++) {
            if (a[i] === theValue) {
                break;
            }
        }
    
    //continue
        // Terminates the current iteration of the statement and continues execution of the loop with the next iteration
        let i = 0;
        let n = 0;
        while (i < 5) {
            i++;
            if (i === 3) {
                continue;
            }
            n += i;
            console.log(n);
        }
        //1,3,7,12
        // If you comment out the continue;, the loop would run till the end and you would see 1,3,6,10,15.
    
    //for in
        // for..in loops over the indexes.
        // for..in iterates over all ENUMERABLE property keys of an object.
        // To iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.
        // For each distinct property, JavaScript executes the specified statements.
    
        function dumpProps(obj, objName) {
            let result = "";
            for (const i in obj) {
              result += `${objName}.${i} = ${obj[i]} \t`;
            }
            return result;
          }
    
        // For an object car with properties make and model, result would be:
        // car.make = Ford
        // car.model = Mustang
    
    // for of
          // for...of loops over property values
          // for..of iterates over the values of any data structure with length.
          // The for...of statement creates a loop Iterating over ITERABLE OBJECTS
          // Invokes a custom iteration hook with statements to be executed for the value of each distinct property.
          
        const arr = [3, 5, 7];
        arr.foo = "hello";
    
        for (const i in arr) {
            console.log(i);
        }
        // "0" "1" "2" "foo"
    
        for (const i of arr) {
            console.log(i);
        }
        // Logs: 3 5 7
    
        // In JavaScript, Objects are not iterable unless they implement the iterable protocol.
        const obj = { foo: 1, bar: 2 };
    
        for (const [key, val] of Object.entries(obj)) {
            console.log(key, val);
        }
        // "foo" 1
        // "bar" 2
    
    // for each
        // The forEach() method executes a provided function once for each array element
    
        const array1 = ['a', 'b', 'c']; // {0 : 'a', 1 : 'b', 2 : 'c', 'foo' : 'hello'}
        array1.forEach(element => console.log(element));
    