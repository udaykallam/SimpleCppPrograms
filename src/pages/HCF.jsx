import CodeTemplate from "../components/CodeTemplate"

export default function HCF() {
    const HCFCode = `
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n1,n2,hcf=1;
    cout<<"Enter the two numbers: ";
    cin>>n1>>n2;
    for(int i=1;i<=n1||i<=n2;i++){
        if(n1%i==0 && n2%i==0){
            hcf=i;
        }
    }
    cout<<"HCF: "<<hcf<<endl;
    return 0;
}`

const HCFDescription = `The Highest Common Factor (HCF), also known as the Greatest Common Divisor (GCD), is the largest number that divides two or more numbers without leaving a remainder. This code calculates the HCF by iterating through all numbers up to the smaller of the two inputs and checking for divisibility.`
    
    return (
    <>
    <CodeTemplate
        title="HCF"
        description={HCFDescription}
        code={HCFCode}
        />
    </>
    )
}