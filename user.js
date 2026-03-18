const currentUser = JSON.parse(localStorage.getItem('current_user'));
if(!currentUser){
    alert('请先登录');
    window.location.href = 'login.html';
}

document.getElementById('username').innerText = currentUser.username;

document.getElementById("logout").addEventListener('click', () => {
    localStorage.removeItem('current_user');
    alert('已退出登录');
    window.location.href = 'login.html';
});