// --- Data: 20+ Menu Items ---
const menuData = {
    meal: [
        { name: "Chicken Biryani", price: "$12.99", img: "https://source.unsplash.com/400x300/?biryani" },
        { name: "Mutton Karahi", price: "$18.50", img: "https://source.unsplash.com/400x300/?curry" },
        { name: "Seekh Kabab", price: "$10.00", img: "https://source.unsplash.com/400x300/?kebab" },
        { name: "Peshawari Naan", price: "$3.50", img: "https://source.unsplash.com/400x300/?naan" },
        { name: "Nihari", price: "$11.00", img: "https://source.unsplash.com/400x300/?soup" },
        { name: "Haleem", price: "$10.50", img: "https://source.unsplash.com/400x300/?stew" },
        { name: "Chicken Corn Soup", price: "$6.00", img: "https://source.unsplash.com/400x300/?chickensoup" },
        { name: "Beef Pulao", price: "$13.00", img: "https://source.unsplash.com/400x300/?pulao" },
        { name: "Chicken Korma", price: "$12.00", img: "https://source.unsplash.com/400x300/?korma" },
        { name: "Samosa (2pcs)", price: "$4.00", img: "https://source.unsplash.com/400x300/?samosa" },
        { name: "Palak Paneer", price: "$9.00", img: "https://source.unsplash.com/400x300/?spinach" },
        { name: "Butter Chicken", price: "$14.00", img: "https://source.unsplash.com/400x300/?butterchicken" }
    ],
    desert: [
        { name: "Gulab Jamun", price: "$5.00", img: "https://source.unsplash.com/400x300/?gulabjamun" },
        { name: "Kheer", price: "$4.50", img: "https://source.unsplash.com/400x300/?pudding" },
        { name: "Jalebi", price: "$4.00", img: "https://source.unsplash.com/400x300/?jalebi" },
        { name: "Ras Malai", price: "$6.00", img: "https://source.unsplash.com/400x300/?cheesecake" },
        { name: "Ice Cream (3 Scoop)", price: "$5.50", img: "https://source.unsplash.com/400x300/?icecream" },
        { name: "Falooda", price: "$7.00", img: "https://source.unsplash.com/400x300/?milkshake" },
        { name: "Ladoo", price: "$3.00", img: "https://source.unsplash.com/400x300/?sweets" }
    ],
    snacks: [
        { name: "French Fries", price: "$3.00", img: "https://source.unsplash.com/400x300/?fries" },
        { name: "Spring Roll", price: "$5.00", img: "https://source.unsplash.com/400x300/?springroll" },
        { name: "Chicken Sandwich", price: "$6.50", img: "https://source.unsplash.com/400x300/?sandwich" },
        { name: "Chili Cheese", price: "$7.00", img: "https://source.unsplash.com/400x300/?chilicheese" },
        { name: "Pakora Plate", price: "$4.50", img: "https://source.unsplash.com/400x300/?pakora" },
        { name: "Club Sandwich", price: "$8.00", img: "https://source.unsplash.com/400x300/?clubsandwich" },
        { name: "Onion Rings", price: "$3.50", img: "https://source.unsplash.com/400x300/?onionrings" }
    ]
};

// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// --- Typing Effect ---
const textElement = document.querySelector('.typing-text');
const hotelName = "Your Hotel";
let index = 0;

function typeWriter() {
    if (index < hotelName.length) {
        textElement.innerHTML += hotelName.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Speed of typing
    } else {
        // Pause after typing, then show categories
        setTimeout(() => {
            document.getElementById('intro').classList.remove('active');
            document.getElementById('categories').classList.add('active');
        }, 2000);
    }
}

// Start Typing on Load
window.onload = typeWriter;

// --- Navigation Logic ---
function showMenu(category) {
    const categoriesScreen = document.getElementById('categories');
    const menuScreen = document.getElementById('menu-display');
    const menuGrid = document.getElementById('menu-grid');
    const menuTitle = document.getElementById('menu-title');
    const footer = document.getElementById('footer');

    // Clear previous items
    menuGrid.innerHTML = '';

    // Set Title based on category
    if(category === 'meal') menuTitle.innerText = "Proper Meals";
    if(category === 'desert') menuTitle.innerText = "Delicious Deserts";
    if(category === 'snacks') menuTitle.innerText = "Light Snacks";

    // Generate Items
    const items = menuData[category];
    items.forEach((item, index) => {
        // Create Card HTML
        const card = document.createElement('div');
        card.classList.add('menu-item');
        // Add delay for animation staggering
        card.style.animationDelay = `${index * 0.1}s`; 
        
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="item-img">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price}</div>
            </div>
        `;
        menuGrid.appendChild(card);
    });

    // Transition Screens
    categoriesScreen.classList.remove('active');
    footer.style.display = 'none'; // Hide footer temporarily
    menuScreen.classList.add('active');
}

function goBack() {
    const menuScreen = document.getElementById('menu-display');
    const categoriesScreen = document.getElementById('categories');
    const footer = document.getElementById('footer');

    menuScreen.classList.remove('active');
    categoriesScreen.classList.add('active');
    
    // Bring footer back
    setTimeout(() => {
       