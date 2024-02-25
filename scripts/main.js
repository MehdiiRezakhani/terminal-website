
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about", "Who am i and what do i do.");
  createCode("resume", "Download My Resume!");
  createCode("contact", "All my social networks.");
  createCode("all", "See all commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/MehdiiRezakhani";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value?.toLowerCase() === "all"){
    trueValue(value);
    
    createCode("about", "Who am i and what do i do.");
    createCode("resume", "Download My Resume!");
    createCode("contact", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value?.toLowerCase() === "resume"){
    trueValue(value);
    createText("<a href='./MehdiRezakhani(Resume).pdf' target='_blank'><i class='fas fa-download white'></i> Download My Resume</a>")
  }
  else if(value?.toLowerCase() === "about"){
    trueValue(value);
    createText("I am Mehdi Rezakhani")
    createText("Front-End Developer with 3+ years of experience, specializing in building and maintaining high-traffic web applications. Proven ability to lead and mentor teams, and work independently to deliver complex projects on time and within budget. Expertise in HTML, CSS, JavaScript, and popular front-end frameworks and libraries. Passionate about learning new technologies and improving the user experience.")
  }
  else if(value?.toLowerCase() === "contact"){
    trueValue(value);
    createText("<a href='https://github.com/MehdiiRezakhani' target='_blank'><i class='fab fa-github white'></i> MehdiiRezakhani</a>")
    createText("<a href='https://www.linkedin.com/in/MehdiiRezakhani/' target='_blank'><i class='fab fa-linkedin-in white'></i> MehdiiRezakhani</a>")
    createText("<a href='mailto:MehdiiRezakhani@gmail.com' target='_blank'><i class='fas fa-envelope white'></i> MehdiiRezakhani@gmail.com</a>")
  }
  
  else if(value?.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    createText("Welcome");
    // await delay(700);
    createText("You can run several commands:");
    createCode("about", "Who am i and what do i do.");
    createCode("resume", "Download My Resume!");
    createCode("contact", "All my social networks.");
    createCode("all", "See all commands.");

    await delay(500);
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();