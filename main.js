 const inputs = document.querySelectorAll('.filters input');


 function handleUpdate() {
     const suffix = this.dataset.sizing || ''; // empty string for colors, suffics-sizing(px or %)
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 }

 inputs.forEach((input) => input.addEventListener('change', handleUpdate));    // Change manual
 inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate)); // Change mouse  , iterating over each input