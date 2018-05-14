class basicUtils {
  BlobURL = null;
  get timeStamp() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`
  }
  get getAllNotes() {
    if(localStorage.JustNotes__Notes) {
      return JSON.parse(localStorage.JustNotes__Notes);
    }
    const defaultNotes = [
      { id: "wxno12", title: "Welcome Note", text: "Welcome to Just Notes", date: this.timeStamp },
      { id: "d8asd0", title: "About", text: "Features of Just Notes:", date: this.timeStamp }
    ];
    localStorage.JustNotes__Notes = JSON.stringify(defaultNotes);
    return defaultNotes;
  }
  getNoteById(id) {
    const notes = this.getAllNotes;
    let rtn;
    for(const i of notes) {
      if(id === i.id){
        rtn = i;
        break; 
      }
    }
    return rtn;
  }
  genPageContentUrl = text => {
    const data = new Blob([text], { type: "text/md" });
    if (this.BlobURL !== null) {
      window.URL.revokeObjectURL(this.BlobURL);
    }
    this.BlobURL = window.URL.createObjectURL(data);
    return this.BlobURL;
  };
  download = text => {
    const url = this.genPageContentUrl(text);
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
