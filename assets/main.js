const calendarInput = document.getElementById('calendar');
const calculateButton = document.getElementById('calculate');
const messageParagraph = document.getElementById('message');
const errorMessageParagraph = document.getElementById('error-message');

function daysUntilBirthday(birthday) {
    const now = new Date();
    const diff = birthday.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
}

function declensionDays(days) {
    const titles = ['дней', 'дня', 'день'];
    const dayString = String(days);
    const length = dayString.length;

    let lastTwoDigits = 0;
    let lastDigit = 0;

    if (length >= 2) {
        lastTwoDigits = parseInt(dayString.slice(length - 2));
    } else {
        lastTwoDigits = days;
    }

    lastDigit = parseInt(dayString.slice(length - 1));

    if (lastTwoDigits > 4 && lastTwoDigits < 20) {
        return titles[0];
    }

    if (lastDigit === 1) {
        return titles[2];
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return titles[1];
    }

    return titles[0]; 
}

calculateButton.addEventListener('click', () => {
    const birthdayValue = calendarInput.value;

    if (!birthdayValue) {
        errorMessageParagraph.style.display = 'block';
        messageParagraph.textContent = '';
        return;
    } else {
        errorMessageParagraph.style.display = 'none';
    }

    const birthday = new Date(birthdayValue);
    const days = daysUntilBirthday(birthday);
    const dayWord = declensionDays(days);

    messageParagraph.textContent = `До дня рождения осталось ${days} ${dayWord}.`;
});

calendarInput.addEventListener('input', () => {
    errorMessageParagraph.style.display = 'none';
});

