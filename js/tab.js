document.addEventListener('DOMContentLoaded',
    function() {
        //タブにクリックイベントを適用
        const tabs = document.getElementsByClassName('tab');

        for(var i=0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', tabSwitch, false);
        }

        //タブをクリックすると実行
        function tabSwitch() {
            document.getElementsByClassName('is-active')[0].classList.remove('is-active');
            this.classList.add('is-active');

            //コンテンツのクラス変更
            document.getElementsByClassName('is-show')[0].classList.remove('is-show');
            const arrayTabs = Array.prototype.slice.call(tabs);
            const index = arrayTabs.indexOf(this);
            document.getElementsByClassName('panel')[index].classList.add('is-show');          
        };
    }, false
);