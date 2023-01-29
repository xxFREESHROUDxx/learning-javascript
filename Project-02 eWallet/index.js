const now = new Date();
console.log(
  now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
);

document
  .querySelector('#ewallet-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.querySelector('.add__type').value;
    const desc = document.querySelector('.add__description').value;
    const value = document.querySelector('.add__value').value;

    if (desc === '' || value === '') {
      alert('Please enter a description and value');
    } else {
      addItems(type, desc, value);
    }

    resetForm();
  });

function addItems(type, desc, value) {
  const newHTML = `
    <div class="item">
          <div class="item-description-time">
            <div class="item-description">
              <p>${desc}</p>
            </div>
            <div class="item-time">
              <p>25 Feb, 06:45 PM</p>
            </div>
          </div>
          <div class="item-amount ${
            type === '+' ? 'income-amount' : 'expense-amount'
          }">
            <p>${type}$${value}</p>
          </div>
    </div>
    `;
  const collection = document.querySelector('.collection');
  collection.insertAdjacentHTML('afterbegin', newHTML);
}

function resetForm() {
  document.querySelector('.add__type').value = '+';
  document.querySelector('.add__description').value = '';
  document.querySelector('.add__value').value = '';
}
