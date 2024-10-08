// Đối tượng lưu trữ các bản dịch cho từng ngôn ngữ
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
        reviewsHeading: "Quality Medicine",
        reviewsText: "Tuong Duy Pharmacy - Your trusted partner in health. With 7 years of experience in the pharmaceutical field, we are proud to be a reputable pharmacy chain in Phu Quoc, owning 6 modern branches and a team of 10 professional pharmacists. We are committed to providing high-quality products, dedicated service, and in-depth consultations to help you take care of your health comprehensively.",
        tipsHowToCall: "How to Call Us?",
        serviceHeading: "Our Services",  // Thêm phần dịch "Dịch vụ của chúng tôi"
        mapHeading: "Map Location",
        directionsMainBranch: "Main Branch",  // Thêm phần dịch "Chi nhánh 1"
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
        reviewsHeading: "Thuốc chuẩn - Giá tốt",
        reviewsText: "Quầy Thuốc Tường Duy - Đối tác tin cậy cho sức khỏe của bạn. Với 7 năm kinh nghiệm trong lĩnh vực dược phẩm, chúng tôi tự hào là chuỗi nhà thuốc uy tín tại Phú Quốc, sở hữu 6 chi nhánh hiện đại và đội ngũ 10 dược sĩ chuyên nghiệp. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao, dịch vụ tận tâm và tư vấn chuyên sâu, giúp bạn chăm sóc sức khỏe toàn diện.",
        tipsHowToCall: "Làm thế nào để gọi chúng tôi?",
        serviceHeading: "Dịch vụ của chúng tôi",  // Thêm phần dịch "Dịch vụ của chúng tôi"
        mapHeading: "Vị trí trên bản đồ",
        directionsMainBranch: "Chi nhánh 1",  // Thêm phần dịch "Chi nhánh 1"
        clickForDirections: "Xem chỉ đường",
        footerContact: "Liên hệ",
        st1: "Bước 1: Bấm phím (Bấm để gọi) ở đầu trang",
        st2: "Bước 2: Trang sẽ dẫn đến giao diện gọi, bấm phím gọi",
        st3: "Bước 3: Sau khi nói chuyện với tư vấn viên, chúng tôi sẽ đến giao thuốc trong vòng 2 giờ nếu bạn có đặt thuốc",
        sev1: "Tư vấn miễn phí",
        sev2: "Giao hàng miễn phí",
        sev3: "Đảm bảo nhận thuốc trong vòng 2 giờ tại khu vực Phú Quốc",
        head_hospital: "Hình cảnh các chi nhánh",
        logo: "Quầy Thuốc Tường Duy",
        footerAddressHeading: "Địa chỉ các chi nhánh"
    }
};

// Hàm cập nhật nội dung trang web theo ngôn ngữ hiện tại
function updateContent() {
    document.title = translations[currentLanguage].title;
    document.querySelector('.hero h1').textContent = translations[currentLanguage].heroTitle;
    document.querySelector('.hero_text').textContent = translations[currentLanguage].heroText;
    document.querySelector('.btn-1 strong').textContent = translations[currentLanguage].buttonCall;
    document.querySelector('.btn-2 strong').textContent = translations[currentLanguage].buttonChat;
    document.querySelector('.feature-item:nth-child(1) h2').textContent = translations[currentLanguage].gppStandard;
    document.querySelector('.feature-item:nth-child(2) h2').textContent = translations[currentLanguage].experience;
    document.querySelector('.feature-item:nth-child(3) h2').textContent = translations[currentLanguage].branches;
    document.querySelector('.feature-item:nth-child(4) h2').textContent = translations[currentLanguage].pharmacists;
    document.querySelector('.reviews .head').textContent = translations[currentLanguage].reviewsHeading;
    document.querySelector('.reviews p').textContent = translations[currentLanguage].reviewsText;
    document.querySelector('.how_call h2').textContent = translations[currentLanguage].tipsHowToCall;
    document.querySelector('.sev1').textContent = translations[currentLanguage].sev1;
    document.querySelector('.sev2').textContent = translations[currentLanguage].sev2;
    document.querySelector('.sev3').textContent = translations[currentLanguage].sev3;
    document.querySelector('.st1').textContent = translations[currentLanguage].st1;
    document.querySelector('.st2').textContent = translations[currentLanguage].st2;
    document.querySelector('.st3').textContent = translations[currentLanguage].st3;
    document.querySelector('.head_hospital').textContent = translations[currentLanguage].head_hospital;
    document.querySelector('.head_location').textContent = translations[currentLanguage].mapHeading;
    document.querySelector('.dir_btn strong').textContent = translations[currentLanguage].clickForDirections;
    document.querySelector('.footer_dir h3').textContent = translations[currentLanguage].footerAddressHeading;
    document.querySelector('.footer_avatar img').alt = translations[currentLanguage].logo;
    document.querySelector('.contact h3').textContent = translations[currentLanguage].footerContact;
    document.querySelector('.our_seveice').textContent = translations[currentLanguage].serviceHeading; // Cập nhật phần dịch "Dịch vụ của chúng tôi"
    document.querySelector('.branch h2').textContent = translations[currentLanguage].directionsMainBranch; // Cập nhật phần dịch "Chi nhánh 1"
}

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
        languageFlag.src = "./assets/img/England_flag.svg";
        languageText.textContent = "En";
    }

    // Cập nhật nội dung trang web
    updateContent();
}

// Biến lưu trữ ngôn ngữ hiện tại
let currentLanguage = 'vi'; // Ngôn ngữ mặc định là Tiếng Việt

// Thêm sự kiện vào nút chuyển đổi ngôn ngữ
document.getElementById("language-toggle").addEventListener("click", toggleLanguage);

// Gọi hàm cập nhật nội dung lần đầu
updateContent();
