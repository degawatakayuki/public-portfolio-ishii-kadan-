window.addEventListener("scroll", function() {
    //ヘッダーを変数に格納
    let header = document.getElementById('headerBlock');
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("headerScroll", window.scrollY > 100);
});