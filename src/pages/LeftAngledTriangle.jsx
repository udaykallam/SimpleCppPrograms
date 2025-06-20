import CodeTemplate from "../components/CodeTemplate";

export default function RightAngledTriangle() {
    const code = `
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n; cin>>n;
    for (int i = n; i > 0; i--) {
        for (int j = 1; j <= n; j++){
            if (j >= i) {
                cout << "* ";
            }
            else {
                cout << "  ";
            }
        }
        cout << endl;
    }
    return 0;
}`

const description = `This program prints a left-angled triangle pattern using asterisks. The number of rows is determined by user input, and each row contains a decreasing number of asterisks aligned to the right.`;

    return (
        <>
            <CodeTemplate
                title="Left Angled Triangle Pattern"
                code={code}
                description={description}
            />
        </>
    )

}   