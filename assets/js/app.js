const mainImageCover = document.getElementById("mainImage");

var options1 = {
  scale: 1,
  zoomPosition: "original",
};

new ImageZoom(mainImageCover, options1);

const smallImages = document.querySelectorAll(".sm-img");
const mainImage = document.getElementById("main-img");
const activeImages = document.getElementsByClassName("smi-active");

const leftArrow = document.getElementById("left-arrow"),
  rightArrow = document.getElementById("right-arrow");

let imgcount = 0;

leftArrow.addEventListener("click", () => {
  imgcount--;
  smallImages.forEach((smimage, i) => {
  let smparent = smimage.parentElement;
    if (imgcount == i) {
      mainImage.src = smimage.src;
      new ImageZoom(mainImageCover, options1);
      if (activeImages.length > 0) {
        activeImages[0].classList.remove("smi-active");
      }
      smparent.classList.add("smi-active");
    }
  });
  if (imgcount <= 0) {
    imgcount = 0;
  }
});
rightArrow.addEventListener("click", () => {
  imgcount++;
  smallImages.forEach((smimage, i) => {
  let smparent = smimage.parentElement;
    if (imgcount == i) {
      mainImage.src = smimage.src;
      new ImageZoom(mainImageCover, options1);
      if (activeImages.length > 0) {
        activeImages[0].classList.remove("smi-active");
      }
      smparent.classList.add("smi-active");
    }
  });
  if (imgcount >= smallImages.length) {
    imgcount = smallImages.length - 1;
  }
});



smallImages.forEach((smimage, i) => {
  smimage.addEventListener("click", () => {
    let smparent = smimage.parentElement;
    imgcount = i;
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("smi-active");
    }
    smparent.classList.add("smi-active");

    mainImage.src = smimage.src;
    new ImageZoom(mainImageCover, options1);
    console.log(activeImages);
  });
});
