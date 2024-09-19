const slider = document.querySelector('.carrossel_parceiros');
        let isDown = false;
        let startX;
        let scrollLeft;

        // Quando o mouse é pressionado
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            slider.style.cursor = 'grabbing'; // Cursor de "segurando"
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        // Quando o mouse é solto ou o cursor sai da área
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab'; // Cursor de "grabbing"
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab'; // Cursor de "grab" ao soltar
        });

        // Lógica do arraste enquanto o mouse se move
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Só executa o código se o mouse estiver pressionado
            e.preventDefault(); // Previne seleção de texto ao arrastar
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 0.8; // Multiplica o movimento para arrastar mais rápido
            slider.scrollLeft = scrollLeft - walk; // Atualiza a posição de rolagem
        });