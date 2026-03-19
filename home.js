// 移动端
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains("hidden")) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
        //轮播图
        const carouselItems = document.querySelector('.carousel-items');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indicator = document.querySelectorAll('.carousel-indicator');
        let currentIndex = 0;
        const totalSlides = 4;
        const transitionClass = 'duration-500';
        function updateCarousel() {
            carouselItems.style.transform = `translateX(-${currentIndex * 100}%)`;
            const indicatorIndex = currentIndex === 3 ? 0 : currentIndex;
            indicator.forEach((item, index) => {
                if (index === indicatorIndex) {
                    item.classList.add('bg-primary');
                    item.classList.remove('bg-white/50');
                } else {
                    item.classList.remove('bg-primary');
                    item.classList.add('bg-white/50');
                }
            });
        }
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            carouselItems.classList.add(transitionClass);
            if(currentIndex === 3){
                updateCarousel();
                setTimeout(() => {
                    carouselItems.classList.remove(transitionClass);
                    currentIndex = 0;
                    updateCarousel();
                    setTimeout(() => carouselItems.classList.add(transitionClass),10);
                }, 500);
            } else{
                updateCarousel();
            }
        });
        prevBtn.addEventListener('click', () => {
            if(currentIndex === 0){
                carouselItems.classList.remove(transitionClass);
                currentIndex = 3;
                updateCarousel();
                setTimeout(() => {
                    carouselItems.classList.add(transitionClass);
                    currentIndex = 2;
                    updateCarousel();
                }, 10)
            } else{
                currentIndex--;
                updateCarousel();
            }
        });
        indicator.forEach((item, index) => {
            item.addEventListener('click', () => {
                carouselItems.classList.add(transitionClass);
                updateCarousel;
            });
        });
        setInterval(() => {
            nextBtn.click();
        }, 5000);
        //表
        const rankBtns = document.querySelectorAll('.rank-btn');
        const rankTable = document.getElementById('rank-table');
        const rankPlaceholder = document.getElementById('rank-placeholder');
        rankBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.innerText.trim();
                rankBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white');
                    b.classList.add('bg-gray-800', 'hover:bg-gray-700');
                });
                btn.classList.remove('bg-gray-800', 'hover:bg-gray-700');
                btn.classList.add('bg-primary', 'text-white');
                if (text === '销量') {
                    rankTable.classList.remove('hidden');
                    rankPlaceholder.classList.add('hidden');
                } else {
                    rankTable.classList.add('hidden');
                    rankPlaceholder.classList.remove('hidden');
                }
            });
        });
        //搜索
        const searchInput = document.getElementById('search');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    alert(`正在搜索: ${searchInput.value}`);
                }
            });
        }
        const mobilesearchInput = document.getElementById('moblie_search');
        if (mobilesearchInput) {
            mobilesearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    alert(`正在搜索: ${mobilesearchInput.value}`);
                }
            });
        }
        //未来可期
        const categoryBtns = document.querySelectorAll('.category-btn');
        const gameGrid = document.getElementById('game-grid');
        const placeholder = document.querySelector('.category-placeholder');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                categoryBtns.forEach(b => {
                    b.classList.remove('bg-primary', 'text-white');
                    b.classList.add('bg-gray-800');
                });
                btn.classList.remove('bg-gray-800');
                btn.classList.add('bg-primary', 'text-white');
                if (category === 'all') {
                    gameGrid.classList.remove('hidden');
                    placeholder.classList.add('hidden');
                } else {
                    gameGrid.classList.add('hidden');
                    placeholder.classList.remove('hidden');
                }
            });
        });