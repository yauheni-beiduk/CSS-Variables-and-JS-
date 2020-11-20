 const inputs = document.querySelectorAll('.filters input');


 function handleUpdate() {
     const suffix = this.dataset.sizing || ''; // pustaja stroka dlja cvetov, suffics-sizing(px or %)
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 }

 inputs.forEach((input) => input.addEventListener('change', handleUpdate));    // Change manual
 inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate)); // Change mouse  , perebiraem kazhdyj vxod