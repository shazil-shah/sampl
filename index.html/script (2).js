// script.js
const typingText = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
const sections = document.querySelectorAll('.section');
const questionSection = document.getElementById('question-section');
const menuSection = document.getElementById('menu-section');
const contactSection = document.getElementById('contact-section');
const menuItems = document.getElementById('menu-items');
const categoryTitle = document.getElementById('category-title');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const optionBtns = document.querySelectorAll('.option-btn');

const menuData = {
    proper: [
        { name: "Grilled Chicken Steak", price: "$18.99", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop" },
        { name: "Beef Biryani", price: "$15.99", img: "https://images.unsplash.com/photo-1636142244324-3842e1b6ba2c?w=400&h=300&fit=crop" },
        { name: "Lamb Curry", price: "$19.99", img: "https://images.unsplash.com/photo-1617096700794-f4ff20082e97?w=400&h=300&fit=crop" },
        { name: "Fish Tikka", price: "$16.99", img: "https://images.unsplash.com/photo-1579586140626-0ef8f7a5e7a5?w=400&h=300&fit=crop" },
        { name: "Chicken Korma", price: "$14.99", img: "https://images.unsplash.com/photo-1594221708771-363163059bda?w=400&h=300&fit=crop" },
        { name: "Mutton Karahi", price: "$20.99", img: "https://images.unsplash.com/photo-1621996346565-e3adc590e5f5?w=400&h=300&fit=crop" },
        { name: "Seekh Kebab Platter", price: "$17.99", img: "https://images.unsplash.com/photo-1577612484675-432e84839752?w=400&h=300&fit=crop" },
        { name: "Butter Chicken", price: "$16.49", img: "https://images.unsplash.com/photo-1603484773550-4d555bd2fe10?w=400&h=300&fit=crop" },
        { name: "Prawn Masala", price: "$22.99", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop" },
        { name: "Veg Biryani", price: "$12.99", img: "https://images.unsplash.com/photo-1636142244324-3842e1b6ba2c?w=400&h=300&fit=crop" },
        { name: "Chicken Fried Rice", price: "$13.99", img: "https://images.unsplash.com/photo-1541599468178-c4bd3c3c9e94?w=400&h=300&fit=crop" },
        { name: "Dal Makhani", price: "$11.99", img: "https://images.unsplash.com/photo-1609922454600-134de81b6305?w=400&h=300&fit=crop" },
        { name: "Palak Paneer", price: "$14.49", img: "https://images.unsplash.com/photo-1617096700794-f4ff20082e97?w=400&h=300&fit=crop" },
        { name: "Aloo Gosht", price: "$15.49", img: "https://images.unsplash.com/photo-1621996346565-e3adc590e5f5?w=400&h=300&fit=crop" },
        { name: "Nihari", price: "$18.49", img: "https://images.unsplash.com/photo-1577612484675-432e84839752?w=400&h=300&fit=crop" },
        { name: "Haleem", price: "$16.99", img: "https://images.unsplash.com/photo-1603484773550-4d555bd2fe10?w=400&h=300&fit=crop" },
        { name: "Chicken Tikka Masala", price: "$17.49", img: "https://images.unsplash.com/photo-1594221708771-363163059bda?w=400&h=300&fit=crop" },
        { name: "Roghan Josh", price: "$19.49", img: "https://images.unsplash.com/photo-1579586140626-0ef8f7a5e7a5?w=400&h=300&fit=crop" },
        { name: "Malai Boti", price: "$15.99", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop" },
        { name: "Chicken Haleem", price: "$14.99", img: "https://images.unsplash.com/photo-1617096700794-f4ff20082e97?w=400&h=300&fit=crop" }
    ],
    desserts: [
        { name: "Chocolate Lava Cake", price: "$8.99", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
        { name: "Tiramisu", price: "$7.99", img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop" },
        { name: "Cheesecake", price: "$9.49", img: "https://images.unsplash.com/photo-1544982503-953f38d2f94c?w=400&h=300&fit=crop" },
        { name: "Gulab Jamun", price: "$6.99", img: "https://images.unsplash.com/photo-1606534178786-7d73a778e0ea?w=400&h=300&fit=crop" },
        { name: "Ras Malai", price: "$7.49", img: "https://images.unsplash.com/photo-1618718405737-25ea6e3a0a57?w=400&h=300&fit=crop" },
        { name: "Falooda", price: "$8.49", img: "https://images.unsplash.com/photo-1541593859103-4597a32dcb79?w=400&h=300&fit=crop" },
        { name: "Ice Cream Sundae", price: "$6.49", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop" },
        { name: "Fruit Trifle", price: "$7.99", img: "https://images.unsplash.com/photo-1542994982-5c3f4a0a4e20?w=400&h=300&fit=crop" },
        { name: "Carrot Halwa", price: "$5.99", img: "https://images.unsplash.com/photo-1577612484675-432e84839752?w=400&h=300&fit=crop" },
        { name: "Kulfi", price: "$4.99", img: "https://images.unsplash.com/photo-1603484773550-4d555bd2fe10?w=400&h=300&fit=crop" },
        { name: "Panna Cotta", price: "$8.99", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
        { name: "Brownie", price: "$7.49", img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop" },
        { name: "Jalebi", price: "$5.49", img: "https://images.unsplash.com/photo-1544982503-953f38d2f94c?w=400&h=300&fit=crop" },
        { name: "Kheer", price: "$6.99", img: "https://images.unsplash.com/photo-1606534178786-7d73a778e0ea?w=400&h=300&fit=crop" },
        { name: "Baklava", price: "$9.99", img: "https://images.unsplash.com/photo-1618718405737-25ea6e3a0a57?w=400&h=300&fit=crop" },
        { name: "Profiteroles", price: "$8.49", img: "https://images.unsplash.com/photo-1541593859103-4597a32dcb79?w=400&h=300&fit=crop" },
        { name: "Macarons", price: "$10.99", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop" },
        { name: "Sorbet", price: "$5.99", img: "https://images.unsplash.com/photo-1542994982-5c3f4a0a4e20?w=400&h=300&fit=crop" },
        { name: "Pistachio Kulfi", price: "$6.49", img: "https://images.unsplash.com/photo-1577612484675-432e848
