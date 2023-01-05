const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

if (listItemsArray.length > 0) {
  const filteredArray = listItemsArray.filter(el => {
    let content = "";
    if (inputVal.includes(",")) {
      if (inputVal.split(",")[1].length > 2) {
        inputVal = inputVal.split(",")[0];
        content = el
          .querySelector(".city-name span")
          .textContent.toLowerCase();
      } else {
        content = el.querySelector(".city-name").dataset.name.toLowerCase();
      }
    } else {
      content = el.querySelector(".city-name span").textContent.toLowerCase();
    }
    return content == inputVal.toLowerCase();
  });

  if (filteredArray.length > 0) {
    msg.textContent = `You already checked the weather for ${
      filteredArray[0].querySelector(".city-name span").textContent
    } provide country code`;
    form.reset();
    input.focus();
    return;
  }


  msg.textContent = "";
  form.reset();
  input.focus();