const form = document.getElementById("magicForm");
const input = document.getElementById("numberInput");
const dialog = document.getElementById("resultDialog");

const gradeSelect = document.getElementById('grade');
const classSelect = document.getElementById('class');

// Define classes for each grade value
const classOptions = {
  1: ['ห้อง 11', 'ห้อง 12', 'ห้อง 13', 'ห้อง 14', 'ห้อง 15', 'ห้อง 16', 'ห้อง 17', 'ห้อง 18'],
  2: ['กลุ่ม 1', 'กลุ่ม 2', 'กลุ่ม 3', 'กลุ่ม 4', 'กลุ่ม 5'],
  3: ['ห้อง 21', 'ห้อง 22', 'ห้อง 23', 'ห้อง 24', 'ห้อง 25', 'ห้อง 26', 'ห้อง 27', 'ห้อง 28'],
  4: ['กลุ่ม 1', 'กลุ่ม 2', 'กลุ่ม 3', 'กลุ่ม 4', 'กลุ่ม 5']
};

gradeSelect.addEventListener('change', () => {
  const gradeValue = gradeSelect.value;
  
  // Clear old options
  if (gradeValue % 2 === 1) {
    classSelect.innerHTML = '<option value="0" selected disabled>เลือกห้อง</option>';
  } else {
    classSelect.innerHTML = '<option value="0" selected disabled>เลือกกลุ่ม</option>';
  }

  if (classOptions[gradeValue]) {
    gradeSelect.classList.remove('highlighted');
    classSelect.classList.add('highlighted');
    classOptions[gradeValue].forEach((label, index) => {
      const option = document.createElement('option');
      option.value = index + 1;
      option.textContent = label;
      classSelect.appendChild(option);
    });
  }
});

const rainMessages = [
  "ไม่ต้องย้าย เนื่องจากกิจกรรมอยู่ในร่มอยู่แล้ว",
  "เล่น Blooket/Kahoot ในห้องเรียน",
  "ย้ายกิจกรรมไปใต้สิรินาถ",
  "ให้น้องไปเล่นเก้าอี้ดนตรีที่โรงยิมชั้น 2",
]

const pairs = [
  /* 00 */ ["Red Light Green Light", "สนามบอล", 1], 
  /* 01 */ ["วิ่งผลัด", "สนามบอล", 1],
  /* 02 */ ["Mingle", "โรงยิมชั้น 3", 0],
  /* 03 */ ["Guard The Cone", "สนามบอล", 1],
  /* 04 */ ["เตะจุดโทษ", "สนามบอล", 1],
  /* 05 */ ["เดินสามขา", "สนามบอล", 1],
  /* 06 */ ["Simon Says", "ห้องประชุม 2", 0],
  /* 07 */ ["Landmine", "ใต้สิรินาถ", 0],
  /* 08 */ ["โบวลิ่ง", "โรงยิมชั้น 2", 0],
  /* 09 */ ["ปาปิงปองลงแก้ว", "โรงยิมชั้น 2", 0],
  /* 10 */ ["Beanbag", "สนามบอล", 2],
  /* 11 */ ["ป้องกันลูกโป่ง", "สวนปาล์ม", 1],
  /* 12 */ ["ชักเย่อ", "สนามบอล", 2],
  /* 13 */ ["Davinci เกมถอดรหัส", "ห้อง EIP เก่า", 0],
  /* 14 */ ["วิ่งผลัด XO", "สนามบอล", 2],
  /* 15 */ ["เก้าอี้ดนตรี", "โรงยิมชั้น 2", 0],
  /* 16 */ ["ป้องกันลูกโป่ง", "สวนปาล์ม", 3],
];

const activ = [
  [11, 1, 7, 9],
  [12, 1, 7, 9],
  [13, 1, 10, 13],
  [14, 0, 14],
  [15, 0, 3],
  [16, 0, 5],
  [17, 0, 0],
  [18, 0, 4],
  [21, 0, 2],
  [22, 0, 2],
  [23, 0, 2],
  [24, 0, 2],
  [25, 0, 2],
  [31, 0, 4],
  [32, 1, 4, 11],
  [33, 1, 1, 3],
  [34, 0, 1],
  [35, 0, 15],
  [36, 1, 8, 10],
  [37, 0, 0],
  [38, 0, 3],
  [41, 0, 6],
  [42, 0, 6],
  [43, 0, 12],
  [44, 0, 12],
  [45, 0, 16]
]

function showDialog(html) {
  dialog.innerHTML = html;
  dialog.classList.remove("hidden");
  dialog.classList.remove("visible");
  void dialog.offsetWidth; // reflow to restart animation
  dialog.classList.add("visible");
}

