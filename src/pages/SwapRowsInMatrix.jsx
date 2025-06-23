import CodeTemplate from "../components/CodeTemplate"

export default function SwapRowsInMatrix() {
    const code=`
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cout<<"Enter no. of rows, cols: ";
    cin >> r >> c;
    int matrix[r][c];
    cout<<"Enter matrix elements: ";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> matrix[i][j];
        }
    }
    cout<<"Enter rows that you want to swap: ";
    int row1, row2;
    cin >> row1 >> row2;
    if (row1 >= r || row2 >= r || row1 < 0 || row2 < 0) {
        cout << "Invalid row indices" << endl;
        return 1;
    }
    for (int j = 0; j < c; j++) {
        swap(matrix[row1][j], matrix[row2][j]);
    }
    cout<<"Final Matrix: ";
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
`

const description = `This C++ program swaps two rows in a matrix. It first takes the number of rows and columns as input, then the elements of the matrix. After that, it takes the indices of the two rows to be swapped and performs the swap operation. Finally, it prints the modified matrix.`
    
    return (
        <>
        <CodeTemplate
            title="Swap Rows in Matrix"
            code={code}
            description={description}
        />
        </>
    )
}