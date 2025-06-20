import CodeTemplate from "../components/CodeTemplate";

export default function RightAngledTriangle() {
    const code =`
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout<<"Enter no. of rows: ";
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++) cout<<"* ";
        cout<<endl;
    }
}`

const description = `This program prints a right-angled triangle pattern using asterisks. The number of rows is determined by user input, and each row contains an increasing number of asterisks.`;
    
    return (
        <>
        <CodeTemplate
            title="Right Angled Triangle Pattern"
            code={code}
            description={description}
        />
        </>
    )

}