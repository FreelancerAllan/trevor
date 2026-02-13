document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const duration = card.querySelector('.duration').innerText;
        const price = card.querySelector('.details').innerText;
        
        alert(`You selected the ${duration} package: ${price}`);
        // Here you would typically redirect to a payment gateway
    });
});