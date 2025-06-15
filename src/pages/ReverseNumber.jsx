import React from 'react'
import CodeTemplate from '../components/CodeTemplate'

const ReverseNumber = () => {
  const ReverseNumberCode = `
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,reverse=0,remainder;
    cout<<"Enter the number: ";
    cin>>n;
    while(n!=0){
        remainder=n%10;
        reverse=reverse*10+remainder;
        n/=10;
    }
    cout<<"Reversed Number: "<<reverse;
}
`
    const ReverseNumberDescription = `Reversing a number involves reversing the order of its digits. For example, reversing 12345 results in 54321. This can be achieved by repeatedly extracting the last digit and building the reversed number.`
    return (
    <>
      <CodeTemplate
        title="Reverse Number"
        description={ReverseNumberDescription}
        code={ReverseNumberCode}
        />
    </>
  )
}

export default ReverseNumber
