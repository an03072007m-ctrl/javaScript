// 26) LIS – độ dài dãy con tăng dài nhất (strict)
  function lisLength(a) {
      if (!a.length) return 0;
      const dp = Array(a.length).fill(1);
      for (let i = 1; i < a.length; i++) {
          for (let j = 0; j < i; j++) {
              if (a[j] < a[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      return Math.max(...dp);
  }

  console.log(lisLength([10,9,2,5,3,7,101,18]), "expected 4");
  console.log(lisLength([0,1,0,3,2,3]), "expected 4");
  console.log(lisLength([7,7,7,7,7]), "expected 1");
  console.log(lisLength([]), "expected 0");
  console.log(lisLength([1,2,2,3  ]), "expected 3");