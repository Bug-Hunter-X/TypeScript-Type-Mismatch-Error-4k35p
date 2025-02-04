# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: a type mismatch. The `add` function expects two numbers as input, but the code attempts to pass a string and a number.  TypeScript's type system catches this error during compilation. The solution involves type checking and potentially using type guards or conditional logic to handle different data types.

## Bug Report

The `bug.ts` file contains the code with the type mismatch error.  Running this code results in a compilation error from TypeScript, highlighting the invalid type passed to the `add` function. 

## Solution

The `bugSolution.ts` file shows one approach to resolve the type error. Type guards are used to check argument types before applying the addition operation.