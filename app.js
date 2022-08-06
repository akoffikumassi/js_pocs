function copy() {
  let copyText = document.getElementById("inputText");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  alert(`copy the text ${copyText.value}`);
}
