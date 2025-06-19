import CodeTemplate from "../components/CodeTemplate";

export default function SumOfMatrixElements() {
    const code=`
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int row,col;
    cout<<"Enter rows, cols: ";
    cin>>row>>col;
    int matrix[row][col];
    int sum=0;
    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cin>>matrix[i][j];
            sum+=matrix[i][j];
        }
    }
    cout<<"Sum of elements: "<<sum;
    return 0;
}
    `
    
const description = `This program calculates the sum of all elements in a matrix. It prompts the user to enter the number of rows and columns, then reads the matrix elements and computes their sum.`;
    return (
        <>
        <CodeTemplate
            title="Sum of Matrix Elements"
            code={code}
            description={description}
        />
        </>
    )

}