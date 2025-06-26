import CodeTemplate from "../components/CodeTemplate";

export default function NoOfZeroBits() {
    const code=`
    
#include <iostream>
using namespace std;

int countZeroBits(int n){
    int cnt=0;
    int totalCount=0;
    while(n){
        cnt+=n&1;
        totalCount++;
        n>>=1;
    }
    return totalCount-cnt;
}

int main()
{
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    cout<<"No. of Zero bits: "<<countZeroBits(n);
    return 0;
}`

const description = `This program counts the number of zero bits in a given integer. It uses bitwise operations to determine the total number of bits and the number of set bits (1s), then calculates the number of zero bits by subtracting the count of set bits from the total count of bits.`;
return (
    <>
    <CodeTemplate
        title="Number of Zero Bits in a Number"
        code={code} 
        description={description}
    />
    </>
)

}