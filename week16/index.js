document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

         // Очищаем все сообщения об ошибках перед валидацией
         const errorName = document.getElementById('errorName');
         errorName.style.display = 'none';
         const errorEmail = document.getElementById('errorEmail');
         errorEmail.style.display = 'none';
         const errorAge = document.getElementById('errorAge');
         errorAge.style.display = 'none';
         const errorGender = document.getElementById('errorGender');
         errorGender.style.display = 'none';
         const errorProfession = document.getElementById('errorProfession');
         errorProfession.style.display = 'none';
         const errorApproval = document.getElementById('errorApproval');
         errorApproval.style.display = 'none';
         const errorPassword = document.getElementById('errorPassword');
         errorPassword.style.display = 'none';



        isValid = validateName() && isValid;
        isValid = validateEmail() && isValid;
        isValid = validateAge() && isValid;
        isValid = validateGender() && isValid;
        isValid = validateProfession() && isValid;
        isValid = validateApproval() && isValid;
        isValid = validatePassword() && isValid;

        //  Отображаем все сообщение об ошибках основываясь на validateName() и т.д

        if (!validateName()) {
            document.getElementById('errorName').style.display = 'block';
        }
       if (!validateEmail()) {
            document.getElementById('errorEmail').style.display = 'block';
        }
        if (!validateAge()) {
            document.getElementById('errorAge').style.display = 'block';
        }
        if (!validateGender()) {
             document.getElementById('errorGender').style.display = 'block';
        }
        if (!validateProfession()) {
            document.getElementById('errorProfession').style.display = 'block';
        }
      if (!validateApproval()) {
            document.getElementById('errorApproval').style.display = 'block';
            }

        if (!validatePassword()) {
            document.getElementById('errorPassword').style.display = 'block';
         }
        if (isValid == true) {
            // Если все проверки пройдены, отправляем форму (или обрабатываем данные)
            alert('Форма отправлена!'); // Замените это своим кодом отправки данных
            // form.submit(); // Раскомментируйте, чтобы отправить форму на сервер (если у вас есть бэкенд)
        }

    });

    function validateName() {
        const nameField = document.getElementById('nameUser');
        return nameField && nameField.value.trim() !== '';
    }

    function validateEmail() {
        const emailField = document.getElementById('emailUser');

        return emailField && emailField.value.trim() !== '';
     }

        function validateAge() {
            const ageField = document.getElementById('ageUser');
             return ageField && ageField.value.trim() !== '' && !isNaN(ageField.value) && parseInt(ageField.value) > 0;
        }

   function validateGender() {
            const maleRadio = document.getElementById('male');
            const femaleRadio = document.getElementById('female');
            return maleRadio.checked || femaleRadio.checked;
        }

        function validateProfession() {
             const professionSelect = document.getElementById('professionUser');
             return professionSelect && professionSelect.value !== '';
        }

        function validateApproval() {
            const approvalCheckbox = document.getElementById('approvalUser');
            return approvalCheckbox && approvalCheckbox.checked;
        }

    function validatePassword() {
       const passwordField = document.getElementById('passwordUser');
       const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordField && passwordField.value.trim() !== '' && passwordRegex.test(passwordField.value);
  }
});