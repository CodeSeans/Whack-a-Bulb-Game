let score = 0;
let timer;

function randomHole() {
  const holes = document.querySelectorAll(".hole");
  holes.forEach(hole => hole.innerHTML = "");

  const randomIndex = Math.floor(Math.random() * holes.length);
  const selectedHole = holes[randomIndex];

  const img = document.createElement("img");
  img.src = "kızgın-ampul.png";
  img.dataset.clicked = "false";

  img.addEventListener("click", () => {
    if (img.dataset.clicked === "true") return; // İkinci tıklamayı engelle
    img.dataset.clicked = "true";

     const sounds = ['sürtük','çürük']
     const randomSoundId = sounds[Math.floor(Math.random() * sounds.length)]
     const randomSound = document.getElementById(randomSoundId);
     randomSound.volume = 1;
     randomSound.play();

    // Patlak ampulü göster
    img.src = "kızgın-patlak-ampul.png";

    // Skoru artır
    score++;
    document.getElementById("score").textContent = score;

    
      if (score === 272) {
        clearInterval(timer);
      
        //  Müziği durdur
        const bgm = document.getElementById("bgm");
        bgm.pause();
        bgm.currentTime = 0;
        
        document.getElementById('vatan').play();

        document.getElementById("messageBox").style.display = "flex";
        document.getElementById("messageText").textContent = "Monster bulb seats in parliament are empty!";

        document.getElementById("closeBtn").addEventListener("click", () => {
          document.getElementById("messageBox").style.display = "none";
        });
      
        score = 0;
        document.getElementById("score").textContent = score;
      } 
      

    // Ampulü kaldırma fonksiyonu
    setTimeout(() => {
      selectedHole.innerHTML = "";
    }, 250);
  });

  selectedHole.appendChild(img);
}

function startGame() {
  score = 0;
  document.getElementById("score").textContent = score;
  if (timer) clearInterval(timer);
  timer = setInterval(randomHole, 1000);
  
  document.getElementById('bgm').play();
  bgm.volume = 0.4;
}
