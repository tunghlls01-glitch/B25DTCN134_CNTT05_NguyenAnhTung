let queue = [];

let obj = {
    success: {
        title: "✅ Thành công",
        comment: "Bài viết được lưu thành công."
    },
    error: {
        title: "❌ Có lỗi xảy ra",
        comment: "Không thể kết nối máy chủ vui lòng thử lại."
    },
    info: {
        title: "ℹ️ Thông tin",
        comment: "Hệ thống bảo trì 23:00 tối nay."
    },
    warning: {
        title: "⚠️ Cảnh báo",
        comment: "Phiên đăng nhập sắp hết hạn sau 5p."
    },
};
// thêm toast
function addToast(type) {
    queue.push(type);
    showNext();
}
// hiển thị
function showNext() {
    if (queue.length === 0) {
        return;
    }
    let type = queue.shift();
    let data = obj[type];
    let div = document.createElement("div");
    div.className = "card " + type;
    div.innerHTML = `
        <span>${data.title}</span>
        <p>${data.comment}</p>
        <div class="progress"></div>
    `;
    document.querySelector(".status").appendChild(div);
    div.style.opacity = "0";
    div.style.transform = "translateX(100%)";
    setTimeout(() => {
        div.style.transition = "0.4s";
        div.style.opacity = "1";
        div.style.transform = "translateX(0)";
    }, 50);
    setTimeout(() => {
        div.style.opacity = "0";
        div.style.transform = "translateX(100%)";
        setTimeout(() => {
            div.remove();
        }, 400);
    }, 4000);
    let progress = div.querySelector(".progress");
    setTimeout(() => {
        progress.style.transition = "4s linear";
        progress.style.width = "0%";
    }, 50);
}
document.querySelector(".btn01").onclick = () => addToast("success");
document.querySelector(".btn02").onclick = () => addToast("error");
document.querySelector(".btn03").onclick = () => addToast("info");
document.querySelector(".btn04").onclick = () => addToast("warning");