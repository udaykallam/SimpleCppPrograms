import CodeTemplate from '../components/CodeTemplate'; 

const palindromeCode = `#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the number: ";
    cin>>n;
    string s=to_string(n);
    string copied_string=s;
    reverse(s.begin(),s.end());
    if(s==copied_string)
        cout<<"Palindrome";
    else
        cout<<"Not a Palindrome";
    return 0;
}
`;

const palindromeDescription = `A palindrome is a number or text that reads the same forward and backward.
This program checks if the entered number is a palindrome by converting it to a string,
reversing it, and comparing with the original.`;

const Palindrome = () => (
  <CodeTemplate
    title="Palindrome"
    description={palindromeDescription}
    code={palindromeCode}
  />
);

export default Palindrome;
