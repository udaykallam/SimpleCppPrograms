import CodeTemplate from "../components/CodeTemplate";

export default function MissingNumberInArray() {
    const code=`
#include <iostream>
using namespace std;

int missingElement(int arr[],int n){
    int total=((n+1)*(n+2))/2;
    for(int i=0;i<n;i++){
        total-=arr[i];
    }
    return total;
}

int main()
{
    int n;
    cout<<"Enter the length of array: ";
    cin>>n;
    int arr[n];
    cout<<"Enter the array elements: ";
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    cout<<"Missing element: "<<missingElement(arr,n);
    return 0;
}`

const description = `This program finds the missing number in an array of size n containing numbers from 1 to n+1. It calculates the expected sum of the first n+1 natural numbers and subtracts the sum of the elements in the array to find the missing number.`;
    
    return (
        <>
        <CodeTemplate
            title="Finding Missing Number in an Array"
            code={code}
            description={description}
        />
        </>
    )
}