let imgInput = document.querySelector("#acceptImg");

function uploadFile() {
    // dialog box
    imgInput.click();
    imgInput.addEventListener("change", function() {
        let imgObj = imgInput.files[0];
        // console.log(imgObj);
        let imgLink = URL.createObjectURL(imgObj);
        let textBox = createBox();
        let img = document.createElement("img");
        img.setAttribute("class", "upload-img")
        img.src = imgLink;
        textBox.appendChild(img);
    })
}

function downloadBoard() {
    let a = document.createElement("a"); //  create an anchor
    a.download = "file.png"; //  set filename to it's download attribute
    a.href = board.toDataURL("image/png;base64"); //  convert board to url, set as href of anchor 
    a.click(); // click the anchor
    a.remove(); //  reload behaviour does not get triggerd
}