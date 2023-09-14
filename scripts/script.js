document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});



// ==========================translation ==================


// let isEnglish = true;

// const englishText = {
//     about: `At Xico, we specialize in crafting visually captivating websites that pay meticulous attention to box styling. From defining borders that add sophistication to creating shadows that elevate content, our expert designers ensure that every box is meticulously tailored. We carefully adjust padding for optimal user comfort and customize height and width to seamlessly integrate into your design. Our thoughtful selection of background colors and text colors creates a harmonious visual narrative that engages and informs your audience. With Xico, you'll experience a commitment to perfection in every detail of your website's design, guaranteeing an exceptional online presence that captivates visitors and delivers your message effectively.`,
//     instructions: `
      
// The provided HTML code appears to be a "Box Shadow Generator" interface
// that allows users to customize the properties of a box (such as its box
// shadow, border, size, and text properties) and view the CSS properties
// generated based on their selections. It also includes a button to copy
// these CSS properties. Here are some instructions on how to use this code:
// <br />
// <br />

// <h3>Box Shadow Controls:</h3>
// <br />
// <br />
// <b>
//   Use the sliders under "Horizontal Shadow," "Vertical Shadow," "Blur,"
//   "Spread," and the color picker under "Color" to customize the box
//   shadow.</b
// >
// <br />
// <br />
// Adjust the properties under "Border Properties" to set the border width,
// style, and color. Modify the "Box Size" by specifying the width and height
// in pixels using the input fields. Define the "Border Radius" using the
// input field. Customize the "Text Properties" such as text color, text
// background color, text indent, and text decoration. Set the "Box Padding"
// using the input field. Live Preview:
// <br />
// <br />

// The box on the right side of the interface, with the class "box,"
// represents the live preview of the box with the selected properties.
// Generated CSS Properties:
// <br />
// <br />

// Below the controls, there is a section with the title "Box Properties." As
// you adjust the settings, the generated CSS properties for the box shadow,
// border, width, and height will be displayed here. Copy Properties:
// <br />
// <br />

// Click the "Copy Properties" button to copy the generated CSS properties to
// your clipboard. You can then paste these properties into your own CSS to
// apply the same styling to other elements. To use this code, you can simply
// copy and paste it into an HTML file and open it in a web browser. You can
// then interact with the controls to customize the box's appearance and use
// the generated CSS properties in your own projects.
// <br />
// <br />

// Note: This code appears to rely on JavaScript to update the live preview
// and generate the CSS properties, so make sure any necessary JavaScript
// code is included in your project. If you have any specific questions or
// need further assistance with this code, please feel free to ask.
// `,
//     journey: `My journey as a student has been a rollercoaster of growth, discovery, and hard work. Like many, I started my educational journey with a sense of curiosity and excitement. The world of learning was an uncharted territory, and I was eager to explore it.`,
//     farhan: `Hello, I am Farhan. I am a diligent and enthusiastic DIT (Diploma in Information Technology) student with a deep passion for technology. My desire is to continuously learn and grow in this ever-evolving field. I approach my studies with unwavering dedication and an insatiable thirst for knowledge, always excited to delve into new concepts and emerging technologies.`,
//     button: "Translate to Urdu",
// };

// const urduText = {
//     about: `Xico میں ہم ویب سائٹس کی تخلیق کرنے میں تخصص رکھتے ہیں جو باکس اسٹائلنگ پر دھیان دیتی ہیں۔ حد تعریف کی باری کو تعریف کرنے سے اضافہ کرنے والے ایسے بارڈرز کو تعریف کرکے جو شوکت اضافہ کرتے ہیں ، ہمارے ماہر ڈیزائنرز یقینی بناتے ہیں کہ ہر باکس کو دقت سے تیار کیا گیا ہے۔ ہم آپ کی تشہیر کے لئے پس منظر کے رنگ اور مواد کے رنگ کی توازندار تصویری کہانی کا مشتاقانہ انتخاب کرتے ہیں۔ Xico کے ساتھ آپ اپنی ویب سائٹ کی ہر تفصیل میں ایک کمیٹمنٹ کا تجربہ کریں گے جو بازید کنندگان کو متاثر کرتا ہے اور آپ کے پیغام کو کاری طور پر پیش کرتا ہے۔`,
//     instructions: `فراہم کردہ ایچ ٹی ایم ایل کوڈ ایک "باکس شیڈو جنریٹر" انٹرفیس معلوم ہوتا ہے جو صارفین کو ایک باکس کی خصوصیات کو اپنی مرضی کے مطابق کرنے کی اجازت دیتا ہے (جیسے کہ اس کا باکس شیڈو، بارڈر، سائز، اور ٹیکسٹ پراپرٹیز) اور ان کے انتخاب کی بنیاد پر تیار کردہ CSS خصوصیات کو دیکھنے کی اجازت دیتا ہے۔ اس میں ان CSS خصوصیات کو کاپی کرنے کے لیے ایک بٹن بھی شامل ہے۔ اس کوڈ کو استعمال کرنے کے بارے میں کچھ ہدایات یہ ہیں:
// <br />
// باکس شیڈو کنٹرولز:
// <br />


// باکس شیڈو کو حسب ضرورت بنانے کے لیے "افقی سائے،" "عمودی سائے،" "دھندلا،" "اسپریڈ" کے نیچے سلائیڈرز اور "رنگ" کے نیچے رنگ چننے والا استعمال کریں۔
// <br />

