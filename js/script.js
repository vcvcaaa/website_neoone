document.addEventListener('DOMContentLoaded', () => {
        // --- Hamburger Menu Toggle ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.getElementById('main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open'); // 切換 nav 的 class
            hamburgerButton.classList.toggle('active'); // 切換按鈕自身的 class (用於 "X" 效果)

            // 更新 ARIA 屬性 (無障礙考慮)
            const isExpanded = mainNav.classList.contains('nav-open');
            hamburgerButton.setAttribute('aria-expanded', isExpanded);
        });
    }
    const langSwitcher = document.getElementById('lang-switcher');
    let currentLang = localStorage.getItem('language') || 'en'; // Default to English

    // Function to update content based on language
    function switchLanguage(lang) {
        // Set HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-lang-key
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.dataset.langKey;
            // Simple key lookup (adjust if you use nested keys like 'home.title')
            // Check if the key exists in the selected language content
             if (content[lang] && content[lang][key]) {
                 // Use innerHTML because some keys contain HTML tags (like <strong>)
                 el.innerHTML = content[lang][key];
             } else {
                 // Fallback or log error if key not found
                 // console.warn(`Translation key "${key}" not found for language "${lang}"`);
                  // Optionally fallback to English
                 if (lang !== 'en' && content['en'] && content['en'][key]) {
                     el.innerHTML = content['en'][key];
                 }
             }
        });

        // Update language switcher button text
        langSwitcher.textContent = (lang === 'en') ? content.en.lang_switch_zh : content.zh.lang_switch_en;

        // Update active class on nav links (if applicable - based on current page)
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.navbar nav a').forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });


        // Store preference
        localStorage.setItem('language', lang);
        currentLang = lang; // Update current language state

         // Re-apply font based on language
         if (lang === 'zh') {
            document.body.style.fontFamily = "'Noto Sans TC', 'Poppins', sans-serif";
        } else {
            document.body.style.fontFamily = "'Poppins', 'Noto Sans TC', sans-serif";
        }
    }

    // Language switcher event listener
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const newLang = (currentLang === 'en') ? 'zh' : 'en';
            switchLanguage(newLang);
        });
    }

// --- Interactivity Example: Form Handling with AJAX for FormSubmit ---
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

// 確保 content 物件已定義 (來自 content.js)
// const content = { en: {...}, zh: {...} }; // (這行只是註釋，確保 content.js 已加載)
// 確保 currentLang 變數已定義
// let currentLang = localStorage.getItem('language') || 'en'; // (這行只是註釋，確保語言邏輯存在)

if (contactForm && formResponse) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 阻止瀏覽器默認提交行為
        formResponse.textContent = ''; // 清除舊訊息
        formResponse.classList.remove('success', 'error');

        // 顯示一個"正在發送"的提示 (可選)
        // 注意: 這裡直接用 'Sending...' 和 'Error...'，因為 currentLang 可能在這個 scope 未定義
        // 您需要確保 currentLang 和 content 物件在此處可用，或者使用固定文字
        formResponse.textContent = 'Sending...'; // 或者用 currentLang 判斷

        const formData = new FormData(contactForm);
        const formAction = contactForm.action; // 獲取 FormSubmit 的 URL

        fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // 請求 JSON 格式的回應，FormSubmit 會阻止跳轉
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json().catch(() => ({ success: true })); // 成功但無 JSON 也視為成功
            } else {
                return response.json().catch(() => ({})).then(data => {
                     throw new Error(data.message || `Server responded with status ${response.status}`);
                });
            }
        })
        .then(data => {
            // 注意: 這裡直接用英文成功訊息，您需要確保 currentLang 和 content 物件可用
            formResponse.textContent = "Thank you! Your inquiry has been sent successfully."; // 或者用 content[currentLang].form_success_message
            formResponse.classList.add('success');
            contactForm.reset(); // 清空表單
            console.log('FormSubmit success data (may vary):', data);
        })
        .catch(error => {
             // 注意: 這裡直接用英文失敗訊息，您需要確保 currentLang 和 content 物件可用
            const errorMsg = "Sorry, there was an error sending your message."; // 或者用 content[currentLang]?.form_error_message
            formResponse.textContent = `<span class="math-inline">\{errorMsg\} \(</span>{error.message})`;
            formResponse.classList.add('error');
            console.error('Form submission error:', error);
        });
    });
}



    // --- Initial Setup ---
    switchLanguage(currentLang); // Apply language on load
    document.body.classList.add('loaded'); // Trigger fade-in animation

});