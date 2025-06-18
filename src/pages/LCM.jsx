import CodeTemplate from "../components/CodeTemplate"

export default function LCM(){
    const LCMCode = `
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n1,n2,lcm;
    cout<<"Enter the numbers: ";
    cin>>n1>>n2;
    int max=(n1>n2)?n1:n2;
    for(int i=max;i<=n1*n2;i++){
        if(i%n1==0 && i%n2==0){
            lcm=i;
            break;
        }
    }
    cout<<"LCM: "<<lcm;
    return 0;
}`

const LCMDescription = `The Least Common Multiple (LCM) of two numbers is the smallest number that is a multiple of both. This code calculates the LCM by iterating from the maximum of the two numbers up to their product, checking for divisibility.`    
    
    return (
        <>
        <CodeTemplate
            title="LCM"
            description={LCMDescription}
            code={LCMCode}
        />
        </>
    )
}