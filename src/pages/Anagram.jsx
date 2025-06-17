import CodeTemplate from "../components/CodeTemplate"

export default function Anagram(){
    const AnagramCode = `
#include<bits/stdc++.h>
using namespace std;

bool isAnagram(string str1, string str2){
    if (str1.length() != str2.length()) {
        return false;
}
    sort(str1.begin(), str1.end());
    sort(str2.begin(), str2.end());
    return (str1 == str2);
}
int main() {
    string str1, str2;
    cout << "Enter first string: ";
    cin >> str1;
    cout << "Enter second string: ";
    cin >> str2;

    if (isAnagram(str1, str2)) {
        cout << "The strings are anagrams." << endl;
    } else {
        cout << "The strings are not anagrams." << endl;
    }
}
`

    const AnagramDescription = `An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. For example, "listen" is an anagram of "silent". This code checks if two strings are anagrams of each other by sorting their characters and comparing them.  
`


    return (
        <>
        <CodeTemplate
            title="Anagram"
            description={AnagramDescription}
            code={AnagramCode}
        />
        </>
    )
}