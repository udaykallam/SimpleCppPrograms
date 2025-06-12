import React from 'react'
import CodeTemplate from '../components/CodeTemplate'

const OddEven = () => {
    const OddEvenCode = `
    #include<bits/stdc++.h>
    using namespace std;

    int main() {
        int n;
        cout << "Enter a number: ";
        cin >> n;

        if (n % 2 == 0) {
            cout << n << " is an even number." << endl;
        } else {
            cout << n << " is an odd number." << endl;
        }
        return 0;
    }`
    const OddEvenDescription = `This program checks if a number is odd or even by using the modulus operator.
If the number is divisible by 2 (i.e., the remainder when divided by 2 is 0), it is classified as even; otherwise, it is classified as odd.`
  return (
    <>
    <CodeTemplate
        title="Odd or Even Number"
        description={OddEvenDescription}
        code={OddEvenCode}  
    />
    </>
  )
}

export default OddEven
