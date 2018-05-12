class utils {
  genPage = text => {
    let file = null;
    const data = new Blob([text], { type: "text/md" });
    if (file !== null) {
      window.URL.revokeObjectURL(file);
    }
    file = window.URL.createObjectURL(data);
    return file;
  };
  download = text => {
    const url = this.genPage(text);
    const el = document.createElement("a");
    el.href = url;
    el.download = "Page.md";
    el.click();
  };
  selectText = (el, callback) => {
    el = typeof el === "string" ? document.querySelector(el) : el;
    let range;
    if (document.selection) {
      range = document.body.createTextRange();
      range.moveToElementText(el);
      range.select();
    } else if (window.getSelection) {
      range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    if(typeof callback === "function") {
      callback();
    }
  };
  copy = el => {
    this.selectText(el, function() {
      document.execCommand("copy");
    });
  };
}

const utils = new basicUtils();
export default utils;
