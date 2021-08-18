const article_profile = document.querySelector(".article--info__profile");
const article_info = document.querySelector(".article--info");
const article_share = document.querySelector(".article--info__share");
const share_btn = document.querySelector(".btn-share");

function activate_share() {
  if (article_info.classList.contains("share-active")) {
    article_profile.classList.remove("share-active");
    article_info.classList.remove("share-active");
    article_share.classList.remove("share-active");
    share_btn.classList.remove("share-active");
  } else {
    article_info.classList.add("share-active");
    article_profile.classList.add("share-active");
    article_share.classList.add("share-active");
    share_btn.classList.add("share-active");
  }
}

share_btn.addEventListener("click", () => {
  activate_share();
});
