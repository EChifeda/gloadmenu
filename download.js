var DownloadProgress = 0;
var filesTotal = 1;
var filesNeeded = 1;
var Texts = [
    'Заходите к нам почаще, мы вас ждем',
    'Есть жалоба? Пишите в чат через @ [Текст]',
    'Подробную информацию вы можете найти в F4',
    'Создатель сервера Kydesn1k, Куратор - Anime Flame',
    'Если есть какие то вопросы, ждем вас в нашем Discord сервере',
    'Каждую среду и субботу получаемый опыт удваивается!',
]

function SetFilesNeeded( needed ) {
    filesNeeded = Math.max(0, needed)
}

function SetFilesTotal( total ) {
    filesTotal = Math.max(0, total)
}

function CreateCircles() {
    var parent = document.getElementById("ProgressBar")

    for (var i = 0; i <= 20; i++) {
        let circle = document.createElement('span');
        circle.className = 'circle';
        circle.progress = (5*i);
        circle.toggle = false;
        circle.id = `span_${i}`;
        parent.appendChild(circle);
    }
}
CreateCircles()

function CheckProgress(progress) {
    for (var i = 0; i <= 20; i++) {
        var circle = document.getElementById(`span_${i}`)
        // console.log('Проверка:', circle.progress, DownloadProgress)
        if ( (progress >= circle.progress) && !circle.toggle) {
            circle.classList.toggle('after');
            circle.toggle = true;
            // console.log('Переключаю')
        }
    }
}

setInterval( () => {
    var filesRemaining = Math.max(0, filesTotal - filesNeeded),
    DownloadProgress = (filesTotal > 0) ? (filesRemaining / filesTotal) : 1;

    DownloadProgress = Math.round(DownloadProgress * 100);
    
    document.getElementById(`progress_text`).innerHTML = `${DownloadProgress}%`;
    CheckProgress(DownloadProgress)
}, 1000)

// Меняем текст

var num = 0
setInterval( () => {
     var max = Texts.length
     if (num >= max) num = 0; 
     var newText = Texts[num]

     num++
     var topText = document.getElementById(`toptext`)
     topText.innerHTML = newText
 

}, 15000)

console.log('Работаю Тест 2')


// function getChromeVersion () {     
//     var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

//     return raw ? parseInt(raw[2], 10) : false;
// }

// 