function hideDialog() {
  dialog.classList.remove("visible");
  dialog.classList.add("hidden");
}

function displayTest(i) {
  if (i >= 0 && i < pairs.length) {
    const combined = pairs[i][0] + pairs[i][1];
    showDialog(combined);
  } else {
    hideDialog();
  }
}

function displayData(id) {
  id = parseInt(id);
  groupIndex = activ.findIndex(entry => entry[0] === id);
  if (String(activ[groupIndex][0])[0] === '2') {
    const html = `
      <div style="font-size:20px">
        <strong style="color:#e91e63">ให้น้อง ม.1 EIP ทุกกลุ่ม ตั้งแถวที่ชั้น 3 ตามห้องของตนเอง</strong>
        <br>แล้วพาเข้าฐานกิจกรรม Mingle ที่โรงยิมชั้น 3
      </div>
      <div style="font-size:20px">
        <strong style="color:#2196f3">กรณีฝนตก ไม่ต้องย้าย เนื่องจากกิจกรรมอยู่ในร่มอยู่แล้ว</strong><br>
      </div>
    `;
    showDialog(html);
  } else if (String(activ[groupIndex][0])[0] === '4') {
    const html = `
      <div style="font-size:20px">
        <strong style="color:#e91e63">ก่อนเริ่มกิจกรรม ให้น้อง ม.2 EIP ทุกกลุ่ม ตั้งแถวตามกลุ่มของตนเอง ตั้งแต่กลุ่ม 1-5 ที่ลานใต้สิรินาถ แล้วแบ่งกลุ่มไปทำกิจกรรม</strong><br><br>
        พาน้องไปที่ ${pairs[activ[groupIndex][2]][1]}<br>
        ฐานกิจกรรม ${pairs[activ[groupIndex][2]][0]}<br>
      </div>
      <div style="font-size:20px">
        <strong style="color:#2196f3">กรณีฝนตก ${rainMessages[pairs[activ[groupIndex][2]][2]]}</strong><br>
      </div>
    `
    showDialog(html);
  } else if (activ[groupIndex][1] === 0) {
    const html = `
      <div style="font-size:20px">
        พาน้องไปที่ ${pairs[activ[groupIndex][2]][1]}<br>
        ฐานกิจกรรม ${pairs[activ[groupIndex][2]][0]}<br>
      </div>
      <div style="font-size:20px">
        <strong style="color:#2196f3">กรณีฝนตก ${rainMessages[pairs[activ[groupIndex][2]][2]]}</strong><br>
      </div>
    `
    showDialog(html);
  } else if (activ[groupIndex][1] === 1) {
    const html = `
      <div style="font-size:18px">
        <strong style="color:#e91e63">เลขที่ 1-25</strong><br>
        พาน้องไปที่ ${pairs[activ[groupIndex][2]][1]}<br>
        ฐานกิจกรรม ${pairs[activ[groupIndex][2]][0]}<br>
      </div>
      <div style="font-size:18px">
        <strong style="color:#2196f3">กรณีฝนตก ${rainMessages[pairs[activ[groupIndex][2]][2]]}</strong><br>
      </div>
      <hr>
      <div style="font-size:18px">
        <strong style="color:#e91e63">เลขที่ 26-สุดท้าย</strong><br>
        พาน้องไปที่ ${pairs[activ[groupIndex][3]][1]}<br>
        ฐานกิจกรรม ${pairs[activ[groupIndex][3]][0]}<br>
      </div>
      <div style="font-size:18px">
        <strong style="color:#2196f3">กรณีฝนตก ${rainMessages[pairs[activ[groupIndex][3]][2]]}</strong><br>
      </div>
    `;
    showDialog(html);
  }

}
  /*
  const html = `
      <div style="font-size:20px">
        <strong style="color:#e91e63">ฐานกิจกรรม ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][0]}</strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][1]}
      </div><br>
      <div style="font-size:20px">
        <strong style="color:#2196f3">ฐานกิจกรรมกรณีฝนตก ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][0]}</strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][1]}
      </div>
    `;*/

const gradeEl = document.getElementById('grade');
const classEl = document.getElementById('class');

function updateGroupCode() {
  const tens = gradeEl.value.trim();
  const units = classEl.value.trim();

  const groupCode = parseInt(tens) * 10 + parseInt(units);

  if (tens != "0" && units != "0" && !isNaN(groupCode)) {
    displayData(groupCode);
  } else {
    hideDialog();
  }
}

gradeEl.addEventListener("change", updateGroupCode);
classEl.addEventListener("change", updateGroupCode);

classEl.addEventListener("change", () => {
  if (classEl.value !== "0") {
    classEl.classList.remove("highlighted");
  }
});

