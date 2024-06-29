document.addEventListener('DOMContentLoaded', function() {
    // 获取悬浮球和子按钮元素
    var floatButton = document.getElementById('floatButton');
    var subButtons = document.querySelector('.sub-buttons');

    // 点击悬浮球展开/关闭子按钮
    floatButton.addEventListener('click', function() {
        // 如果子按钮已经显示，则隐藏；否则显示
        if (subButtons.style.display === 'block') {
            subButtons.style.display = 'none';
        } else {
            subButtons.style.display = 'block';
        }
    });
});

// 返回上一页
function goBack() {
    window.history.back();
}

// 返回顶部
function goToTop() {
    window.scrollTo(0, 0);
}

// 返回主页
function goToHomePage() {
    window.location.href = "./home_page.html";
}

var BgmOn = false;
function toggleBGM() {
    var bgm = document.getElementById("bgm");
    var bgmButton = document.getElementById("bgmButton");
    console.log("BgmOn:", BgmOn);
    if (BgmOn) {
        bgm.pause();
        BgmOn = false;
        bgmButton.style.backgroundImage = "url('../images/Icon-Mute.png')";
    } else {
        bgm.play(); 
        BgmOn = true;
        bgmButton.style.backgroundImage = "url('../images/Icon-Play.png')";
    }
}


