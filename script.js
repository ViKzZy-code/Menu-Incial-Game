document.addEventListener("DOMContentLoaded", () => {
    let items = document.querySelectorAll("li");
    let index = 0;
    
    function updateSelection() {
        items.forEach(item => item.classList.remove("selected"));
        items[index].classList.add("selected");
    }
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            index = (index + 1) % items.length;
        } else if (e.key === "ArrowUp") {
            index = (index - 1 + items.length) % items.length;
        }
        updateSelection();
    });
});
