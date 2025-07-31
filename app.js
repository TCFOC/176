const form = document.getElementById("magicForm");
const input = document.getElementById("numberInput");
const dialog = document.getElementById("resultDialog");

const pairs = [
  ["Red Light Green Light", "สนามบอล"],
  ["Test1", "Hello1"],
  ["Test2", "Hello2"]
];

const activ = [
  ["00000", 0, 1],
  ["11111", 1, 0],
  ["22222", 2, 2]
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

function displayStyledTest(id) {
    const html = `
      <div style="font-size:20px">
        <strong style="color:#e91e63">ฐานกิจกรรม ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][0]}</strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][1]][1]}
      </div><br>
      <div style="font-size:20px">
        <strong style="color:#2196f3">ฐานกิจกรรมกรณีฝนตก ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][0]}</strong><br>
        สถานที่ ${pairs[activ[activ.findIndex(entry => entry[0] === id)][2]][1]}
      </div>
    `;
    showDialog(html);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const value = input.value.trim();

  if (value === "44441") {
    showDialog(`<strong style="color: #e91e63;">Hello World</strong>`);
  } else if (value === "44444") {
    showDialog(`
      <div style="font-size:20px"><strong style="color:#e91e63">ฐานกิจกรรม TEST</strong><br>สถานที่ TEST</div><br>
      <div style="font-size:20px"><strong style="color:#2196f3">ฐานกิจกรรมกรณีฝนตก TEST</strong><br>สถานที่ TEST</div>
    `);
  } else if (value === "00000") {
    displayStyledTest("00000");
  } else if (value === "11111") {
    displayStyledTest("11111");
  } else if (value === "22222") {
    displayStyledTest("22222");
  } else if (value.startsWith("test")) {
    const index = parseInt(value.slice(4));
    if (!isNaN(index)) {
      displayTest(index);
    } else {
      hideDialog();
    }
  } else {
    hideDialog();
  }
});
