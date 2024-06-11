// src/menu.js

function createMenu() {
    const menuSectionMain = document.createElement('div');
    menuSectionMain.classList.add('menu-section-main');

    const filterSection = document.createElement('section');
    filterSection.classList.add('filter');

    const menuItemsSection = document.createElement('section');
    menuItemsSection.classList.add('menu-section');

    const filterContent = `
        <div class="column">
            <img src="Assets/french-fries.svg" alt="Menu Item 1">
        </div>
        <div class="column">
            <img src="Assets/burger-solid.svg" alt="Menu Item 2">
        </div>
        <div class="column">
            <img src="Assets/egg-solid.svg" alt="Menu Item 3">
        </div>
        <div class="column">
            <img src="Assets/bowl-food-solid.svg" alt="Menu Item 1">
        </div>
        <div class="column">
            <img src="Assets/pizza-slice-solid.svg" alt="Menu Item 2">
        </div>
        <div class="column">
            <img src="Assets/cookie-solid.svg" alt="Menu Item 3">
        </div>
        <div class="column">
            <img src="Assets/ice-cream-solid.svg" alt="Menu Item 1">
        </div>
    `;

    const menuItemsContent = `
        <div class="menu-item">
            <img src="Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg" alt="Menu Item 1">
            <h3>Hamburger</h3>
            <p>240 Cals</p>
        </div>
        <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-cheeseburger-2 product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Cheeseburger</h3>
                    <p>290 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item//mcdonalds-mcdouble-1 product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>McDouble</h3>
                    <p>370 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Junior Chicken</h3>
                    <p>380 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-sausage-mcmuffin product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Sausage McMuffin</h3>
                    <p>370 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-hamburger product-header-desktop.jpg" alt="Menu Item 1">
                    <h3> World Famous Fries(Small) </h3>
                    <p>240 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item//mcdonalds-vanilla-cone product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Vanilla Cone</h3>
                    <p>240 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-baked-apple-pie product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Baked Apple Pie</h3>
                    <p>270 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-cheeseburger-happy-meal-pineapple product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Cheeseburger Happy Meal</h3>
                    <p>720 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-oreo-mcflurry product-header-desktop.jpg" alt="Menu Item 1">
                    <h3>Oreo McFlurry</h3>
                    <p>570 Cals</p>
                </div>
                <div class="menu-item">
                    <img src="Assets/menu item/mcdonalds-chocolate-milkshake-1 product-header-desktop-1.jpg" alt="Menu Item 1">
                    <h3>Chocolate Triple Thick Milkshake</h3>
                    <p>380 Cals</p>
                </div>
    `;

    filterSection.innerHTML = filterContent;
    menuItemsSection.innerHTML = menuItemsContent;

    menuSectionMain.appendChild(filterSection);
    menuSectionMain.appendChild(menuItemsSection);

    return menuSectionMain;
}

export default createMenu;
