import React from 'react'
import CodeTemplate from '../components/CodeTemplate'

const Armstrong = () => {
  
    const ArmstrongCode=`
#include<bits/stdc++.h>
using namespace std;

int order(int x){
    int cnt=0;
    while(x){
        cnt++;
        x/=10;
    }
    return cnt;
}

bool isArmStrong(int num,int cnt){
    int sum=0,temp,digit;
    temp=num;
    while(temp!=0){
        digit=temp%10;
        sum=sum+pow(digit,cnt);
        temp/=10;
    }
    return num==sum;
}

int main(){
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    int cnt=order(n);
    if(isArmStrong(n,cnt))
        cout<<"Armstrong Number";
    else
        cout<<"Not an Armstrong Number";
}
    `

    const ArmstrongDescription = `An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because \(1^3 + 5^3 + 3^3 = 153\).`
  
    return (
    <>
      <CodeTemplate
        title="Armstrong Number"
        description={ArmstrongDescription}
        code={ArmstrongCode}
      />
    </>
  )
}

export default Armstrong
