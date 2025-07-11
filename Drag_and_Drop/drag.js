//classlist Property returns the classNames of an Element.
//completly html docs parsed then DOMContentLoaded event fire and it's doesn't wait for any thing
// dragEnter - The dragenter event is fired when a dragged element or Text selection enters a valid drop target. The target object is the immediate user selection
// dragLeave - The dragleave event is fired when a dragged element or Text Selection leaves a valid drop target.

const jpg = document.querySelector("#jp");
const initApp = () => {
  const droparea = document.querySelector(".droparea");

  const active = () => droparea.classList.add("green-border");

  const inactive = () => droparea.classList.remove("green-border");

  const prevents = (e) => e.preventDefault();

  ["dragenter", "dragover", "dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, prevents);
  });

  ["dragenter", "dragover"].forEach((evtName) => {
    droparea.addEventListener(evtName, active);
  });

  ["dragleave", "drop"].forEach((evtName) => {
    droparea.addEventListener(evtName, inactive);
  });

  droparea.addEventListener("drop", handleDrop);
};

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  const filesArray = [...files];
  console.log(filesArray);

  setTimeout(() => {
    jpg.classList.remove("fa-regular");
    jpg.classList.remove("fa-images");
    jpg.classList.add("fa-solid");
    jpg.classList.add("fa-check");
    document.getElementById("text1").innerHTML = "";
    document.getElementById("text2").innerHTML = "<h1>SuccessFully Upload.</h1>";
  }, 1000);

  // fa-regular fa-images.classList.add(fa-solid fa-check)
};
