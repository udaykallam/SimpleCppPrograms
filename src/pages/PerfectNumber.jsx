import React from 'react'
import CodeTemplate from '../components/CodeTemplate';

 const PerfectNumber = () => {
 const PerfectNumberCode=`
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    int sum=0;
    for(int i=1;i<n;i++){
        if(n%i==0){
            sum+=i;
        }
    }
    if(sum==n)
        cout<<"Perfect Number";
    else
        cout<<"Not a Perfect Number";
    return 0;
}
 `

 const PerfectNumberDescription = `A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. For example, 6 is a perfect number because its divisors (1, 2, and 3) sum up to 6.`;   
 
    return (
    <>
      <CodeTemplate
        title="Perfect Number"
        description={PerfectNumberDescription}
        code={PerfectNumberCode}
        />
    </>
  )
}

export default PerfectNumber
