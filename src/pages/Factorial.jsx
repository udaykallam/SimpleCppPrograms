import React from 'react'
import CodeTemplate from '../components/CodeTemplate'

const Factorial = () => {

    const FactorialCode=`
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,fact=1;
    cout<<"Enter the number: ";
    cin>>n;
    if(n==0)
        cout<<"Not Possible";
    for(int i=1;i<=n;i++){
        fact*=i;
    }
    cout<<"Factorial of "<<n<<" is: "<<fact;
    return 0;
}
    `;

    const factorialDescription="A factorial number is the product of all positive integers from a given positive integer down to 1.";
  return (
    <>
    <CodeTemplate
        title="Factorial"
        description={factorialDescription}
        code={FactorialCode}
    />
    </>
  )
}

export default Factorial