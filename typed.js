// Define the texts to be displayed with the typewriter effect and their respective backspace speeds
const textToType = [
    { text: "Frontend Developer", backspaceDelay: 500 },
    { text: "Web Designer", backspaceDelay: 200 }
  ];
  
  // Get the span element
  const typewriterText = document.getElementById('typewriter-text');
  
  // Initialize variables
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  // Function to perform the typewriter effect
  function typeWriter() {
    const currentText = textToType[textIndex].text;
    const backspaceDelay = textToType[textIndex].backspaceDelay;
  
    if (!isDeleting && charIndex < currentText.length) {
      typewriterText.textContent += currentText.charAt(charIndex);
      charIndex++;
    } else if (isDeleting && charIndex >= 0) {
      typewriterText.textContent = currentText.substring(0, charIndex);
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (isDeleting) {
        setTimeout(typeWriter, backspaceDelay);
      } else {
        textIndex++;
        if (textIndex >= textToType.length) {
          textIndex = 0; // Reset to the first text
        }
        charIndex = 0;
        setTimeout(typeWriter, 100);
      }
      return;
    }
  
    const typingDelay = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingDelay);
  }
  
  // Call the typewriter function
  typeWriter();
  