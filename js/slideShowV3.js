let thumbnailsElement = document.querySelector("div.thumbnails");
let count=1;
  let mainElement = document.querySelector("div.main>img");
  function left(){
    count = count-1;
    thumbnailsElement.children[count].classList.remove('selected');
    if (count == 0) {
      count =19;
    }
    if(count<10){
      let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
      mainElement.setAttribute('src',url);
    }else {
      let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
      mainElement.setAttribute('src',url);
    }
      thumbnailsElement.children[count-1].classList.add('selected');
  }
  function right(){
    thumbnailsElement.children[count-1].classList.remove('selected');
      count = count+1;
      if (count == 20) {
        count = 1;
      }
      if(count<10){
        let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
        mainElement.setAttribute('src',url);
      }else {
        let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
        mainElement.setAttribute('src',url);
      }
      thumbnailsElement.children[count-1].classList.add('selected');
  }
let timer;
let nowPlaying = false;
function play(){
  if (nowPlaying == false){
    nowPlaying = true;
    autoPlay();
}
function autoPlay(){
  id = setTimeout(function(){
    right();
    autoPlay();
      },1000);
}
}
function stop(){
  clearTimeout(id);
  nowPlaying = false;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  let url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  mainElement.setAttribute('src',url);
  count = 1;
  thumbnailsElement.children[count-1].classList.add('selected');
}
