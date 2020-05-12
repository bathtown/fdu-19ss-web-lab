const works = [
    { author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"] },
    { author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"] },
    { author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"] },
    { author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"] }
];

// 先把每一个基本框 workFrame 搭建出来

const workFrame = document.createElement("div");
workFrame.className = "item";

// 4个组成
const Genre = document.createElement("p");
const authorNameContainer = document.createElement("div");
const workPhotosContainer = document.createElement("div");
const workButton = document.createElement("button");

workFrame.appendChild(Genre);
workFrame.appendChild(authorNameContainer);
workFrame.appendChild(workPhotosContainer);
workFrame.appendChild(workButton);

authorNameContainer.className = "inner-box";
workPhotosContainer.className = "inner-box";
workButton.innerText = "Visit";

// authorNameContainer 内部
// 顶多会出现设置display和marginLeft为1em的代码
const authorName = document.createElement("h3");
authorName.style.display = "inline";
// 与作者名同行的 lifetime 是h5
const liftime = document.createElement("h5")
liftime.style.display = "inline";
liftime.style.marginLeft = "1em";
authorNameContainer.appendChild(authorName);
authorNameContainer.appendChild(liftime);

// workPhotosContainer 内部
const photoTitle = document.createElement("h4");
workPhotosContainer.appendChild(photoTitle);

// 双击效果
// body 填满
document.body.style.minHeight = '100vh';
document.body.addEventListener("dblclick", () => {

    // 插入 flex-container 中
    const flexContainer = document.querySelector(".flex-container");

    works.forEach(work => {
        let workTempt = workFrame.cloneNode(true);

        // 注意①除了Genre后的:左右的空格以及必要的单词间空格，lab7的js里面不会出现设置字体、添加空格什么的代码....
        workTempt.childNodes[0].innerText = "Genre : " + work.tips;
        workTempt.getElementsByTagName("h3")[0].innerText = work.author;
        workTempt.getElementsByTagName("h5")[0].innerText = 'lifetime:' + work.lifetime;
        workTempt.getElementsByTagName("h4")[0].innerText = 'Popular Photos';

        let photoTitle = workTempt.getElementsByTagName("h4")[0];
        work.photos.forEach(photoSrc => {
            let photoImg = document.createElement("img");
            photoImg.className = "photo"
            photoImg.src = "img/" + photoSrc;
            photoTitle.parentNode.appendChild(photoImg);
        });

        flexContainer.appendChild(workTempt);
    });
});
