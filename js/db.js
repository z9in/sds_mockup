// db.js
let school_name = []
let id = []
let num = []
let name = []
let years = []
let sex = []
let grade = []
let class_num = []
let dorm = []
let room = []
let phone = []
let img = []
let io = []
let barcode = []
let rfid = []
let creater = []
let date = []

for(i=0;i<5;i++){
    if(i<10) {
        school_name.push('테스트학교');
        id.push(`20231020${i}`);
        num.push(`1020${i}`);
        name.push(`테스트학생0${i}`);
        years.push('2023');
        sex.push('남자');
        grade.push('1학년');
        class_num.push('2반');
        dorm.push('남자기숙사');
        room.push(`0${i+1}호`);
        phone.push('010-8618-0735');
        img.push('없음');
        io.push('입사');
        barcode.push(`10101010${i}`)
        rfid.push(`a101010${i}`)
        creater.push('관리자')
        date.push('2023.11.01.14:00')
    }else {
        school_name.push('테스트학교');
        id.push(`2023102${i}`);
        num.push(`1020${i}`);
        name.push(`테스트학생${i}`);
        years.push('2023');
        sex.push('남자');
        grade.push('1학년');
        class_num.push('2반');
        dorm.push('남자기숙사');
        room.push(`${i+1}호`);
        phone.push('010-8618-0735');
        img.push('없음');
        io.push('입사');
        barcode.push(`1010101${i}`)
        rfid.push(`a10101${i}`)
        creater.push('관리자')
        date.push('2023.11.01.14:00')
    }
}

let a = document.querySelector('table');

let tr = document.createElement('tr');
for(i=0; i<date.length ; i++){
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${[i+1]}</td>
    <td>${school_name[i]}</td>
    <td>${id[i]}</td>
    <td>${num[i]}</td>
    <td>${name[i]}</td>
    <td>${years[i]}</td>
    <td>${sex[i]}</td>
    <td>${grade[i]}</td>
    <td>${class_num[i]}</td>
    <td>${dorm[i]}</td>
    <td>${room[i]}</td>
    <td>${phone[i]}</td>
    <td>${img[i]}</td>
    <td>${io[i]}</td>
    <td>${barcode[i]}</td>
    <td>${rfid[i]}</td>
    <td>${creater[i]}</td>
    <td>${date[i]}</td>
    `
    a.append(tr);
}
