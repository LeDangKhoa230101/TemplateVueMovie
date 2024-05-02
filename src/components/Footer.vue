<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <a href="#" class="footer-image">
                                    <img src="@/assets/logo.webp" alt="logo" />
                                </a>
                                <p class="email-text">
                                    Email:
                                    <span>customer@streamit.com</span>
                                </p>
                                <span class="customer-text">DỊCH VỤ KHÁCH HÀNG</span>
                                <p class="phone-number">+(480)555-0103</p>
                            </div>
                            <div class="col-xl-2 col-md-3">
                                <div class="footer-link">
                                    <h4>Đường dẫn nhanh</h4>
                                    <ul class="footer-link-list">
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Về chúng tôi</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Blog</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Gói giá</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Câu hỏi thường gặp</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-3">
                                <div class="footer-link">
                                    <h4>Phim để xem</h4>
                                    <ul class="footer-link-list">
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Xu hướng hàng đầu</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Khuyến khích</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Phổ biến</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-md-6">
                                <div class="footer-link">
                                    <h4>Giới thiệu về công ty</h4>
                                    <ul class="footer-link-list">
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Liên hệ chúng tôi</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Chính sách bảo mật</span>
                                        </li>
                                        <li>
                                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon" />
                                            <span class="footer-link-title">Điều khoản sử dụng</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="footer-link">
                                    <h4>Theo dõi bản tin</h4>
                                    <form class="form-subscribe">
                                        <input type="email" placeholder="Email*" />
                                        <button type="submit">Theo dõi</button>
                                    </form>
                                    <div class="follow">
                                        <span>Theo dõi:</span>
                                        <ul class="follow-list">
                                            <li>
                                                <a href="#" class="follow-list-btn">
                                                    <font-awesome-icon :icon="['fab', 'facebook']" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="follow-list-btn">
                                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="follow-list-btn">
                                                    <font-awesome-icon :icon="['fab', 'github']" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="follow-list-btn">
                                                    <font-awesome-icon :icon="['fab', 'instagram']" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-10">
                                <ul class="footer-bottom-list">
                                    <li>Terms Of Use</li>
                                    <li>Privacy-Policy</li>
                                    <li>FAQ</li>
                                    <li>Watch List</li>
                                </ul>
                                <p class="footer-rap">
                                    © 2023
                                    <span>STREAMIT</span>
                                    . All Rights Reserved. All videos and shows on this platform are trademarks of, and
                                    all related images and content are the property of, Streamit Inc. Duplication and
                                    copy of this is strictly prohibited. All rights reserved.
                                </p>
                            </div>
                            <div class="col-xl-3 col-md-2"></div>
                            <div class="col-xl-3 col-md-12">
                                <div class="footer-app">
                                    <h4>Download Apps</h4>
                                    <ul class="footer-app-list">
                                        <li>
                                            <img src="@/assets/google-play.webp" alt="" />
                                        </li>
                                        <li>
                                            <img src="@/assets/apple.webp" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-wrapper",
};
</script>

<style scoped>
footer {
    background-color: #141314;
}
.footer-top {
    padding: 90px 0;
    border-bottom: 1px solid #262525;
}
.footer-image {
    display: inline-block;
    height: 38px;
}
.footer-image img {
    height: 100%;
}
.email-text {
    color: #d1d0cf;
    font-size: 14px;
    margin: 40px 0 24px;
}
.email-text > span {
    color: #fff;
}
.customer-text {
    text-transform: uppercase;
    font-size: 14px;
    color: #d1d0cf;
}
.phone-number {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin-top: 4px;
}
.footer-link h4 {
    font-size: 18px;
    margin-bottom: 19px;
    color: #fff;
}
.footer-link-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-link-list li {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 16px;
}
.footer-link-list li:hover .footer-link-title {
    color: #e50914;
}
.footer-link-list > li > .icon {
    color: #e50914;
    font-size: 12px;
}
.footer-link-title {
    color: #d1d0cf;
    font-size: 14px;
    font-weight: 200;
    margin-left: 10px;
    transition: 0.2s;
}
.form-subscribe {
    display: flex;
    align-items: center;
}
.form-subscribe input[type="email"] {
    padding: 12px 16px;
    background: #000;
    font-size: 14px;
    border: none;
    color: #fff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
}
.form-subscribe input[type="email"]:focus-visible {
    outline: #e50914 solid 1px;
}
.form-subscribe button[type="submit"] {
    border: none;
    background: #e50914;
    color: #fff;
    font-size: 14px;
    padding: 13px 20px;
    font-weight: 600;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    transition: 0.3s;
}
.form-subscribe button[type="submit"]:hover {
    box-shadow: inset -56px 0 0 0 #bc0c15, inset 56px 0 0 0 #bc0c15;
}
.follow {
    display: flex;
    align-items: center;
    margin-top: 48px;
}
.follow > span {
    font-size: 14px;
    color: #d1d0cf;
}
.follow-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 0 0 20px;
    list-style: none;
}
.follow-list li {
    margin-right: 12px;
    transform: translateY(0);
    transition: all 0.4s ease 0s;
}
.follow-list li:hover .follow-list-btn {
    background: #e50914;
}
.follow-list li:hover {
    transform: translateY(-4px);
}
.follow-list-btn {
    color: #fff;
    border: none;
    padding: 11.2px 12px;
    border-radius: 50%;
    background-color: #343a40;
    transition: all 0.4s ease 0s;
}
/* ---------------------- */
/* ---------------------- */
.footer-bottom {
    padding: 50px 0;
}
.footer-bottom-list {
    padding: 0;
    margin-bottom: 15px;
    list-style: none;
    display: flex;
    align-items: center;
}
.footer-bottom-list li {
    color: #d1d0cf;
    margin-right: 30px;
    cursor: pointer;
    transition: 0.2s;
}
.footer-bottom-list li:hover {
    color: #e50914;
}
.footer-rap {
    font-size: 14px;
    color: #d1d0cf;
}
.footer-rap span {
    color: #e50914;
}
.footer-app h4 {
    font-size: 14px;
    margin-bottom: 8px;
    color: #fff;
}
.footer-app-list {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-app-list li {
    cursor: pointer;
    margin-right: 16px;
}
</style>

<style scoped>
/* Mobile */
@media screen and (max-width: 739px) {
    .footer-top {
        padding: 90px 34px;
    }
    .footer-link-list {
        padding-left: 30px;
    }
    .footer-bottom-list li {
        font-size: 14px;
    }
}

/* Tablet */
@media screen and (min-width: 740px) and (max-width: 1024px) {
}

/* Tablet And Mobile */
@media screen and (max-width: 1024px) {
}

@media screen and (min-width: 1025px) {
}
</style>
