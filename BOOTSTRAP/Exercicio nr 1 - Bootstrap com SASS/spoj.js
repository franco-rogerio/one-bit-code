function y() {
  let x = readline();
  console.log(x);
}


if (5 % 2 === 0)



#include <stdio.h>
#include <stdbool.h>

bool ehPrimo (int numero)
{
	for (int i = 2; i <= numero / 2; i++)
	{
		if (numero % i == 0)
		{
			return false;
		}
	}
	return true;
}

int main(void) {

int t, n[10], m[10];

scanf ("%d", &t);

for (int i = 0; i < t; i++)
{
	scanf ("%d %d", &m[i], &n[i]);
}

for (int i = 0; i < t; i++)
{
// for (int j = m [i]; j <= n[i]; j++)
// {
// 	if (ehPrimo(j))
	{
		printf("%d\n", j);
	}
}
printf("\n");
}

	return 0;
}