var count = 0;

const form = document.getElementById("magicForm");
const input = document.getElementById("numberInput");
const dialog = document.getElementById("resultDialog");

const pairs = [
  ["Red Light Green Light", "สนามบอล"],
  ["วิ่งผลัด", "สนามบอล"],
  ["Mingle", "โรงยิมชั้น 3"],
  ["Guard The Cone", "สนามบอล"],
  ["เตะจุดโทษ", "สนามบอล"],
  ["เดินสามขา", "สนามบอล"],
  ["Simon Says", "ห้องประชุม 2"],
  ["Landmine", "ใต้สิรินาถ"],
  ["โบวลิ่ง", "โรงยิมชั้น 2"],
  ["ปาปิงปองลงแก้ว", "โรงยิมชั้น 2"],
  ["Beanbag", "สนามบอล"],
  ["ป้องกันลูกโป่ง", "สวนปาล์ม"],
  ["ชักเย่อ", "สนามบอล"],
  ["Davinci เกมถอดรหัส", "ห้อง EIP เก่า"],
  ["วิ่งผลัด XO", "สนามบอล"],
  ["เก้าอี้ดนตรี", "โรงยิมชั้น 2"],
  ["หัวหน้าฝ่ายกิจกรรม", "-"],
  ["รองหัวหน้าฝ่ายกิจกรรม", "-"],
];


const activ = [
  /*['00000', 0, 2, 1],
  ['11111', 1, 6, 1],
  ['22222', 2, 2, 0],*/
  ['41125', 17, 17, 0],
  ['41350', 16, 16, 0],

  ['41025', 0, 2, 1],
  ['41042', 0, 2, 1],
  ['41309', 0, 2, 1],
  ['41077', 0, 2, 1],
  
  ['41313', 1, 8, 1],
  ['41307', 1, 8, 1],
  ['41024', 1, 8, 1],
  ['41163', 1, 8, 1],

  ['41444', 2, 2, 0],
  ['41046', 2, 2, 0],
  ['41020', 2, 2, 0],
  ['41060', 2, 2, 0],
  ['41030', 2, 2, 0],

  ['41027', 3, 9, 1],
  ['41019', 3, 9, 1],
  ['41063', 3, 9, 1],
  ['41164', 3, 9, 1],
  ['41356', 3, 9, 1],

  ['45103', 4, 7, 1],
  ['46492', 4, 7, 1],
  ['46330', 4, 7, 1],

  ['41317', 5, 13, 1],
  ['41286', 5, 13, 1],

  ['45845', 6, 6, 0],
  ['45193', 6, 6, 0],
  ['41465', 6, 6, 0],

  ['41118', 7, 7, 0],
  ['41038', 7, 7, 0],

  ['41045', 8, 8, 0],
  ['41316', 8, 8, 0],
  ['41404', 8, 8, 0],

  ['41320', 9, 9, 0],
  ['45101', 9, 9, 0],
  ['41080', 9, 9, 0],

  ['41462', 10, 13, 0],
  ['44543', 10, 9, 0],
  ['41057', 10, 13, 0],

  ['45104', 11, 7, 0],
  ['45112', 11, 7, 0],
  ['45102', 11, 7, 0],

  ['45223', 12, 7, 0],
  ['45181', 12, 6, 0],
  ['41405', 12, 6, 0],
  
  ['41461', 13, 13, 0],
  ['46323', 13, 13, 0],

  ['45898', 14, 3, 1],
  ['45095', 14, 7, 1],

  ['41058', 15, 15, 0],
  ['41162', 15, 15, 0],
  ['41343', 15, 15, 0]
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
  function status(code) {
    if (code === 1) {
      return " (ช่วย)";
    } else {
      return "";
    }
  }
  const html = `
      <div style="font-size:20px">
        <strong style="color:#e91e63">ฐานกิจกรรม ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][0]}</strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][1]}
      </div><br>
      <div style="font-size:20px">
        <strong style="color:#2196f3">ฐานกิจกรรมกรณีฝนตก ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][0]}<!--${status(activ[activ.findIndex(entry => entry[0] === id)][3])}--></strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][1]}
      </div>
    `;
  showDialog(html);
}

function displaySpecial(i) {
  const nameChar = ['', '', 'อ', 'อ', 'ม', 'สิ', 'น'];
  const html = `<strong style="color: #e91e63;">ไม่พบข้อมูล</strong><br><span style="font-size:20px">กรุณาตรวจสอบเลขประจำตัว${nameChar[i]}</span>`;
  showDialog(html);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const value = input.value.trim();

  /*if (value === "33333") {
    showDialog(`<strong style="color: #e91e63;">Hello World</strong>`);
  } else if (value === "44444") {
    showDialog(`
      <div style="font-size:20px"><strong style="color:#e91e63">ฐานกิจกรรม TEST</strong><br>สถานที่ TEST</div><br>
      <div style="font-size:20px"><strong style="color:#2196f3">ฐานกิจกรรมกรณีฝนตก TEST</strong><br>สถานที่ TEST</div>
    `);
  } else */
  if (value === '41310' && count < 7) {
    displaySpecial(count);
    count += 1;
  } else if (activ.findIndex(entry => entry[0] === value) !== -1) {
    displayData(value);
  } else {
    showDialog(`<strong style="color: #e91e63;">ไม่พบข้อมูล</strong><br><span style="font-size:20px">กรุณาตรวจสอบเลขประจำตัว</span>`);
  }
});
