---
title: Rethinking Problem Solving.
slug: "aoc"
dateTime: 2023-12-23T15:22:00Z
draft: false
cover: "https://assets.leetcode.com/users/images/65e42236-d80d-41cc-9435-611d2bd09aef_1653139481.8304794.png"
tags:
  - problem solving
  - advent of code
  - leet code
  - software engineering
description:
  a descussion about advent of code as an alternative to leet-code-type of problem solving.
---


> <b>Disclaimer</b>: Advent of code type of challenges does'nt actually replace the typical problem solving setting, but I hope this article gives you something to think about approaching problems and practicing. 



## Contents

## Motivation

When I was first introduced to problem solving I didn't find appealing as others do, Yeah I know it's probably a `skill issue` but here are my reasons. It's almost like tic tac toe, mathematically solved every problem comes with a specific concentration of one or multiple data structures or algorithms. And for me it felt like a chore, as if we all had to do the same essence then use none of it.

## LeetCode-like problem solving.

### Areas of interest
Though it seems it has a variety of topics but it is still constrained to data structures (arrays, linked lists, trees, graphs, etc.) and algorithmic techniques (sorting, searching, dynamic programming, etc.)

### Code Style
Solutions are more about functionality than elegance. The emphasis is on solving the problem
efficiently rather than creating modular, maintainable code. This encourages participants to
focus on algorithmic prowess rather than polished software engineering practices.
Also that maybe what makes people like it, as sticking to strict rules is no fun.

### Programming Paradigms
Problems are carefully crafted to require almost always procedural code,
avoiding object-oriented or functional programming. This limitation challenges participants
to deepen their understanding of procedural programming and algorithmic thinking.
However, this aspect doesn't push you forward if not pushes you back. because you will indeed need these other paradigms.

### Testcases
> It's tedious to find what is wrong without knowing what makes it wrong.

- **Limited Test Case Visibility**: While the criteria for correctness are provided in the editorial, the actual test cases may not be visible to participants.
This deliberate lack of transparency adds an extra layer of challenge. which does eaither of two things:
  * Challenges your brain to achieve it's full potenial.
  * Makes you want immideate, peaceful death.

- **Debugging Challenges**: Debugging becomes more complex when participants can't see which test case(s) failed. this somewhat mirrors real-world scenarios where identifying the root cause of an issue can be challenging. but you can't reach the root of the issue if you don't know what even went wrong. However, it builds resilience and problem-solving skills even in scenarios with limited information.

### Metrics
the main factor is always time and space complexities
while in real life you'd want other considerations like extinsibility, modularity.

## Advent Of code
As stated per their website, [Advent Of code](https://adventofcode.com/) is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as interview prep, company training, university coursework, practice problems, a speed contest, or to challenge each other.

it happens throught the december of every year but the problems are publically available you can always get to older problems.

### Code Style
there is no code submission which makes the code even more disposable and gives you even more freedom, but there's a catch.

### Multistage solution
It maybe only requires the final answer but the way you solved the first part will greatly impact your second part
If you hardcoded the solution sloppily, you'll have a hard time doing that for part two as it is generally more challenging.

### Testcases
It is only one testcase of multible parts, the each subsequent part relies on the previous's logic, so you have to be clever about it.

### Paradigms
people doing AOC generally tend to expirment which is a good thing. I find myself trying to solve problems using numpy. 
which a python library for mathematical computaion, which is fundmentally different from using array. this is more likely to be how I'd solve it in a real senario, since numpy is:
  - incredibly faster
  - supports parallelism


here are some code samples for how would I solve some problems in both settings.

- One of the problem solving-starters is the [two-sum](https://leetcode.com/problems/two-sum/) problem, I used an alternative and shorter way of doing it.
```python 
import numpy as np
def two_Sum(arr: list[int], target:int):
    np_arr = np.array(arr)
    return np.intersect1d(target - np_arr, np_arr).any()
```

- for problem [climbing-stairs](https://leetcode.com/problems/climbing-stairs/) which is typically solved as a fibonacci sequence, but what if you don't know that? 
I solved it mathematically in O(N) without relying of the fact that the pattern is
fibonacci numbers using [combinatorics](https://www.mathsisfun.com/combinatorics/combinations-permutations.html).

```python
p, limit = 1, 45
 # precomputed list of factorials
factorial = [1] + [(p:=p*i) for i in range(1,limit+1)]
def C(n,r): ## Number of combinations
    return factorial[n] / (factorial[n-r] * factorial[r])
def climbStairs(n:int) -> int:
    return int(sum(C(n-i, i) for i in range(n//2+1)))
```

- A third example is [spiral-matrix](https://leetcode.com/problems/spiral-matrix/), how I approached it is to detect the spiraling pattern and use a rotation function to determine your next step
rather than the typical solution that would use two pointers to approach it.
```python
def spiral_matrix(n):
    rotate = lambda a,b: (-b,-a) if abs(b) > 0 else (b,a) 
    (i,j), dir, counter = (-1,0), (1,0), 1
    spiral = [[0]*n for _ in range(n)]
    changes = [i//2 for i in range(n*2, 1, -1)]
    prev = n
    for nch in changes:
        for _ in range(nch):
            di, dj = dir
            i,j = i+di, j+dj  # get next cell     
            spiral[j][i] = counter
            counter+=1
        prev = nch
        if nch == prev:
            dir = rotate(*dir)
    return spiral
```

> these soltions are not anyway better, but they are thoughtfull, and I thing that's the essence of AOC, actual
problem solving rather than memorizing hunderds of ideas hoping one of them will be in my interview.

## Long story short
Traditional LeetCode-like problem-solving emphasizes algorithmic efficiency, procedural coding, and limited visibility of test cases. In contrast, Advent of Code provides more freedom with disposable code, encourages adhoc soltions as if you're coming up with the alogrithms yourself, and fosters experimentation with different programming paradigms. Both approaches have their merits, but the key lies in finding a balance that aligns with individual learning preferences and real-world problem-solving skills.
