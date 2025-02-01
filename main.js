const tabs = document.querySelectorAll('.tabs button');
const contents = document.querySelectorAll('.contents > div');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.id;

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetContent = document.getElementById('t'+targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
