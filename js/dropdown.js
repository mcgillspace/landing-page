(
    function DropDown() {
        var hasDropdown = Array.prototype.slice.call(document.querySelectorAll(".has-dropdown"));
        var dropdownSelector = ".mssg-dropdown";
        var activeDDSelector = "dd-active";
        var ddTrigger = "dd-trigger";
        
        function toggleDropdown(e) {
            var dropdown = this.querySelector(dropdownSelector);
            if(dropdown.classList.contains(activeDDSelector)) {
                dropdown.classList.remove(activeDDSelector);
            }
            else {
                hideActiveDropdown(e);
                dropdown.classList.add(activeDDSelector);
            }
        }
        
        function hideActiveDropdown(e) {
            e.stopPropagation() || (e.cancelBubble = true);
            var currentlyActiveDD = document.querySelector("."+activeDDSelector);
            if(currentlyActiveDD) {
                currentlyActiveDD.classList.remove(activeDDSelector);
            }
        }
        
        function activateDropdownTrigger(el) {
            var trigger = el.querySelector("."+ddTrigger);
            trigger.addEvent = trigger.addEventListener ||  trigger.attachEvent;
            trigger.addEvent("click", toggleDropdown.bind(el));
        }
        
        document.addEvent = document.addEventListener || document.attachEvent;
        document.addEvent("click", hideActiveDropdown);
        
        hasDropdown.forEach(activateDropdownTrigger);
    }
)();

/*
 * Updates the underline for each navigation bar menu item
 *
 * @param	{string} pageName	Name of current page
 */
var updateNavbarUnderlines = function (pageName) {
	var menuItems = document.getElementsByClassName("mssg-link");
	for (item of menuItems) {
		if (item.id === pageName) {
			item.classList.add("link-active");
		}
		else {
			item.classList.remove("link-active");
		}
	}
}
