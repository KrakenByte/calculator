const io = document.querySelector(".io");
const container = document.querySelector(".operations-container");

container.addEventListener("click", function(e) {
    const target = e.target;
    if(target.tagName !== "BUTTON") return;
    
    let value = target.textContent;
    if (io.value === "Error.") io.value = "";
    
    if (value === "C") {
        io.value = "";
        console.log("cleared.");
    } else if (value === "=") {
        try {
            const expression = io.value.replace(/x/g, "*").replace(/÷/g, "/");
            io.value = Function("return " + expression)();
        } catch {
            io.value = "Error.";
        }
    } else {
        io.value += value;
    }
});
