const timeLabel = document.querySelector('.date-bar__clock__time');
const dateLabel = document.querySelector('.date_bar__clock__date');


setInterval(() => {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    
    let timeDesc = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLabel.innerHTML = timeDesc;

    let dateDesc = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    dateLabel.innerHTML = dateDesc;
    
}, 1000);

