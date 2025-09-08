        const menuItems = document.getElementById("menuItems");

        function clickMenu() {
            if (menuItems.style.display == 'block') {
                menuItems.style.display = 'none'
            }
            else {
                menuItems.style.display = 'block'
            }
        }

        function biggerScreen() {
            if (window.innerWidth >= 992) {
                menuItems.style.display = 'block'
            } else {
                menuItems.style.display = 'none'
            }
        }

        biggerScreen()
        