import CodeTemplate from "../components/CodeTemplate";

export default function NoOfSetBits() { 
    const code=`
#include <iostream>
using namespace std;

int countSetBits(int n){
    int cnt=0;
    while(n){
        cnt+=n&1;
        n>>=1;
    }
    return cnt;
}

int main()
{
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    cout<<"No. of set bits: "<<countSetBits(n);
    return 0;
}`
const description = `This program counts the number of set bits (1s) in the binary representation of a given integer. It uses bitwise operations to check each bit of the number and counts how many bits are set to 1.`;
    return (
        <>
        <CodeTemplate
            title="Number of Set Bits in a Number"
            code={code}
            description={description}
        />
        </>
    )

}