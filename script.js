class FoodWheel {
    constructor() {
        this.wheel = document.getElementById('wheel');
        this.spinBtn = document.getElementById('spinBtn');
        this.result = document.getElementById('result');
        this.generateBtn = document.getElementById('generateBtn');
        this.customizeBtn = document.getElementById('customizeBtn');
        this.modal = document.getElementById('customizeModal');
        this.closeBtn = document.querySelector('.close');
        this.saveBtn = document.getElementById('saveChoices');
        this.resetBtn = document.getElementById('resetChoices');
        this.choiceInputs = document.querySelectorAll('.choice-input');
        
        this.isSpinning = false;
        this.currentRotation = 0;
        this.choices = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad', 'Tacos'];
        
        this.mealCategories = {
            fastFood: ['Pizza', 'Burger', 'Hot Dog', 'Chicken Wings', 'Fish & Chips', 'Sub Sandwich', 'Fried Shrimp', 'Onion Rings', 'Mozzarella Sticks'],
            asian: ['Sushi', 'Ramen', 'Pad Thai', 'Curry', 'Dumplings', 'Teriyaki', 'Pho', 'Korean BBQ', 'Beef Noodle', 'Bibimbap', 'Spring Rolls', 'General Tso\'s Chicken'],
            italian: ['Pasta', 'Lasagna', 'Risotto', 'Pizza', 'Calzone', 'Osso Buco', 'Gnocchi', 'Carbonara', 'Margherita Pizza'],
            healthy: ['Salad', 'Grilled Chicken', 'Quinoa Bowl', 'Smoothie Bowl', 'Veggie Wrap', 'Soup', 'Avocado Toast', 'Roasted Veggies', 'Chickpea Salad'],
            mexican: ['Tacos', 'Burritos', 'Enchiladas', 'Quesadillas', 'Fajitas', 'Tamales', 'Nachos', 'Chilaquiles', 'Tostadas'],
            mediterranean: ['Gyros', 'Falafel', 'Shawarma', 'Hummus Plate', 'Greek Salad', 'Kebab', 'Tabbouleh', 'Moussaka', 'Dolma'],
            american: ['BBQ Ribs', 'Steak', 'Mac & Cheese', 'Fried Chicken', 'Clam Chowder', 'Pot Roast', 'Buffalo Wings', 'Pulled Pork', 'Cornbread'],
            seafood: ['Lobster', 'Shrimp Scampi', 'Fish Tacos', 'Crab Cakes', 'Oysters', 'Salmon', 'Grilled Scallops', 'Seafood Paella', 'Ceviche'],
            vegetarian: ['Veggie Burger', 'Stir Fry', 'Buddha Bowl', 'Veggie Pizza', 'Falafel Wrap', 'Mushroom Risotto', 'Caprese Salad', 'Stuffed Peppers', 'Eggplant Parmesan'],
            dessert: ['Ice Cream', 'Cheesecake', 'Chocolate Cake', 'Tiramisu', 'Apple Pie', 'Creme Brulee', 'Brownies', 'Pavlova', 'Fruit Tart']
        };
        
        this.foodIcons = {
            'Pizza': 'fas fa-pizza-slice',
            'Burger': 'fas fa-hamburger',
            'Sushi': 'fas fa-fish',
            'Pasta': 'fas fa-utensils',
            'Salad': 'fas fa-leaf',
            'Tacos': 'fas fa-utensils',
            'Hot Dog': 'fas fa-utensils',
            'Chicken Wings': 'fas fa-utensils',
            'Fish & Chips': 'fas fa-fish',
            'Sub Sandwich': 'fas fa-utensils',
            'Ramen': 'fas fa-utensils',
            'Pad Thai': 'fas fa-utensils',
            'Curry': 'fas fa-utensils',
            'Dumplings': 'fas fa-utensils',
            'Teriyaki': 'fas fa-utensils',
            'Lasagna': 'fas fa-utensils',
            'Risotto': 'fas fa-utensils',
            'Calzone': 'fas fa-pizza-slice',
            'Osso Buco': 'fas fa-utensils',
            'Grilled Chicken': 'fas fa-utensils',
            'Quinoa Bowl': 'fas fa-utensils',
            'Smoothie Bowl': 'fas fa-utensils',
            'Veggie Wrap': 'fas fa-utensils',
            'Soup': 'fas fa-utensils',
            'Burritos': 'fas fa-utensils',
            'Enchiladas': 'fas fa-utensils',
            'Quesadillas': 'fas fa-utensils',
            'Fajitas': 'fas fa-utensils',
            'Tamales': 'fas fa-utensils',
            'Gyros': 'fas fa-utensils',
            'Falafel': 'fas fa-utensils',
            'Shawarma': 'fas fa-utensils',
            'Hummus Plate': 'fas fa-utensils',
            'Greek Salad': 'fas fa-leaf',
            'Kebab': 'fas fa-utensils',
            'BBQ Ribs': 'fas fa-utensils',
            'Steak': 'fas fa-utensils',
            'Mac & Cheese': 'fas fa-utensils',
            'Fried Chicken': 'fas fa-utensils',
            'Clam Chowder': 'fas fa-utensils',
            'Pot Roast': 'fas fa-utensils',
            'Lobster': 'fas fa-fish',
            'Shrimp Scampi': 'fas fa-fish',
            'Fish Tacos': 'fas fa-fish',
            'Crab Cakes': 'fas fa-fish',
            'Oysters': 'fas fa-fish',
            'Salmon': 'fas fa-fish',
            'Veggie Burger': 'fas fa-hamburger',
            'Stir Fry': 'fas fa-utensils',
            'Buddha Bowl': 'fas fa-utensils',
            'Veggie Pizza': 'fas fa-pizza-slice',
            'Falafel Wrap': 'fas fa-utensils',
            'Mushroom Risotto': 'fas fa-utensils',
            'Ice Cream': 'fas fa-utensils',
            'Cheesecake': 'fas fa-utensils',
            'Chocolate Cake': 'fas fa-utensils',
            'Tiramisu': 'fas fa-utensils',
            'Apple Pie': 'fas fa-utensils',
            'Creme Brulee': 'fas fa-utensils',
            'Brownies': 'fas fa-utensils',
            'Pavlova': 'fas fa-utensils',
            'Fruit Tart': 'fas fa-utensils',
            'Avocado Toast': 'fas fa-utensils',
            'Roasted Veggies': 'fas fa-utensils',
            'Chickpea Salad': 'fas fa-leaf',
            'Nachos': 'fas fa-utensils',
            'Chilaquiles': 'fas fa-utensils',
            'Tostadas': 'fas fa-utensils',
            'Tabbouleh': 'fas fa-leaf',
            'Moussaka': 'fas fa-utensils',
            'Dolma': 'fas fa-utensils',
            'Buffalo Wings': 'fas fa-utensils',
            'Pulled Pork': 'fas fa-utensils',
            'Cornbread': 'fas fa-utensils',
            'Grilled Scallops': 'fas fa-fish',
            'Seafood Paella': 'fas fa-fish',
            'Ceviche': 'fas fa-fish',
            'Caprese Salad': 'fas fa-leaf',
            'Stuffed Peppers': 'fas fa-utensils',
            'Eggplant Parmesan': 'fas fa-utensils',
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadSavedChoices();
        this.initializeTextRotation();
    }
    
    bindEvents() {
        this.spinBtn.addEventListener('click', () => this.spinWheel());
        this.generateBtn.addEventListener('click', () => this.generateRandomChoices());
        this.customizeBtn.addEventListener('click', () => this.openCustomizeModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.saveBtn.addEventListener('click', () => this.saveChoices());
        this.resetBtn.addEventListener('click', () => this.resetToDefault());
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }
    
    spinWheel() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.result.textContent = '';
        this.result.classList.remove('show');
        
        // Generate random spin degrees (5-10 full rotations + random final position)
        const minSpins = 5;
        const maxSpins = 10;
        const spins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins; // integer spins
        const finalAngle = Math.random() * 360; // random final resting angle
        const totalDegrees = spins * 360 + finalAngle;
        
        // For result calculation:
        const normalizedAngle = finalAngle % 360;
        const angleAtPointer = (360 + 270 - normalizedAngle) % 360;
        let sectionIndex = Math.round(angleAtPointer / 60) % 6;
        sectionIndex = (sectionIndex + 1) % 6;
        const selectedChoice = this.choices[sectionIndex];
        
        // Apply spinning animation
        this.wheel.style.setProperty('--spin-degrees', `${totalDegrees}deg`);
        this.wheel.classList.add('spinning');
        
        // Play spinning sound effect (optional)
        this.playSpinSound();
        
        // Show result after animation completes
        setTimeout(() => {
            this.showResult(selectedChoice);
            this.isSpinning = false;
            this.spinBtn.disabled = false;
            // Keep the wheel in its final position by setting the transform directly
            this.wheel.style.transform = `rotate(${totalDegrees}deg)`;
            this.wheel.classList.remove('spinning');
        }, 4000);
    }
    
    showResult(choice) {
        this.result.textContent = `🎉 You should get: ${choice}! 🎉`;
        this.result.classList.add('show');
        
        // Add confetti effect
        this.createConfetti();
    }
    
    createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 100);
        }
    }
    
    playSpinSound() {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Fallback if Web Audio API is not available
            console.log('Audio not supported');
        }
    }
    
    generateRandomChoices() {
        const allMeals = [];
        Object.values(this.mealCategories).forEach(category => {
            allMeals.push(...category);
        });
        
        const newChoices = [];
        const usedIndices = new Set();
        
        while (newChoices.length < 6) {
            const randomIndex = Math.floor(Math.random() * allMeals.length);
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                newChoices.push(allMeals[randomIndex]);
            }
        }
        
        this.updateWheelChoices(newChoices);
        this.showNotification('New random choices generated!');
    }
    
    openCustomizeModal() {
        // Populate modal with current choices
        this.choiceInputs.forEach((input, index) => {
            input.value = this.choices[index] || '';
        });
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    saveChoices() {
        const newChoices = [];
        let hasEmptyInput = false;
        
        this.choiceInputs.forEach(input => {
            const value = input.value.trim();
            if (value === '') {
                hasEmptyInput = true;
            } else {
                newChoices.push(value);
            }
        });
        
        if (hasEmptyInput) {
            this.showNotification('Please fill in all 6 choices!', 'error');
            return;
        }
        
        this.updateWheelChoices(newChoices);
        this.saveChoicesToStorage(newChoices);
        this.closeModal();
        this.showNotification('Choices saved successfully!');
    }
    
    resetToDefault() {
        const defaultChoices = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad', 'Tacos'];
        this.choiceInputs.forEach((input, index) => {
            input.value = defaultChoices[index];
        });
    }
    
    updateWheelChoices(choices) {
        this.choices = choices;
        const wheelTexts = this.wheel.querySelectorAll('.wheel-text');
        
        wheelTexts.forEach((textElement, index) => {
            const textLabel = textElement.querySelector('.text-label');
            const foodIcon = textElement.querySelector('.food-icon i');
            
            if (textLabel) {
                textLabel.textContent = choices[index] || '';
            }
            
            if (foodIcon) {
                const choice = choices[index] || '';
                const iconClass = this.foodIcons[choice] || 'fas fa-utensils';
                foodIcon.className = iconClass;
            }
        });
    }
    
    saveChoicesToStorage(choices) {
        try {
            localStorage.setItem('whatshouldieatfor_choices', JSON.stringify(choices));
        } catch (e) {
            console.log('Could not save to localStorage');
        }
    }
    
    loadSavedChoices() {
        try {
            const saved = localStorage.getItem('whatshouldieatfor_choices');
            if (saved) {
                const choices = JSON.parse(saved);
                if (choices && choices.length === 6) {
                    this.updateWheelChoices(choices);
                }
            }
        } catch (e) {
            console.log('Could not load from localStorage');
        }
    }
    
    initializeTextRotation() {
        // Text rotation is now handled by CSS transforms
        // No additional initialization needed
    }
    
    getDefaultFoodIcon(foodName) {
        const name = foodName.toLowerCase();
        
        // Foods that typically come in bowls
        const bowlFoods = ['soup', 'stew', 'curry', 'ramen', 'noodles', 'rice', 'quinoa', 'oatmeal', 'cereal', 'yogurt', 'ice cream', 'pudding', 'smoothie', 'chili', 'gumbo', 'chowder', 'risotto', 'porridge', 'cereal', 'granola'];
        
        // Foods that typically come on plates
        const plateFoods = ['steak', 'chicken', 'fish', 'pork', 'lamb', 'duck', 'turkey', 'ham', 'bacon', 'sausage', 'meat', 'cutlet', 'fillet', 'roast', 'grilled', 'fried', 'baked', 'seared', 'broiled'];
        
        // Check if it's a bowl food
        if (bowlFoods.some(food => name.includes(food))) {
            return 'fas fa-bowl-food';
        }
        
        // Check if it's a plate food
        if (plateFoods.some(food => name.includes(food))) {
            return 'fas fa-utensils';
        }
        
        // Default to plate for most other foods
        return 'fas fa-utensils';
    }
    
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '10px';
        notification.style.color = 'white';
        notification.style.fontWeight = '600';
        notification.style.zIndex = '10000';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'transform 0.3s ease';
        
        if (type === 'error') {
            notification.style.backgroundColor = '#ff6b6b';
        } else {
            notification.style.backgroundColor = '#4ecdc4';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Add confetti animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FoodWheel();
}); 