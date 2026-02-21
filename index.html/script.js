// Database of items
const menuData = {
    meal: [
        { name: "Grilled Steak", price: "$25", img: "https://via.placeholder.com/200?text=Steak" },
        { name: "Chicken Biryani", price: "$18", img: "https://via.placeholder.com/200?text=Biryani" },
        // ... Add 20 items total per category
    ],
    dessert: [
        { name: "Chocolate Lava Cake", price: "$12", img: "https://via.placeholder.com/200?text=Cake" },
        { name: "Fruit Trifle", price: "$10", img: "https://via.placeholder.com/200?text=Trifle" }
    ],
    snacks: [
        { name: "Club Sandwich", price: "$12", img: "https://via.placeholder.com/200?text=Sandwich" },
        { name: "French Fries", price: "$6", img: "https://via.placeholder.com/200?text=Fries" }
    ]
};

// 1. Transition from Intro to Question
setTimeout(() => {
    document.getElementById('hero').classList.add('hidden');
    document.getElementById('question-sec').classList.remove('hidden');
}, 4500);

// 2. Show Menu with Pop-out Animation
function showMenu(category) {
    const grid = document.getElementById('items-grid');
    grid.innerHTML = ''; // Clear previous
    document.getElementById('question-sec').classList.add('hidden');
    document.getElementById('menu-display').classList.remove('hidden');

    const items = menuData[category] || [];
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price-tag">${item.price}</p>
        `;
        grid.appendChild(card);

        // Staggered 3D pop-in effect
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
}

// 3. Mouse Movement Effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 4. Back Button Logic
function goBack() {
    document.getElementById('menu-display').classList.add('hidden');
    document.getElementById('question-sec').classList.remove('hidden');
}