String Incrementer
Your task is to write a function that increments a string to generate a new one.

If the string ends with a number, increment the number by 1.
If it doesn’t end with a number, append 1 to the string.
Preserve the number of digits if there are leading zeros.
Examples
incrementString("foo");  
// Output: "foo1"

incrementString("foobar23");  
// Output: "foobar24"

incrementString("foo0042");  
// Output: "foo0043"

incrementString("foo099");  
// Output: "foo100"
