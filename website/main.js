function checkForm() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();

    if (emailValue === "") {
        alert("請輸入電子郵件");
        return false;
    }

    // 其他表單驗證或後續處理

    // 返回 true 以提交表單
    return true;
}