import React from 'react'
import CodeTemplate from '../components/CodeTemplate'

export const StringPalindrome = () => {

    const StringPalindromeCode= `#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cout<<"Enter the String: ";
    cin>>s;
    string copied_string=s;
    reverse(s.begin(),s.end());
    if(s==copied_string)
        cout<<"Palindrome";
    else
        cout<<"Not a Palindrome";
    return 0;
}`

const StringPalindromeDescription = `A palindrome is a string that reads the same backward as forward.
This program checks if the entered string is a palindrome by reversing it and comparing it with the original string.`


  return (
    <>
    <CodeTemplate
        title="String Palindrome"
        description={StringPalindromeDescription}
        code={StringPalindromeCode}
    />
    </>
  )
}
