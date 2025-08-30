import CodeTemplate from "../components/CodeTemplate";

export default function SumOfPrimesExcludingLargest() {
   const code=`
#include <bits/stdc++.h>
using namespace std;

bool isPrime(int n) {
	if(n<2) return false;
	for(int i=2; i<n; i++) {
		if(n%i==0) return false;
	}
	return true;
}

int fun(int arr[],int n) {
	vector<int> primes;
	for(int i=0; i<n; i++) {
		if(isPrime(arr[i])) {
			primes.push_back(arr[i]);
		}
	}
	sort(primes.begin(),primes.end());
	int sum=0;
	for(int i=0; i<primes.size()-1; i++) {
		sum+=primes[i];
	}
	return sum;
}

int main()
{
	int n;
	cin>>n;
	int arr[n];
	for(int i=0; i<n; i++) {
		cin>>arr[i];
	}
	cout<<fun(arr,n);
	return 0;
}`
const description = "This program calculates the sum of all prime numbers in an array, excluding the largest prime number.";
return (
    <>
    <CodeTemplate
    title={"Sum of Primes Excluding Largest"}
    code={code} 
    description={description} />
    </>
)
}
