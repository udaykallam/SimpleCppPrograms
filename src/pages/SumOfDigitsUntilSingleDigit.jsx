import CodeTemplate from "../components/CodeTemplate";

export default function SumOfDigitsUntilSingleDigit() {
    const code= `
#include <bits/stdc++.h>
using namespace std;

int fun(int n){
    int sum=0;
    while(n!=0){
        int rem=n%10;
        sum+=rem;
        n=n/10;
    }
    if(sum>=0&&sum<=9){
        return sum;
    }
    else{
     return fun(sum);   
    }
}

int main()
{
    int n;
    cin>>n;
    cout<<fun(n);
    return 0;
}
`
const description = `This program calculates the sum of the digits of a number until a single digit is obtained. It uses recursion to repeatedly sum the digits until the result is a single digit.`;
    
    return (
        <>
        <CodeTemplate
            title="Sum of Digits Until Single Digit"
            code={code}
            description={description}
        />
        </>
    )
}