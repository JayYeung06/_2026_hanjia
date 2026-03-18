//1注册与登录
const loginTab = document.getElementById('login-tab');
const loginForm = document.getElementById('login-form');
const registerTab = document.getElementById('register-tab');
const registerForm = document.getElementById('register-form')

loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginTab.classList.add('bg-primary', 'text-white');
    loginTab.classList.remove('bg-gray-800', 'hover:bg-gray-700');
    registerTab.classList.add('bg-gray-800', 'hover:bg-gray-700');
    registerTab.classList.remove('bg-primary', 'text-white');
})

registerTab.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerTab.classList.add('bg-primary', 'text-white');
    registerTab.classList.remove('bg-gray-800', 'hover:bg-gray-700');
    loginTab.classList.add('bg-gray-800', 'hover:bg-gray-700');
    loginTab.classList.remove('bg-primary', 'text-white');
});

//2注册
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const repassword = document.getElementById('register-repassword').value;
    if(password !== repassword){
        alert('两次输入密码不一致');
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExist = users.some(user => user.username === username);
    if(userExist){
        alert('用户名已存在');
        return;
    }
    users.push({
        username: username,
        password: password
    })
    localStorage.setItem('users', JSON.stringify(users));
    alert('注册成功');
    loginTab.click();
    document.getElementById('login-username').value = username;
});

//3登录
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if(!user){
        alert('用户名或密码错误');
        return;
    }
    localStorage.setItem('current_user', JSON.stringify(user));
    window.location.href = 'user.html';
});