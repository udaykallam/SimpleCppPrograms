import React from 'react'
import CodeTemplate from '../components/CodeTemplate';

const Fibonacci = () => {
  const FibonacciCode = `
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout<<"Enter the range: ";
    cin>>n;
    int a=0,b=1;
    cout<<a<<", "<<b<<", ";
    int nextTerm;
    for(int i=2;i<n;i++){
        nextTerm=a+b;
        a=b;
        b=nextTerm;
        cout<<nextTerm<<", ";
    }
    return 0;
}`;

const fibonacciDescription = "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.";    
  
    return (
    <>
    <CodeTemplate
    title={"Fibonacci Sequence"}
    description={fibonacciDescription}
    code={FibonacciCode}
    />
    </>
  )
}

export default Fibonacci