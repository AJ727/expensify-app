const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('Should add 2 numbers', () => {
    const result = add(3,4);
    // Pass in what we want to make an assertion about
    // If result === 7, then the test passes
    expect(result).toBe(7);
});

test('Should return Hello with your name', () => {
    const result = generateGreeting('aj');
    expect(result).toBe('Hello aj');
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})



// An assertion (the old way, and this would be inside of test, I just wanted to move it)
    // if(result !== 7){
    //     throw new Error(`You add 4 and 3. The result was ${result}. Expect 7`);
    // }