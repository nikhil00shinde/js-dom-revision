# DOM

- DOM --> Document Object Model

- Document means HTML
- Model can structure (fayda -> manipulation very easily)
- And Object is the structure is formed every node in DOM tree is DOM object representing HTML element.

---

# Script tag

- external script tag -> which have src attributes

## Example

1. p
2. script
3. h1

   - Aapki jo html parsing hati hain, jaise hi script tag milta us point pe apka block ho jati hain html parsing.
     Block kaise hoti hain, jab tak ye script tag hain ye download hoke execute nhi hota hain tab tak mei aage nhi badoonga, mei tab tak line 3 ko parse karoonga nhi
   - Because script tag webpage ki loading block ho rahi hain
     and it is called **RENDER BLOCK**

---

---

## How You optimize your speed of webpage?

1. If there any render block/script tag we will resolve that
   TYPE | Default | Defer | Async
   --- | --- | --- | ---
   Behaviour | as soon as script tag -> block html parsing, script download -> script | Don't block,paralled download, after DOM done, execute| Don't block,paralled download, as soon as download complete -> execute|
