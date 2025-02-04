let text = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.'

//Количество символов в тексте
console.log(`Количество символов в тексте: ${text.length}`); // 904 символа

//Текст с переносами строк
let result = text.replaceAll(';', '\n' );
    console.log(`Текст с переносами строк: \n${result}`);

//Текст с удалёнными пробелами
let substring = result.replaceAll(' ', '');
    console.log( `Текст с удалёнными пробелами: \n${substring}`);

//Извлечение подстроки
let newText = result.substring(28, 50);
    console.log(`Извлечение подстроки: ${newText}`);

//Замена "клён" на "дубе"
let replacedText = newText.replace('клён', 'дубе');
    console.log(`Замена "клён" на "дубе": ${replacedText}`);

//Приведение к верхнему регистру
let replacedText2 = result.toUpperCase();
    console.log(`Строка result в верхнем регистре: ${replacedText2}`);

//Замена "клён" на "дуб" (все вхождения)
let replacedText3 = result.replaceAll('клён', 'дуб');
    console.log(` Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`)

//Нахождение первого вхождения слова "моря"
let index = text.indexOf('моря');
    console.log(`8. Индекс первого вхождения "моря": ${index}`);

    //Изменение первой буквы в пернменной replacedText
    let modifiedText = replacedText.charAt(0).toLocaleUpperCase() + replacedText.slice(1)
    console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);



   
   
    //Создание программы,которая генерирует случаное число из 4 букв
function newRandomWord() {

    const alphabet = 'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я';
 
    const random1 = Math.floor(Math.random() * alphabet.length);
    const random2 = Math.floor(Math.random() * alphabet.length);
    const random3 = Math.floor(Math.random() * alphabet.length);
    const random4 = Math.floor(Math.random() * alphabet.length);   
    
    const randomWord = alphabet[random1] + alphabet[random2] + alphabet[random3] + alphabet[random4];
    
    return randomWord
}

console.log(newRandomWord())
