(
    function DropDown() {
        var hasDropdown = Array.prototype.slice.call(document.querySelectorAll(".has-dropdown"));
        function toggleDropdown() {
            var dropdown = this.querySelector(".mssg-dropdown");
            if(dropdown.classList.contains("dd-active")) {
                dropdown.classList.remove("dd-active");
            }
            else {
                if(document.querySelector(".dd-active")) {
                    document.querySelector(".dd-active").classList.remove("dd-active");
                }
                dropdown.classList.add("dd-active");
            }
        }
        
        function activateDropdownTrigger(el) {
            var trigger = el.querySelector(".dd-trigger");
            trigger.addEventListener("click", toggleDropdown.bind(el));
        }
        
        document.addEventListener("click", function(e) {
            var currentlyActive = document.querySelector(".dd-active");
            if(currentlyActive && !e.target.classList.contains("dd-trigger")) {
                currentlyActive.classList.remove("dd-active");
            }
        });
        
        hasDropdown.forEach(activateDropdownTrigger);
    }
)();
