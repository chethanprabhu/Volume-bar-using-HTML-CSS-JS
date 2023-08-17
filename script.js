let current_volume = 0;

const increment = () => {
    if(current_volume < 5) {
        current_volume++;
        const parentDiv = document.querySelector(".barContainer");
        const volume_bar = document.createElement("div");
        volume_bar.classList.add("volume_bar");

        parentDiv.appendChild(volume_bar);

        const all_volume_bars = document.querySelectorAll(".volume_bar");
        all_volume_bars.forEach((bar) => {
            bar.style.backgroundColor = calc_color();
        })
    }  
}

const decrement = () => {
    if(current_volume > 0) {
        current_volume--;
        const parentDiv = document.querySelector(".barContainer");
        const child = document.querySelector(".volume_bar");
        
        parentDiv.removeChild(child);

        const all_volume_bars = document.querySelectorAll(".volume_bar");
        all_volume_bars.forEach((bar) => {
            bar.style.backgroundColor = calc_color();
        })
    }
}

const calc_color = () => {
    switch(current_volume) {
        case 1: return "red"
        case 2: 
        case 3: return "yellow"
        case 4:
        case 5: return "green"
    }
}