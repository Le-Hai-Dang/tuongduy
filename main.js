// Object chứa các bản dịch của trang
const translations = {
    en: {
        title: "Tuong Duy Pharmacy",
        heroTitle: "Online Health Consultation",
        heroText: "We provide free online health consultations and ultra-fast drug delivery within 2 hours in the Phu Quoc area with free shipping.",
        buttonCall: "Click to Call",
        buttonChat: "Click to Chat",
        experience: "7 Years of Experience",
        branches: "6 Branches",
        pharmacists: "10 Pharmacists",
        gppStandard: "GPP Standard",
        reviewsHeading: "Quality Medicine - Good Prices - Dedicated Consultation",
        reviewsText: "Tuong Duy Pharmacy - Your trusted partner in health. With 7 years of experience in the pharmaceutical field, we are proud to be a reputable pharmacy chain in Phu Quoc, owning 6 modern branches and a team of 10 professional pharmacists. We are committed to providing high-quality products, dedicated service, and in-depth consultations to help you take care of your health comprehensively.",
        tipsHowToCall: "How to Call Us?",
        serviceHeading: "Our Services",
        mapHeading: "Map Location",
        directionsMainBranch: "Main Branch",
        clickForDirections: "Directions",
        footerContact: "Contact",
        st1: "Step 1: Click the call button at the top of the page",
        st2: "Step 2: The page will lead to the call interface, press the call button",
        st3: "Step 3: After talking with the consultant, we will deliver the medicine within 2 hours if you place an order",
        sev1: "Free consultation",
        sev2: "Free delivery",
        sev3: "Ensure delivery of medicine within 2 hours in Phu Quoc area",
        head_hospital: "Branch images",
        logo: "Tuong Duy Pharmacy",
        footerAddressHeading: "Branch Addresses"
    },
    vi: {
        title: "Quầy Thuốc Tường Duy",
        heroTitle: "Tư vấn sức khỏe trực tuyến",
        heroText: "Chúng tôi cung cấp dịch vụ tư vấn sức khỏe trực tuyến miễn phí, giao thuốc tận nơi siêu tốc trong vòng 2 giờ khu vực Phú Quốc và miễn phí vận chuyển.",
        buttonCall: "Bấm để gọi",
        buttonChat: "Bấm để trò chuyện",
        experience: "7 năm kinh nghiệm",
        branches: "6 chi nhánh",
        pharmacists: "10 dược sĩ",
        gppStandard: "Đạt chuẩn GPP",
        reviewsHeading: "Thuốc chuẩn - Giá tốt - Tư vấn tận tâm",
        reviewsText: "Quầy Thuốc Tường Duy - Đối tác tin cậy cho sức khỏe của bạn. Với 7 năm kinh nghiệm trong lĩnh vực dược phẩm, chúng tôi tự hào là chuỗi nhà thuốc uy tín tại Phú Quốc, sở hữu 6 chi nhánh hiện đại và đội ngũ 10 dược sĩ chuyên nghiệp. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, dịch vụ tận tâm và tư vấn chuyên sâu, giúp bạn chăm sóc sức khỏe toàn diện.",
        tipsHowToCall: "Làm thế nào để gọi chúng tôi?",
        serviceHeading: "Dịch vụ của chúng tôi",
        mapHeading: "Vị trí trên bản đồ",
        directionsMainBranch: "Chi nhánh 1",
        clickForDirections: "Xem chỉ đường",
        footerContact: "Liên hệ",
        st1: "Bước 1: Bấm phím (Bấm để gọi) ở đầu trang",
        st2: "Bước 2: Trang sẽ dẫn đến giao diện gọi, bấm phím gọi",
        st3: "Bước 3: Sau khi nói chuyện với tư vấn viên, chúng tôi sẽ đến giao thuốc trong vòng 2 giờ nếu bạn có đặt thuốc",
        sev1: "Tư vấn miễn phí",
        sev2: "Giao hàng miễn phí",
        sev3: "Đảm bảo nhận thuốc trong vòng 2 giờ tại khu vực Phú Quốc",
        head_hospital: "Hình cảnh các chi nhánh",
        logo:"Quầy Thuốc Tường Duy",
        footerAddressHeading: "Địa chỉ các chi nhánh"
    }
};

let currentLanguage = 'vi'; // Ngôn ngữ mặc định là Tiếng Việt

// Hàm chuyển đổi ngôn ngữ
function toggleLanguage() {
    const languageFlag = document.getElementById("language-flag");
    const languageText = document.getElementById("language-text");

    // Chuyển đổi giữa tiếng Anh và tiếng Việt
    currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';

    // Cập nhật nút chuyển đổi ngôn ngữ
    if (currentLanguage === 'en') {
        languageFlag.src = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";
        languageText.textContent = "Vi";
    } else {
        languageFlag.src = "data:image/png;base64,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";
        languageText.textContent = "En";
    }

    // Cập nhật nội dung trang
    updatePageContent();
}

// Hàm cập nhật nội dung trang theo ngôn ngữ
function updatePageContent() {
    document.title = translations[currentLanguage].title;
    document.querySelector('.hero-content h1').textContent = translations[currentLanguage].heroTitle;
    document.querySelector('.hero_text').textContent = translations[currentLanguage].heroText;
    document.querySelector('.btn-1 strong').textContent = translations[currentLanguage].buttonCall;
    document.querySelector('.btn-2 strong').textContent = translations[currentLanguage].buttonChat;
    document.querySelector('.features .feature-item:nth-child(1) h2').textContent = translations[currentLanguage].experience;
    document.querySelector('.features .feature-item:nth-child(2) h2').textContent = translations[currentLanguage].branches;
    document.querySelector('.features .feature-item:nth-child(3) h2').textContent = translations[currentLanguage].pharmacists;
    document.querySelector('.features .feature-item:nth-child(4) h2').textContent = translations[currentLanguage].gppStandard;
    document.querySelector('.reviews h2').textContent = translations[currentLanguage].reviewsHeading;
    document.querySelector('.reviews p').textContent = translations[currentLanguage].reviewsText;
    document.querySelector('.health-tips .tip-item:nth-child(1) h2').textContent = translations[currentLanguage].tipsHowToCall;
    document.querySelector('.health-tips .tip-item:nth-child(2) h2').textContent = translations[currentLanguage].serviceHeading;
    document.querySelector('.address-container h2').textContent = translations[currentLanguage].mapHeading;
    document.querySelector('.directions p').textContent = translations[currentLanguage].directionsMainBranch;
    document.querySelector('.dir_btn strong').textContent = translations[currentLanguage].clickForDirections;
    document.querySelector('.contact h3').textContent = translations[currentLanguage].footerContact;
    document.querySelector('.footer_dir h3').textContent = translations[currentLanguage].footerAddressHeading;
    document.querySelector('.st1').textContent = translations[currentLanguage].st1;
    document.querySelector('.st2').textContent = translations[currentLanguage].st2;
    document.querySelector('.st3').textContent = translations[currentLanguage].st3;
    document.querySelector('.sev1').textContent = translations[currentLanguage].sev1;
    document.querySelector('.sev2').textContent = translations[currentLanguage].sev2;
    document.querySelector('.sev3').textContent = translations[currentLanguage].sev3;
    document.querySelector('.head_hospital').textContent = translations[currentLanguage].head_hospital;
    document.querySelector('.logo').textContent = translations[currentLanguage].logo;






}

// Lắng nghe sự kiện click để chuyển đổi ngôn ngữ
document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

// Mở modal và hiển thị ảnh đã được chọn
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Thêm sự kiện để đóng modal khi bấm vào vùng trống
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Đóng modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


