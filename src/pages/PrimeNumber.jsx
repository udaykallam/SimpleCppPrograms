import React from 'react'
import CodeTemplate from '../components/CodeTemplate';

const PrimeNumber = () => {
  
    const PrimeNumberCode=`
#include <bits/stdc++.h>
using namespace std;

int main()
{
	int n;
	cout<<"Enter the number: ";
	cin>>n;
	int cnt=0;
	if(n<=1) {
		cout<<n<<" is not a prime.";
	}
	else {
		for(int i=1; i<=n; i++) {
			if(n%i==0) {
				cnt++;
			}
		}
		if(cnt>2) {
			cout<<n<<" is not a prime.";
		} else {
			cout<<n<<" is a prime.";
		}
		return 0;
	}
}`;

const PrimeNumberDescription = `A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
This program checks if the entered number is prime by counting its divisors. If it has exactly two divisors (1 and itself), it is prime.`;

    return (
    <>
    <CodeTemplate
        title="Prime Number"
        description={PrimeNumberDescription}
        code={PrimeNumberCode}      
    />
    </>
  )
}

export default PrimeNumber