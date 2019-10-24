let data = [
  {
    title: "Sunnyflower",
    thumb: "./images/1.jpg",
    videoUrl: "1"
  },
  {
    title: "Bee and Flower",
    thumb: "./images/2.jpg",
    videoUrl: "2"
  },
  {
    title: "Turtle in the blue sea",
    thumb: "./images/3.jpeg",
    videoUrl: "3"
  },
  {
    title: "Seahorse",
    thumb: "./images/4.jpg",
    videoUrl: "4"
  }
];

//To close the video with ESC of the keyboard

document.onkeydown = (e) => {
    let pl = document.querySelector(".player");
    let isActive = pl.classList.contains('active');
    let keyCode = e.code;
    let close = document.querySelector(".close")
    if(isActive && keyCode === 'Escape')
    close.click();
}

updateVideo = url => {
  let src = `./images/videos/${url}.mp4`;
  let videos = document.createElement("video");
  videos.src = src;
  videos.autoplay = true;
  videos.loop = true;
  videos.controls = true;
  let vidParent = document.querySelector(".video-container");
  vidParent.appendChild(videos);
};

togglePlayer = e => {
  let pl = document.querySelector(".player");
  pl.classList.toggle("active");
  let vidParent = document.querySelector(".video-container");
  vidParent.innerHTML = "";
  let url = e.currentTarget.getAttribute("data-url");
  if (url) updateVideo(url);
};

generateVideosThumbs = data => {
  data.forEach(el => {
    let parent = document.createElement("div");
    parent.classList.add("video-thumb");
    parent.addEventListener("click", togglePlayer);
    parent.dataset.url = el.videoUrl;

    let title = document.createElement("p");
    title.innerText = el.title;

    let imgCont = document.createElement("div");
    imgCont.classList.add("img-cont");

    let img = document.createElement("img");
    img.src = el.thumb;

    imgCont.appendChild(img);
    parent.appendChild(imgCont);
    parent.appendChild(title);

    let vidCont = document.querySelector(".cont");
    vidCont.appendChild(parent);
  });
};

generateVideosThumbs(data);

let close = document.querySelector(".close");
close.addEventListener("click", togglePlayer);
