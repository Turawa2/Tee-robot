// Add a variable to track the dark mode state
let isDarkMode = false;

// Add a variable to track the speak mode state
let isSpeakMode = false;

// Variable to store the last bot response
let lastBotResponse = "";

function toggleDarkMode() {
  // Toggle the dark mode state
  isDarkMode = !isDarkMode;

  const darkModeButton = document.getElementById('darkModeButton');
  if(isDarkMode){
    darkModeButton.innerHTML = '<span class="bi bi-moon-fill"></span>';

  }else{
    darkModeButton.innerHTML = '<span class="bi bi-sun-fill"></span>'
  }
  // Toggle the dark mode class on the body element
  document.body.classList.toggle('dark-mode');
}

function toggleSpeakMode() {
  // Toggle the speak mode state
  isSpeakMode = !isSpeakMode;

  // Update the button text based on the state
  const speakModeButton = document.getElementById('speakModeButton');
  if(isSpeakMode){
    speakModeButton.innerHTML = ' <span  class="bi bi-soundwave"></span>';
  }else{
    speakModeButton.innerHTML = '<span  class="bi bi-mic-mute-fill"></span> '
  }
}

function readBotResponse() {
  if (isSpeakMode && lastBotResponse) {
    // Use the SpeechSynthesis API to read the last bot response
    var speech = new SpeechSynthesisUtterance(lastBotResponse);
    speechSynthesis.speak(speech);
  }
}

// Function to handle bot responses
function respondToUser() {
  var req = document.getElementById('text').value;

  if (req == "") {
    // If the input is empty, do nothing
    return;
  } else {
    // Check user's input and generate responses
    if (req.toLowerCase().includes("what is the full meaning of ai")) {
      lastBotResponse = "Artificial Intelligence";
    } else if (req.toLowerCase().includes("what is the full meaning of algol")) {
      lastBotResponse = "Algorithmic Language";
    } else if (req.toLowerCase().includes("what is the full meaning of arp")) {
      lastBotResponse = "Address Resolution Protocol";
    } else if (req.toLowerCase().includes("what is the full meaning of ascii")) {
      lastBotResponse = "American Standard Code for Information Interchange";
  
    } else if (req.toLowerCase().includes("what is the full meaning of lan")) {
      lastBotResponse = "Large Area Network";
   
    } else {
      // Default response for other questions
      lastBotResponse = "No Idea or Indirect Instruction " ;
    }

    // Display user's question and bot's response
    let msg_req = document.createElement('div');
    let msg_res = document.createElement('div');
    let Con1 = document.createElement('div');
    let Con2 = document.createElement('div');
    Con1.setAttribute('class', 'msgCon1');
    Con2.setAttribute('class', 'msgCon2');
    msg_req.innerHTML = req;
    msg_res.innerHTML = lastBotResponse;
    msg_req.setAttribute('class', 'right');
    msg_res.setAttribute('class', 'left');
    let message = document.getElementById('msg_area');
    message.appendChild(Con1);
    message.appendChild(Con2);
    Con1.appendChild(msg_req);
    Con2.appendChild(msg_res);
    document.getElementById("text").value = "";

    // Scroll to the latest message
    scroll();

    // Speak the response if Speak Mode is on
    if (isSpeakMode) {
      readBotResponse();
    }
  }
}

function scroll() {
  var scrollMsg = document.getElementById('msg_area');
  scrollMsg.scrollTop = scrollMsg.scrollHeight;
}

// Add a click event listener for the "Send" button
document.getElementById("send").addEventListener('click', respondToUser);

// Call the toggleDarkMode function to initialize the dark mode state
toggleDarkMode();
