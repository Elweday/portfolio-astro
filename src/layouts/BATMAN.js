  const trigger = document.getElementById("crimeInGotham")  
  const items = ["thicken", "glowingBat"].map(item => document.getElementById(item))
  const BATMAN = document.getElementById("glowingBat") 
  trigger.onclick = (e) => {
    if (e.detail > 1) {
      return 
    }

    items.forEach((item) => item.classList.add('showAnimation'));
    const animationDuration = parseFloat(getComputedStyle(items[0]).animationDuration) * 1000
    console.log("Started Animation")
    setTimeout(() => {
      items.forEach((item) => item.classList.remove('showAnimation'));
    }, animationDuration);
    console.log("Ended Animation")

  }
