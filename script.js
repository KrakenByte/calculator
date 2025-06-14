const io = document.querySelector(".io");
const container = document.querySelector(".operations-container");

container.addEventListener("click", function(e) {
    const target = e.target;
    if(target.tagName !== "BUTTON") return;
    
    let value = target.textContent;
    if (io.value === "Error." || io.value === "Infinity"||  io.value === "-Infinity" || io.value === "undefined") io.value = "";
    
    if (value === "C") {
        io.value = "";
        console.log("cleared.");
    } else if (value === "=") {
        try {
            const expression = io.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");
            const result = Function("return " + expression)();
            io.value = parseFloat(result.toFixed(9));
        } catch {
            io.value = "Error.";
        }
    } else {
        io.value += value;
    }
});
