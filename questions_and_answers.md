<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>- A: `{}`</b></summary>
<p>

#### Answer: ?

<i>output will be empty object beacause there is no property and value only empty object declared</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>- C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>Here we are trying to calculate number and string value that's why this function won't return exact value like 1 + 2 = 3, this function will return value like 1 + '2' = "12" string value</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>- A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>we are updating info.favoriteFood to "🍝" by assigning it a new value. This doesn't change the food array in any way; it will only change the value associated with the favoriteFood property of the info object</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>- B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>we define a function with a parameter "name" and we are returning name with a greeting but when we call the function we didn't provide any value that's why name will treat as like undefined and the function will print Hi there undefined also there is no default value</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>- C: 3</b></summary>
<p>

#### Answer: ?

<i>here we declare count value 0 and array we itarate through the array also have a condition if num value true then other operation will work else this will itarate next element which is 1 and this time condition will true and the count value increase from 0 to 1 with this method "+=" and this process will continue the last value of caount is 3 after the itaration</i>

</p>
</details>
