const calendar = document.getElementById('calendar');
const calendarTitle = document.getElementById('calendar-title');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); // 0-indexed
const daysInMonth = new Date(year, month + 1, 0).getDate();

// Titel updaten
const monthNames = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
calendarTitle.textContent = `${monthNames[month]} ${year}`;

// Dagen toevoegen
for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement('div');
  day.className = 'day';
  day.textContent = i;

  const dayStr = String(i).padStart(2, '0');
  const monthStr = String(month + 1).padStart(2, '0');
  const dateStr = `${year}-${monthStr}-${dayStr}`;

  day.addEventListener('click', () => {
    window.location.href = `tracking.html?datum=${dateStr}`;
  });

  calendar.appendChild(day);
}
