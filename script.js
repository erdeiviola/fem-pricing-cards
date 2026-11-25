

const switchButton = document.querySelector('.switch-btn');
switchButton.classList.add("is-monthly")

switchButton.addEventListener('click', function() {
  const isMonthly = switchButton.classList.toggle('is-monthly');
  switchButton.classList.toggle('is-monthly', isMonthly);
  const isYearly = !isMonthly;
  switchButton.classList.toggle('is-yearly', isYearly);
});

const monthlyPrices = document.querySelectorAll('.monthly-price');
const yearlyPrices = document.querySelectorAll('.yearly-price');

switchButton.addEventListener('click', function() {
  const isMonthly = switchButton.classList.contains('is-monthly');
  
  monthlyPrices.forEach(price => {
    price.style.display = isMonthly ? 'block' : 'none';
  });
  
  yearlyPrices.forEach(price => {
    price.style.display = isMonthly ? 'none' : 'block';
  });
});

const cards = document.querySelectorAll('.pricing-card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  }) })