// سرحد کی چوڑائی، انداز اور رنگ سیٹ کرنے کے لیے "بارڈر پراپرٹیز" کے تحت خصوصیات کو ایڈجسٹ کریں۔ ان پٹ فیلڈز کا استعمال کرتے ہوئے پکسلز میں چوڑائی اور اونچائی بتا کر "باکس سائز" میں ترمیم کریں۔ ان پٹ فیلڈ کا استعمال کرتے ہوئے "بارڈر رداس" کی وضاحت کریں۔ ٹیکسٹ کلر، ٹیکسٹ بیک گراؤنڈ کلر، ٹیکسٹ انڈینٹ، اور ٹیکسٹ ڈیکوریشن جیسی "ٹیکسٹ پراپرٹیز" کو حسب ضرورت بنائیں۔ ان پٹ فیلڈ کا استعمال کرتے ہوئے "باکس پیڈنگ" کو سیٹ کریں۔ لائیو پیش نظارہ:

// <br />
// انٹرفیس کے دائیں جانب باکس، کلاس "باکس" کے ساتھ، منتخب خصوصیات کے ساتھ باکس کے لائیو پیش نظارہ کی نمائندگی کرتا ہے۔ تیار کردہ CSS پراپرٹیز:
// <br />

// کنٹرولز کے نیچے، "باکس پراپرٹیز" کے عنوان کے ساتھ ایک سیکشن ہے۔ جیسا کہ آپ سیٹنگز کو ایڈجسٹ کریں گے، باکس شیڈو، بارڈر، چوڑائی اور اونچائی کے لیے پیدا کردہ CSS پراپرٹیز یہاں ظاہر ہوں گی۔ کاپی پراپرٹیز:
// <br />

// اپنے کلپ بورڈ میں تیار کردہ CSS خصوصیات کو کاپی کرنے کے لیے "کاپی پراپرٹیز" بٹن پر کلک کریں۔ اس کے بعد آپ ان خصوصیات کو اپنے سی ایس ایس میں پیسٹ کر سکتے ہیں تاکہ دوسرے عناصر پر وہی اسٹائل لاگو کر سکیں۔ اس کوڈ کو استعمال کرنے کے لیے، آپ اسے HTML فائل میں کاپی اور پیسٹ کر سکتے ہیں اور اسے ویب براؤزر میں کھول سکتے ہیں۔ اس کے بعد آپ باکس کی ظاہری شکل کو اپنی مرضی کے مطابق بنانے کے لیے کنٹرولز کے ساتھ تعامل کر سکتے ہیں اور اپنے پراجیکٹس میں تیار کردہ CSS خصوصیات کو استعمال کر سکتے ہیں۔
// <br />

// نوٹ: ایسا لگتا ہے کہ یہ کوڈ لائیو پیش نظارہ کو اپ ڈیٹ کرنے اور سی ایس ایس کی خصوصیات بنانے کے لیے JavaScript پر انحصار کرتا ہے، اس لیے یقینی بنائیں کہ آپ کے پروجیکٹ میں جاوا اسکرپٹ کا کوئی ضروری کوڈ شامل ہے۔ اگر آپ کے کوئی مخصوص سوالات ہیں یا اس کوڈ کے بارے میں مزید مدد کی ضرورت ہے، تو براہ کرم بلا جھجھک پوچھیں۔`,
//     journey: `میرا طلباء کے طور پر سفر ایک ترقی، دریافت، اور محنت کا سفر رہا ہے۔ بہت سارے لوگوں کی طرح، میرا تعلیمی سفر دلچسپی اور جذبے کے ساتھ شروع ہوا۔ تعلیم کی دنیا ایک نامعلوم علاقہ تھا، اور میں اسے تلاش کرنے کے لئے بے صبری سے مشغول تھا۔`,
//     farhan: `ہیلو، میں فرحان ہوں۔ میں ایک محنتی اور جذبے سے بھرپور DIT (ڈپلومہِ انفارمیشن ٹیکنالوجی) کا طالب علم ہوں جس میں ٹیکنالوجی کی طرف گہری محبت ہے۔ میری خواہش ہے کہ میں اس حد تک تعلیم حاصل کرنے اور اس مسلسل ترقی اور نئے تصورات اور نئے ٹیکنالوجی کا سراغ لگانے کے لئے ہمیشہ تیار رہوں۔`,
//     button: "Translate to English",
// };

// function toggleTranslation() {
//     const aboutText = document.getElementById("about-text");
//     const instructionsText = document.getElementById("instructions");
//     const journeyText = document.getElementById("journey-text");
//     const farhanText = document.getElementById("farhan-text");
//     const translationButton = document.getElementById("translation-button");

//     if (isEnglish) {
//         // Switch to Urdu
//         if (aboutText) {
//             aboutText.textContent = urduText.about;
//         } if (instructionsText) {

//             instructionsText.innerHTML = urduText.instructions;
//         } if (journeyText) {
//             journeyText.innerHTML = urduText.journey;

//         } if (farhanText) {

//             farhanText.innerHTML = urduText.farhan;
//         } if (translationButton) {

//             translationButton.innerHTML = urduText.button;
//         }
//     } else {
//         // Switch to English
//         if (aboutText) {
//             aboutText.textContent = englishText.about;
//         } if (instructionsText) {

//             instructionsText.innerHTML = englishText.instructions;
//         } if (journeyText) {
//             journeyText.innerHTML = englishText.journey;

//         } if (farhanText) {

//             farhanText.innerHTML = englishText.farhan;
//         } if (translationButton) {

//             translationButton.innerHTML = englishText.button;
//         }
//     }

//     isEnglish = !isEnglish;
// }

