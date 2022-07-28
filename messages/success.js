const parse = require('html-react-parser');

export default [
    {title: "ورود موفقیت آمیز بود!", body: "در حال انتقال به پنل کاربری هستید..."},
    {
        title: "ایمیل صحیح بود!",
        body: parse("اطلاعات ورود برای ایمیل شما ارسال شده است! <br> لطفا پوشه spam را هم بررسی کنید. ")
    },
]