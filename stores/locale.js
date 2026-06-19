import { defineStore } from "pinia";
import { useGlobalStore } from "./global";

export const useLocaleStore = defineStore({
  id: "locale",
  state: () => ({
    currentLocale: "en",
    translations: {
      en: {
        // Navigation links
        Catalog: "Catalog",
        About: "About",
        Reviews: "Reviews",
        FAQ: "FAQ",
        "Cancellations & Refunds": "Cancellations & Refunds",
        Contacts: "Contacts",

        // Cabinet & auth links
        Favorites: "Favorites",
        Cart: "Cart",
        Profile: "Profile",
        Settings: "Settings",
        Orders: "Orders",
        Login: "Login",
        "Log out": "Log out",

        // Common UI
        "Nothing found": "Nothing found",
        search_placeholder: "Skins search",
        "No skins...": "No skins...",
        "Added to cart": "Added to cart",
        "Add to cart": "Add to cart",

        // Contacts Page
        Legal: "Legal",
        Address: "Address",
        "Registration Number": "Registration Number",
        "Reg. number": "Reg. number",
        "Reg number": "Reg number",
        Email: "Email",
        Phones: "Phones",
        "Write to us": "Write to us",
        Phone: "Phone",
        "Email*": "Email*",
        "Message*": "Message*",
        Send: "Send",
        "By use form, you agree to the": "By using the form, you agree to the",
        "User Agreement and Privacy Policy": "User Agreement and Privacy Policy",
        SUCCESS: "SUCCESS",
        "Your message successfully sent": "Your message successfully sent",

        // Checkout & Payouts
        "Confirm order": "Confirm order",
        "items in cart": "items in cart",
        "Payment method": "Payment method",
        "Debit card": "Debit card",
        "Account balance": "Account balance",
        Total: "Total",
        Balance: "Balance",
        "Low balance, You need": "Low balance, You need",
        "Refill the balance": "Refill the balance",
        "Set your Steam trade link in": "Set your Steam trade link in",
        "Profile settings": "Profile settings",
        "I have read and understood my": "I have read and understood my",
        "right of cancellation": "right of cancellation",
        "I agree to the beginning of the contract execution before the end of the cancellation period. I am aware that I thereby lose my right of cancellation.":
          "I agree to the beginning of the contract execution before the end of the cancellation period. I am aware that I thereby lose my right of cancellation.",
        "Proceed to checkout": "Proceed to checkout",
        "Terms of Service": "Terms of Service",
        "Privacy Policy": "Privacy Policy",
        "By clicking Proceed to Checkout, you agree to our":
          "By clicking Proceed to Checkout, you agree to our",
        "and that you have read our": "and that you have read our",
        "Pay out request": "Pay out request",
        "Coming soon...": "Coming soon...",
        "Minimum: 4€. Your balance: {balance}": "Minimum: {minimum}. Your balance: {balance}",
        Amount: "Amount",
        "Your name": "Your name",
        "Your surname": "Your surname",
        "Your card number": "Your card number",
        All: "All",
        Confirm: "Confirm",
        "Your request has been successfully sent.": "Your request has been successfully sent.",

        // Payout history page
        "Name:": "Name:",
        "Surname:": "Surname:",
        "Card:": "Card:",
        processing: "processing",
        failed: "failed",
        success: "success",
        "You have no payouts": "You have no payouts",

        // User profile card
        "Upload cover": "Upload cover",
        Remove: "Remove",
        "Choose avatar": "Choose avatar",
        "Registered on": "Registered on",
        Refill: "Refill",
        "Pay out": "Pay out",
        "Balance:": "Balance:",

        // Skin item details
        "Wear Range": "Wear Range",
        Summary: "Summary",
        Float: "Float",
        "Paint seed": "Paint seed",
        "Paint index": "Paint index",
        Exterior: "Exterior",
        Type: "Type",
        Weapon: "Weapon",
        Quality: "Quality",
        Collection: "Collection",

        Popular: "Popular",
        "Show more": "Show more",
        Support: "Support",
        "Available Items": "Available Items",
        "Completed Trades": "Completed Trades",
        "Secure payments": "Secure payments",
        "Additional information": "Additional information",
        "Leave a review": "Leave a review",
        "Show all": "Show all",
        "No reviews yet": "No reviews yet",
        "Various payment methods": "Various payment methods",
        "Check others": "Check others",
        "Extensive Collection of Unique Skins": "Extensive Collection of Unique Skins",
        "Our collection is constantly updated with the latest trends and unique designs, making it easy for you to customize your devices.":
          "Our collection is constantly updated with the latest trends and unique designs, making it easy for you to customize your devices.",
        "Easy-to-Navigate Online Shop": "Easy-to-Navigate Online Shop",
        "Our user-friendly interface makes browsing and selecting skins a breeze.":
          "Our user-friendly interface makes browsing and selecting skins a breeze.",
        "Customer Satisfaction Guarantee": "Customer Satisfaction Guarantee",
        "We are committed to providing excellent customer service, including prompt responses to inquiries and a fair resolution process for any issues.":
          "We are committed to providing excellent customer service, including prompt responses to inquiries and a fair resolution process for any issues.",
        "Secure and Easy Checkout Process": "Secure and Easy Checkout Process",
        "We provide a secure and straightforward checkout process to ensure that your personal and payment information is protected.":
          "We provide a secure and straightforward checkout process to ensure that your personal and payment information is protected.",
        "What is Skins Monster?": "What is Skins Monster?",
        "Skins Monster is your ultimate destination for premium and unique skins. We offer a wide selection of high-quality skins for various devices and platforms, helping you personalize and express your individuality and style.":
          "Skins Monster is your ultimate destination for premium and unique skins. We offer a wide selection of high-quality skins for various devices and platforms, helping you personalize and express your individuality and style.",
        "How do I place an order?": "How do I place an order?",
        "To place an order, simply browse our collection of skins, select the ones you like, and add them to your cart. Once you’re ready, proceed to checkout and follow the instructions to complete your purchase.":
          "To place an order, simply browse our collection of skins, select the ones you like, and add them to your cart. Once you’re ready, proceed to checkout and follow the instructions to complete your purchase.",
        "How will I receive my purchased skins?": "How will I receive my purchased skins?",
        "All our products are digital downloads. Once your purchase is confirmed, you will access your skins.":
          "All our products are digital downloads. Once your purchase is confirmed, you will access your skins.",
        "Can I return a digital product?": "Can I return a digital product?",
        "Due to the digital nature of our products, we generally do not accept returns. However, we are committed to ensuring customer satisfaction and will consider return requests on a case-by-case basis. Please contact us at support@skins.monster with your order number and reason for return.":
          "Due to the digital nature of our products, we generally do not accept returns. However, we are committed to ensuring customer satisfaction and will consider return requests on a case-by-case basis. Please contact us at support@skins.monster with your order number and reason for return.",
        "What if I made an accidental purchase?": "What if I made an accidental purchase?",
        "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases. Please ensure that you review your order carefully before completing the purchase.":
          "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases. Please ensure that you review your order carefully before completing the purchase.",
        "How do I contact customer support?": "How do I contact customer support?",
        "If you have any issues with your purchase or have questions about our products, please contact our customer support team at support@skins.monster We are here to help and will do our best to resolve any concerns you may have.":
          "If you have any issues with your purchase or have questions about our products, please contact our customer support team at support@skins.monster We are here to help and will do our best to resolve any concerns you may have.",
        "How do I keep my account information up-to-date?":
          "How do I keep my account information up-to-date?",
        "You can update your account information by logging into your account on our website and navigating to the account settings page. Here, you can update your personal details and ensure your information is current.":
          "You can update your account information by logging into your account on our website and navigating to the account settings page. Here, you can update your personal details and ensure your information is current.",
        "What should I do if I forget my password?": "What should I do if I forget my password?",
        'If you forget your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.':
          'If you forget your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.',
        "How do you protect my personal information?": "How do you protect my personal information?",
        "We take the security of your personal information seriously and implement various administrative, technical, and physical security measures to help protect your data. For more information, please read our Privacy Policy.":
          "We take the security of your personal information seriously and implement various administrative, technical, and physical security measures to help protect your data. For more information, please read our Privacy Policy.",
        "Do you have a social media presence?": "Do you have a social media presence?",
        "Yes, you can follow us on our social media channels to stay updated with the latest news, products, and offers. Links to our social media pages can be found on our website.":
          "Yes, you can follow us on our social media channels to stay updated with the latest news, products, and offers. Links to our social media pages can be found on our website.",

        ABOUT: "ABOUT",
        "Skins Monster – your ultimate destination for premium and\nunique skins. We are passionate about providing you with a wide selection of\nskins that help you express your individuality and style.":
          "Skins Monster – your ultimate destination for premium and\nunique skins. We are passionate about providing you with a wide selection of\nskins that help you express your individuality and style.",
        "Welcome to Skins Monster – your ultimate destination for\npremium and unique skins. We are passionate about providing you with a wide\nselection of skins that help you express your individuality and style.":
          "Welcome to Skins Monster – your ultimate destination for\npremium and unique skins. We are passionate about providing you with a wide\nselection of skins that help you express your individuality and style.",
        "Our Mission": "Our Mission",
        "At Skins Monster, our mission is to offer an extensive\ncollection of high-quality skins for various devices and platforms. We believe\nthat customization is key to personal expression, and our goal is to provide\nyou with the best products to make your devices stand out.":
          "At Skins Monster, our mission is to offer an extensive\ncollection of high-quality skins for various devices and platforms. We believe\nthat customization is key to personal expression, and our goal is to provide\nyou with the best products to make your devices stand out.",
        "At Skins Monster, we are driven by our love for creativity\nand innovation. Each skin is designed with meticulous attention to detail,\nensuring that you receive a product that exceeds your expectations.":
          "At Skins Monster, we are driven by our love for creativity\nand innovation. Each skin is designed with meticulous attention to detail,\nensuring that you receive a product that exceeds your expectations.",
        "We are committed to sustainability and environmentally\nfriendly practices. Our skins are made using eco-friendly materials and\nprocesses, minimizing our impact on the environment. By choosing Skins Monster,\nyou are not only enhancing your devices but also supporting a brand that values\nsustainability and responsible production.":
          "We are committed to sustainability and environmentally\nfriendly practices. Our skins are made using eco-friendly materials and\nprocesses, minimizing our impact on the environment. By choosing Skins Monster,\nyou are not only enhancing your devices but also supporting a brand that values\nsustainability and responsible production.",
        "Our Story": "Our Story",
        "With a keen eye for design and a commitment to quality, we\nset out to create a platform where anyone can find the perfect skin for their\ndevice. Our journey began with a simple idea: to provide unique and stylish\nskins that reflect the diverse tastes and personalities of our customers.":
          "With a keen eye for design and a commitment to quality, we\nset out to create a platform where anyone can find the perfect skin for their\ndevice. Our journey began with a simple idea: to provide unique and stylish\nskins that reflect the diverse tastes and personalities of our customers.",
        "From the very beginning, we focused on innovation and\ncreativity, striving to offer skins that were not only aesthetically pleasing\nbut also functional and durable. Our team of designers continuously works on\ndeveloping new designs and improving our products to ensure that they meet the\nhighest standards. We believe that every device deserves a touch of\npersonalization, and we are dedicated to making that possible for everyone.":
          "From the very beginning, we focused on innovation and\ncreativity, striving to offer skins that were not only aesthetically pleasing\nbut also functional and durable. Our team of designers continuously works on\ndeveloping new designs and improving our products to ensure that they meet the\nhighest standards. We believe that every device deserves a touch of\npersonalization, and we are dedicated to making that possible for everyone.",
        "As we grew, we expanded our product range to include skins\nfor a variety of devices, ensuring that everyone could find something that\nsuited their needs and preferences. Our commitment to quality has never\nwavered, and we pride ourselves on delivering products that our customers can\nrely on. At Skins Monster, we understand that your devices are an extension of\nyour personality, and we are here to help you showcase that in the best\npossible way.":
          "As we grew, we expanded our product range to include skins\nfor a variety of devices, ensuring that everyone could find something that\nsuited their needs and preferences. Our commitment to quality has never\nwavered, and we pride ourselves on delivering products that our customers can\nrely on. At Skins Monster, we understand that your devices are an extension of\nyour personality, and we are here to help you showcase that in the best\npossible way.",
        "We invite you to explore our collection and find the skin\nthat speaks to you. Follow us on social media for the latest updates,\npromotions, and customer showcases. ":
          "We invite you to explore our collection and find the skin\nthat speaks to you. Follow us on social media for the latest updates,\npromotions, and customer showcases. ",
        "We are dedicated to providing you with the best possible\nsupport and ensuring your complete satisfaction.":
          "We are dedicated to providing you with the best possible\nsupport and ensuring your complete satisfaction.",
        "Thank\nyou for choosing Skins Monster. We look forward to helping you express your\nstyle with our unique skins.":
          "Thank\nyou for choosing Skins Monster. We look forward to helping you express your\nstyle with our unique skins.",

        "Last Updated: July 18, 2024": "Last Updated: July 18, 2024",
        Introduction: "Introduction",
        "At Skins Monster, we strive to ensure your complete satisfaction with our products and services. Our premium skins are carefully curated to provide you with unique and stylish options for personalizing your devices. We understand that customization is a deeply personal experience, and we want every customer to feel confident and excited about their purchase.":
          "At Skins Monster, we strive to ensure your complete satisfaction with our products and services. Our premium skins are carefully curated to provide you with unique and stylish options for personalizing your devices. We understand that customization is a deeply personal experience, and we want every customer to feel confident and excited about their purchase.",
        "Our team is dedicated to providing top-quality products that meet your highest expectations. Each skin is designed with attention to detail, ensuring that it not only looks great but also performs well, protecting your device and reflecting your personal style.":
          "Our team is dedicated to providing top-quality products that meet your highest expectations. Each skin is designed with attention to detail, ensuring that it not only looks great but also performs well, protecting your device and reflecting your personal style.",
        "We take pride in our commitment to excellence and customer satisfaction. Our customer support team is always ready to assist you with any questions or concerns you may have about our products. We believe in building lasting relationships with our customers, and your feedback is invaluable to us in improving our offerings.":
          "We take pride in our commitment to excellence and customer satisfaction. Our customer support team is always ready to assist you with any questions or concerns you may have about our products. We believe in building lasting relationships with our customers, and your feedback is invaluable to us in improving our offerings.",
        "If you are not entirely satisfied with your purchase, we are here to help. We believe in a hassle-free return and refund process, ensuring that you have a smooth and pleasant experience from start to finish. Your satisfaction is our priority, and we are committed to resolving any issues you may encounter with our products.":
          "If you are not entirely satisfied with your purchase, we are here to help. We believe in a hassle-free return and refund process, ensuring that you have a smooth and pleasant experience from start to finish. Your satisfaction is our priority, and we are committed to resolving any issues you may encounter with our products.",
        "1. Cancellations": "1. Cancellations",
        "Eligibility for Cancellations: Due to the digital nature of our products, we generally do not accept cancellations. However, we are committed to ensuring customer satisfaction and will consider cancellation requests on a case-by-case basis. If you encounter any issues with your purchase or if the product does not meet your expectations, please reach out to us, and we will do our best to resolve the matter promptly.":
          "Eligibility for Cancellations: Due to the digital nature of our products, we generally do not accept cancellations. However, we are committed to ensuring customer satisfaction and will consider cancellation requests on a case-by-case basis. If you encounter any issues with your purchase or if the product does not meet your expectations, please reach out to us, and we will do our best to resolve the matter promptly.",
        'Process: To initiate a cancellation, please contact us at <a href="mailto:support@skins.monster">support@skins.monster</a> with your order number and a detailed explanation of the reason for your cancellation request. Our customer support team will review your request and provide you with further instructions. We aim to address all inquiries swiftly and fairly, ensuring that every customer feels valued and heard.':
          'Process: To initiate a cancellation, please contact us at <a href="mailto:support@skins.monster">support@skins.monster</a> with your order number and a detailed explanation of the reason for your cancellation request. Our customer support team will review your request and provide you with further instructions. We aim to address all inquiries swiftly and fairly, ensuring that every customer feels valued and heard.',
        "If your cancellation request is approved, we will guide you through the necessary steps to complete the process. Please note that each request is handled individually, and we strive to offer resolutions that best suit the specific situation. Your satisfaction is our priority, and we are dedicated to making sure you are happy with your Skins Monster experience.":
          "If your cancellation request is approved, we will guide you through the necessary steps to complete the process. Please note that each request is handled individually, and we strive to offer resolutions that best suit the specific situation. Your satisfaction is our priority, and we are dedicated to making sure you are happy with your Skins Monster experience.",
        "2. Refunds": "2. Refunds",
        "Processing Refunds:": "Processing Refunds:",
        "Once we receive your return request, we will inspect it and notify you of the approval or rejection of your refund. If your request is approved, we will process the refund to your original method of payment within 7-10 business days. You will receive an email confirmation once the refund has been processed.":
          "Once we receive your return request, we will inspect it and notify you of the approval or rejection of your refund. If your request is approved, we will process the refund to your original method of payment within 7-10 business days. You will receive an email confirmation once the refund has been processed.",
        "Approved Refunds:": "Approved Refunds:",
        "If your return request is approved, we will initiate a refund to your original method of payment. The credit will be applied to your account within a certain number of days, depending on your card issuer's policies.":
          "If your return request is approved, we will initiate a refund to your original method of payment. The credit will be applied to your account within a certain number of days, depending on your card issuer's policies.",
        "3. Exchanges": "3. Exchanges",
        "We do not offer exchanges for digital products. If you have any issues with your purchase, please contact us at support@skins.monster for assistance.":
          "We do not offer exchanges for digital products. If you have any issues with your purchase, please contact us at support@skins.monster for assistance.",
        "4. Non-Refundable Circumstances": "4. Non-Refundable Circumstances",
        "Change of Mind:": "Change of Mind:",
        "We generally do not offer refunds for dissatisfaction due to personal preference or if you change your mind after the purchase.":
          "We generally do not offer refunds for dissatisfaction due to personal preference or if you change your mind after the purchase.",
        "Accidental Purchases:": "Accidental Purchases:",
        "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases.":
          "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases.",
        "5. General Conditions": "5. General Conditions",
        "Skins Monster reserves the right to modify this Returns and Refunds Policy at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.":
          "Skins Monster reserves the right to modify this Returns and Refunds Policy at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.",
        "6. Contact Us": "6. Contact Us",
        "If you have any questions about our Returns &amp; Refunds Policy, please contact us at:":
          "If you have any questions about our Returns &amp; Refunds Policy, please contact us at:",
        "Email: support@skins.monster&nbsp;": "Email: support@skins.monster&nbsp;",
        "At Skins Monster, we are dedicated to maintaining the privacy and security of your personal information. By transparently communicating updates to our Privacy Policy, we aim to build and sustain your trust. We are committed to protecting your data and providing you with the resources you need to understand and exercise your privacy rights.":
          "At Skins Monster, we are dedicated to maintaining the privacy and security of your personal information. By transparently communicating updates to our Privacy Policy, we aim to build and sustain your trust. We are committed to protecting your data and providing you with the resources you need to understand and exercise your privacy rights.",
        "Our team is always here to support you, ensuring a seamless and satisfying experience with our products. We welcome your feedback and are continually working to enhance our services and offerings. Thank you for your continued trust and engagement with Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins.":
          "Our team is always here to support you, ensuring a seamless and satisfying experience with our products. We welcome your feedback and are continually working to enhance our services and offerings. Thank you for your continued trust and engagement with Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins.",
        Company: "Company",
        Terms: "Terms",
        Links: "Links",
        "Additional Links": "Additional Links",
        Trade: "Trade",
        "Trade CS2 Skins": "Trade CS2 Skins",
        "Trade Dota2 Skins": "Trade Dota2 Skins",
        "CS2 Item Sets": "CS2 Item Sets",
        "The Italy Collection": "The Italy Collection",
        "Broken Fang Agents": "Broken Fang Agents",
        "Dota2 Heros": "Dota2 Heros",
        "Templar Assassin": "Templar Assassin",
        "Legion Commander": "Legion Commander",
        "Dota2 Item Types": "Dota2 Item Types",
        Bundles: "Bundles",
        Couriers: "Couriers",
        "CS2 weapon": "CS2 weapon",
        "AK-47": "AK-47",
        G3SG1: "G3SG1",
        Nova: "Nova",
        M249: "M249",
        "Navaja Knife": "Navaja Knife",
        "The Spectrum Collection": "The Spectrum Collection",
        "The Fracture Collection": "The Fracture Collection",
        "The Gamma 2 Collection": "The Gamma 2 Collection",
        "The Alpha Collection": "The Alpha Collection",
        "The Inferno Collection": "The Inferno Collection",
        Invoker: "Invoker",
        Juggernaut: "Juggernaut",
        Pangolier: "Pangolier",
        "Sand King": "Sand King",
        "Phantom Assassin": "Phantom Assassin",
        "Dire Creeps": "Dire Creeps",
        "Radiant Creeps": "Radiant Creeps",
        "Radiant Towers": "Radiant Towers",
        Wards: "Wards",
        Taunts: "Taunts",

        "Privacy policy": "Privacy policy",
        "Terms of Service": "Terms of Service",
        "<b>Last Updated: July 18, 2024</b>": "<b>Last Updated: July 18, 2024</b>",
        "<b>Introduction</b>": "<b>Introduction</b>",
        'Welcome to Skins\nMonster! We are thrilled to have you as part of our community. At Skins\nMonster, we take your privacy seriously and are committed to safeguarding your\npersonal information. This Privacy Policy outlines how we collect, use,\ndisclose, and protect your personal data when you visit our website,<a href="http://www.skins.monster"> </a>or engage with us through other related\nways, including sales, marketing, and events.':
          'Welcome to Skins\nMonster! We are thrilled to have you as part of our community. At Skins\nMonster, we take your privacy seriously and are committed to safeguarding your\npersonal information. This Privacy Policy outlines how we collect, use,\ndisclose, and protect your personal data when you visit our website,<a href="http://www.skins.monster"> </a>or engage with us through other related\nways, including sales, marketing, and events.',
        "Our mission at Skins\nMonster is to offer an extensive collection of high-quality skins for various\ndevices and platforms. We believe that customization is key to personal\nexpression, and our goal is to provide you with the best products to make your\ndevices stand out. Our team consists of enthusiasts who are dedicated to\nrevolutionizing the way people personalize their devices. With a keen eye for\ndesign and a commitment to quality, we set out to create a platform where\nanyone can find the perfect skin for their device.":
          "Our mission at Skins\nMonster is to offer an extensive collection of high-quality skins for various\ndevices and platforms. We believe that customization is key to personal\nexpression, and our goal is to provide you with the best products to make your\ndevices stand out. Our team consists of enthusiasts who are dedicated to\nrevolutionizing the way people personalize their devices. With a keen eye for\ndesign and a commitment to quality, we set out to create a platform where\nanyone can find the perfect skin for their device.",
        "We understand the\nimportance of privacy and data security in the digital age. As changes to the\nlaw or our corporate processes may require an adaptation of this privacy\nstatement, we ask you to read this privacy policy regularly. The privacy policy\ncan be accessed any time under “Privacy Policy”, saved, and printed out.":
          "We understand the\nimportance of privacy and data security in the digital age. As changes to the\nlaw or our corporate processes may require an adaptation of this privacy\nstatement, we ask you to read this privacy policy regularly. The privacy policy\ncan be accessed any time under “Privacy Policy”, saved, and printed out.",
        "1.     Principles of Processing Personal Data": "1.     Principles of Processing Personal Data",
        "Personal data includes all information relating to an\nidentified or identifiable natural person. This includes information such as\nyour name, email address, IP address, or user behavior. Information that cannot\n(or only with disproportionate effort) be referred to your person, e.g., by\nanonymizing the information, is not personal data. The processing of personal\ndata (e.g., the collection, retrieval, use, storage, or transmission) always\nrequires a legal basis or your consent.":
          "Personal data includes all information relating to an\nidentified or identifiable natural person. This includes information such as\nyour name, email address, IP address, or user behavior. Information that cannot\n(or only with disproportionate effort) be referred to your person, e.g., by\nanonymizing the information, is not personal data. The processing of personal\ndata (e.g., the collection, retrieval, use, storage, or transmission) always\nrequires a legal basis or your consent.",
        "Processed personal data will be deleted as soon as the\npurpose of the processing has been fulfilled and no legally prescribed\nretention obligations are to be observed.":
          "Processed personal data will be deleted as soon as the\npurpose of the processing has been fulfilled and no legally prescribed\nretention obligations are to be observed.",
        "In case we process your personal data for the provision of\ncertain offers, please find below information about the specific processes, the\nscope and purpose of data processing, the legal basis for processing, and the\nrespective storage period.":
          "In case we process your personal data for the provision of\ncertain offers, please find below information about the specific processes, the\nscope and purpose of data processing, the legal basis for processing, and the\nrespective storage period.",
        "2.    Data Processing": "2.    Data Processing",
        Website: "Website",
        "<b>Scope and Purpose of the\nProcessing</b>": "<b>Scope and Purpose of the\nProcessing</b>",
        "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services.":
          "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services.",
        "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services:":
          "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services:",
        "●      IP address of the requesting\ncomputer": "●      IP address of the requesting\ncomputer",
        "●      Date and time of access": "●      Date and time of access",
        "●      Name and URL of the retrieved\nfile": "●      Name and URL of the retrieved\nfile",
        "●      The used browser and, if\napplicable, the operating system of your computer as well as the name of your\naccess provider":
          "●      The used browser and, if\napplicable, the operating system of your computer as well as the name of your\naccess provider",
        "●      Other similar data and\ninformation which serve to avert danger in the event of attacks on our IT\nsystems":
          "●      Other similar data and\ninformation which serve to avert danger in the event of attacks on our IT\nsystems",
        "<b>Storage Period</b>": "<b>Storage Period</b>",
        "The data subject’s personal data are deleted or blocked as\nsoon as the purpose of the storage is fulfilled. The collection of data for the\nprovision of the website and the storage of data in log files is absolutely\nnecessary for the operation of the website. Consequently, there is no\npossibility of objection for the user. Further storage may take place in\nindividual cases if this is required by law.":
          "The data subject’s personal data are deleted or blocked as\nsoon as the purpose of the storage is fulfilled. The collection of data for the\nprovision of the website and the storage of data in log files is absolutely\nnecessary for the operation of the website. Consequently, there is no\npossibility of objection for the user. Further storage may take place in\nindividual cases if this is required by law.",
        "3.    \nRegistration / Customer Account": "3.    \nRegistration / Customer Account",
        "You have the possibility to register on our website by\nentering your personal data. The processed data is used to create a customized\nuser account that enables you to use certain contents and services on our\nwebsite.":
          "You have the possibility to register on our website by\nentering your personal data. The processed data is used to create a customized\nuser account that enables you to use certain contents and services on our\nwebsite.",
        "We make use of your email address so that we can send you new\naccess data in case you should forget these.":
          "We make use of your email address so that we can send you new\naccess data in case you should forget these.",
        "We process the following personal data for the\nregistration/customer account setup:":
          "We process the following personal data for the\nregistration/customer account setup:",
        "●      Name": "●      Name",
        "●      Email address": "●      Email address",
        "●      IP address": "●      IP address",
        "As soon as the registration on our website is canceled or\nmodified, the data processed during the registration process will be deleted.\nFurther storage can be carried out in individual cases if this is required by\nlaw.":
          "As soon as the registration on our website is canceled or\nmodified, the data processed during the registration process will be deleted.\nFurther storage can be carried out in individual cases if this is required by\nlaw.",
        "<b>Cancellation</b>": "<b>Cancellation</b>",
        "You have the possibility to cancel the registration and to\nchange your personal data any time by proceeding as follows: Please use the\ncontact form to send us the data you used to register on our website (name and\nemail address) so that we can clearly identify your access authorization.":
          "You have the possibility to cancel the registration and to\nchange your personal data any time by proceeding as follows: Please use the\ncontact form to send us the data you used to register on our website (name and\nemail address) so that we can clearly identify your access authorization.",
        "4.    \nPurchases and Payment": "4.    \nPurchases and Payment",
        "On our website, users can purchase digital skins. For the\ncompletion of a purchase contract, the following data, which is necessary for\nthe transaction processing, is processed by Skins Monster:":
          "On our website, users can purchase digital skins. For the\ncompletion of a purchase contract, the following data, which is necessary for\nthe transaction processing, is processed by Skins Monster:",
        "●      Address": "●      Address",
        "●      Date of Birth": "●      Date of Birth",
        "●      Payment information": "●      Payment information",
        "Your data will be transferred to payment processing partners\nas far as this is necessary for the transaction.":
          "Your data will be transferred to payment processing partners\nas far as this is necessary for the transaction.",
        "5.     Data Security and Security Measures": "5.     Data Security and Security Measures",
        "We are committed to protecting your privacy and treating your\npersonal information confidentially. In order to avoid any manipulation, loss,\nor misuse of your data stored by us, we take extensive technical and\norganizational security measures that are regularly reviewed and adapted to\ntechnological progress. This includes, among other things, the use of\nrecognized encryption methods (SSL or TLS). However, we would like to point out\nthat due to the structure of the internet, it is possible.":
          "We are committed to protecting your privacy and treating your\npersonal information confidentially. In order to avoid any manipulation, loss,\nor misuse of your data stored by us, we take extensive technical and\norganizational security measures that are regularly reviewed and adapted to\ntechnological progress. This includes, among other things, the use of\nrecognized encryption methods (SSL or TLS). However, we would like to point out\nthat due to the structure of the internet, it is possible.",
        "6.     Data Retention": "6.     Data Retention",
        "We retain your personal data only for as long as necessary to\nfulfill the purposes for which it was collected, including for the purposes of\nsatisfying any legal, accounting, or reporting requirements.":
          "We retain your personal data only for as long as necessary to\nfulfill the purposes for which it was collected, including for the purposes of\nsatisfying any legal, accounting, or reporting requirements.",
        "●      <b>Account Information:</b> We retain your account information\nas long as your account is active and a reasonable period thereafter in case\nyou decide to re-activate the Services. We also retain some of your information\nas necessary to comply with our legal obligations, resolve disputes, and\nenforce our agreements.":
          "●      <b>Account Information:</b> We retain your account information\nas long as your account is active and a reasonable period thereafter in case\nyou decide to re-activate the Services. We also retain some of your information\nas necessary to comply with our legal obligations, resolve disputes, and\nenforce our agreements.",
        "●      <b>Contact Information:</b> If you have contacted us with a\nquery or support request, we will retain your information as long as necessary\nto resolve your query and a reasonable period thereafter in case you have\nfollow-up questions.":
          "●      <b>Contact Information:</b> If you have contacted us with a\nquery or support request, we will retain your information as long as necessary\nto resolve your query and a reasonable period thereafter in case you have\nfollow-up questions.",
        "7.     Data Security and Security Measures": "7.     Data Security and Security Measures",
        "We are committed to protecting your privacy and treating your personal information confidentially. In order to avoid any manipulation, loss, or misuse of your data stored by us, we take extensive technical and organizational security measures that are regularly reviewed and adapted to technological progress. This includes, among other things, the use of recognized encryption methods (SSL or TLS). However, we would like to point out that due to the structure of the internet, it is possible that the rules of data protection and the above-mentioned security measures may not be observed by other persons or institutions for which we are not responsible.":
          "We are committed to protecting your privacy and treating your personal information confidentially. In order to avoid any manipulation, loss, or misuse of your data stored by us, we take extensive technical and organizational security measures that are regularly reviewed and adapted to technological progress. This includes, among other things, the use of recognized encryption methods (SSL or TLS). However, we would like to point out that due to the structure of the internet, it is possible that the rules of data protection and the above-mentioned security measures may not be observed by other persons or institutions for which we are not responsible.",
        "In particular, unencrypted data - e.g., if this is done by email - can be read by third parties. We have no technical influence on this. It is the responsibility of the user to protect the data provided by him against misuse by encryption or in any other way.":
          "In particular, unencrypted data - e.g., if this is done by email - can be read by third parties. We have no technical influence on this. It is the responsibility of the user to protect the data provided by him against misuse by encryption or in any other way.",
        "8.     Changes to This Privacy Policy": "8.     Changes to This Privacy Policy",
        'We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.':
          'We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.',
        "9.     Contact Us": "9.     Contact Us",
        "If you have any questions or comments about this Privacy Policy, you may email us at support@skins.monster or contact us at:":
          "If you have any questions or comments about this Privacy Policy, you may email us at support@skins.monster or contact us at:",
        "Thank you for choosing Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins. We are committed to protecting your personal information and maintaining transparency in our data handling practices. We look forward to providing you with the best customization experience possible.":
          "Thank you for choosing Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins. We are committed to protecting your personal information and maintaining transparency in our data handling practices. We look forward to providing you with the best customization experience possible.",
        "WELCOME\nTO SKINS MONSTER!": "WELCOME\nTO SKINS MONSTER!",
        'Thanks for using our products and services (“Services”).\nPlease read these Terms and Conditions ("Agreement" or “Terms”)\ncarefully before using Skins Monster’s website, products, and any related\nservices offered by Skins Monster.':
          'Thanks for using our products and services (“Services”).\nPlease read these Terms and Conditions ("Agreement" or “Terms”)\ncarefully before using Skins Monster’s website, products, and any related\nservices offered by Skins Monster.',
        'This is a legally binding agreement, and you should read it\ncarefully. By accessing, installing, using, or otherwise engaging with our\nServices, you (the "user" or "you") agree to be bound by\nthis Agreement, including those additional terms and conditions and policies\nreferenced herein and/or available by hyperlink. This Agreement applies to all\nusers of the Services, including without limitation users who are customers,\nmerchants, or contributors of content, information, and other materials or\nservices.':
          'This is a legally binding agreement, and you should read it\ncarefully. By accessing, installing, using, or otherwise engaging with our\nServices, you (the "user" or "you") agree to be bound by\nthis Agreement, including those additional terms and conditions and policies\nreferenced herein and/or available by hyperlink. This Agreement applies to all\nusers of the Services, including without limitation users who are customers,\nmerchants, or contributors of content, information, and other materials or\nservices.',
        "1.\nUSE OF SERVICES": "1.\nUSE OF SERVICES",
        "<b>Skins Monster Platform</b>": "<b>Skins Monster Platform</b>",
        "Skins Monster acts as a venue to allow users who comply with\nSkins Monster's policies to offer and buy digital skins. Skins Monster is not\ndirectly involved in the transaction between buyers and sellers. As a result,\nSkins Monster has no control over the quality, safety, morality, or legality of\nany aspect of the items listed, the truth or accuracy of the listings, the\nability of sellers to sell items, or the ability of buyers to pay for items.\nSkins Monster does not pre-screen users or the content or information provided\nby users. Skins Monster cannot ensure that a buyer or seller will actually\ncomplete a transaction.":
          "Skins Monster acts as a venue to allow users who comply with\nSkins Monster's policies to offer and buy digital skins. Skins Monster is not\ndirectly involved in the transaction between buyers and sellers. As a result,\nSkins Monster has no control over the quality, safety, morality, or legality of\nany aspect of the items listed, the truth or accuracy of the listings, the\nability of sellers to sell items, or the ability of buyers to pay for items.\nSkins Monster does not pre-screen users or the content or information provided\nby users. Skins Monster cannot ensure that a buyer or seller will actually\ncomplete a transaction.",
        "Consequently, Skins Monster does not transfer legal ownership\nof items from the seller to the buyer. Skins Monster cannot guarantee the true\nidentity, age, and nationality of a user. Skins Monster encourages you to\ncommunicate directly with potential transaction partners through the tools\navailable on the platform.":
          "Consequently, Skins Monster does not transfer legal ownership\nof items from the seller to the buyer. Skins Monster cannot guarantee the true\nidentity, age, and nationality of a user. Skins Monster encourages you to\ncommunicate directly with potential transaction partners through the tools\navailable on the platform.",
        "You agree that Skins Monster is a venue and as such, Skins\nMonster is not responsible or liable for any content, for example, data, text,\ninformation, usernames, graphics, images, photographs, profiles, audio, video,\nitems, and links posted by you, other users, or outside parties on Skins\nMonster. You use Skins Monster at your own risk.":
          "You agree that Skins Monster is a venue and as such, Skins\nMonster is not responsible or liable for any content, for example, data, text,\ninformation, usernames, graphics, images, photographs, profiles, audio, video,\nitems, and links posted by you, other users, or outside parties on Skins\nMonster. You use Skins Monster at your own risk.",
        "2.\nACCOUNT AND MEMBERSHIP ELIGIBILITY": "2.\nACCOUNT AND MEMBERSHIP ELIGIBILITY",
        "When you access or use the Services from Skins Monster, you\ncreate an account with us (“Account”). You are responsible for all use of the\nServices and activity related to your Account, including all transactions and\npayments associated with that Account. You agree to maintain accurate,\ncomplete, and up-to-date information in your Account. Please see the provisions\nin our Privacy Policy that describe how you can keep your personal information\nup-to-date.":
          "When you access or use the Services from Skins Monster, you\ncreate an account with us (“Account”). You are responsible for all use of the\nServices and activity related to your Account, including all transactions and\npayments associated with that Account. You agree to maintain accurate,\ncomplete, and up-to-date information in your Account. Please see the provisions\nin our Privacy Policy that describe how you can keep your personal information\nup-to-date.",
        "<b>AGE</b>": "<b>AGE</b>",
        "The Services are intended for, and may only be used by,\nindividuals who are 18 years and older who can form legally binding contracts\nunder applicable law. In all events and under all circumstances, the Services\nshall not be used by individuals who are under 13 years old.":
          "The Services are intended for, and may only be used by,\nindividuals who are 18 years and older who can form legally binding contracts\nunder applicable law. In all events and under all circumstances, the Services\nshall not be used by individuals who are under 13 years old.",
        "By using the Services, you represent and warrant that you\nmeet the above criteria, and that all registration information you submit is\naccurate and truthful. Skins Monster may verify the age of the account owner.\nAs a part of the verification process, Skins Monster may require the account\nowner to provide additional identification information.":
          "By using the Services, you represent and warrant that you\nmeet the above criteria, and that all registration information you submit is\naccurate and truthful. Skins Monster may verify the age of the account owner.\nAs a part of the verification process, Skins Monster may require the account\nowner to provide additional identification information.",
        "Skins Monster may, in its sole discretion, refuse to offer\naccess to or use of the Services to any person or entity, or change its\neligibility criteria at any time.":
          "Skins Monster may, in its sole discretion, refuse to offer\naccess to or use of the Services to any person or entity, or change its\neligibility criteria at any time.",
        "<b>COMPLIANCE</b>": "<b>COMPLIANCE</b>",
        "You agree to comply with all local laws regarding online\nconduct and acceptable content. In addition, you must abide by Skins Monster's\npolicies as stated in the Agreement as well as all other operating rules,\npolicies (including our Privacy Policy), and procedures that may be published\nfrom time to time by Skins Monster in or via the Services, each of which is\nincorporated herein by reference, and each of which may be updated by Skins\nMonster from time to time without notice to you.":
          "You agree to comply with all local laws regarding online\nconduct and acceptable content. In addition, you must abide by Skins Monster's\npolicies as stated in the Agreement as well as all other operating rules,\npolicies (including our Privacy Policy), and procedures that may be published\nfrom time to time by Skins Monster in or via the Services, each of which is\nincorporated herein by reference, and each of which may be updated by Skins\nMonster from time to time without notice to you.",
        "In addition, some services offered by Skins Monster may be\nsubject to additional terms and conditions promulgated by Skins Monster from\ntime to time; your use of such services is subject to those additional terms\nand conditions, which are incorporated into this Agreement by this reference.":
          "In addition, some services offered by Skins Monster may be\nsubject to additional terms and conditions promulgated by Skins Monster from\ntime to time; your use of such services is subject to those additional terms\nand conditions, which are incorporated into this Agreement by this reference.",
        "<b>LOGIN INFORMATION</b>": "<b>LOGIN INFORMATION</b>",
        "Keep your login information secure, including username and\npassword. You are responsible for the confidentiality of your login information\nand for the security of your computer system or mobile device, and you are\nfully responsible for all activity, liability, use, fraudulent use, and damage\nresulting from your failure to maintain login information confidentiality.":
          "Keep your login information secure, including username and\npassword. You are responsible for the confidentiality of your login information\nand for the security of your computer system or mobile device, and you are\nfully responsible for all activity, liability, use, fraudulent use, and damage\nresulting from your failure to maintain login information confidentiality.",
        "You agree to immediately notify Skins Monster of any\nunauthorized use of your Account or any breach of security. You also agree that\nSkins Monster cannot and will not be liable for any loss or damage arising from\nyour failure to keep your login information secure. You agree not to reveal,\nshare, or otherwise allow others to use your login information.":
          "You agree to immediately notify Skins Monster of any\nunauthorized use of your Account or any breach of security. You also agree that\nSkins Monster cannot and will not be liable for any loss or damage arising from\nyour failure to keep your login information secure. You agree not to reveal,\nshare, or otherwise allow others to use your login information.",
        "<b>SUSPENSION AND TERMINATION OF\nACCOUNT AND SERVICES</b>":
          "<b>SUSPENSION AND TERMINATION OF\nACCOUNT AND SERVICES</b>",
        "We reserve the right to stop offering and/or supporting our\nServices or any portion thereof at any time for any reason. If this occurs,\nyour license to access or use the applicable Services will automatically\nterminate. We reserve the right to terminate any Account that has been inactive\nfor 180 days or more. We are not required to notify you in advance of any of\nthese actions or to provide you with any refunds, compensation, or any material\nor non-material benefit for discontinued or terminated Services or Accounts.":
          "We reserve the right to stop offering and/or supporting our\nServices or any portion thereof at any time for any reason. If this occurs,\nyour license to access or use the applicable Services will automatically\nterminate. We reserve the right to terminate any Account that has been inactive\nfor 180 days or more. We are not required to notify you in advance of any of\nthese actions or to provide you with any refunds, compensation, or any material\nor non-material benefit for discontinued or terminated Services or Accounts.",
        "You may choose to close your Account for any reason and at\nany time. If you choose to exercise this right, please inform Skins Monster\nthat you wish to close your Account by opening a support ticket requesting that\nyour Account be closed. You understand that if you close your Account, you may\nno longer have access to information previously associated with your Account.":
          "You may choose to close your Account for any reason and at\nany time. If you choose to exercise this right, please inform Skins Monster\nthat you wish to close your Account by opening a support ticket requesting that\nyour Account be closed. You understand that if you close your Account, you may\nno longer have access to information previously associated with your Account.",
        "3.\nPAYMENT PROCESSING": "3.\nPAYMENT PROCESSING",
        "When you provide payment information to Skins Monster or to\none of its payment processors, you represent and warrant that you are the\nauthorized user of such information, including, without limitation, the credit\ncard, PIN, key, or associated account, and you authorize Skins Monster and the\npayment processors to charge you for your purchases, subscriptions, or any\nother fees incurred by you.":
          "When you provide payment information to Skins Monster or to\none of its payment processors, you represent and warrant that you are the\nauthorized user of such information, including, without limitation, the credit\ncard, PIN, key, or associated account, and you authorize Skins Monster and the\npayment processors to charge you for your purchases, subscriptions, or any\nother fees incurred by you.",
        "Skins Monster, in its sole discretion, may inspect and verify\ndetails related to the listing sold on the platform. Users may also be asked to\ngo through additional security procedures and share additional information to\nconfirm their identity. Skins Monster reserves the right to reject any item\nthat we believe (in our sole discretion) may be fraudulent, invalid,\ninauthentic, stolen, related to any illegal activity, or otherwise pose a\nfinancial risk to us or our users.":
          "Skins Monster, in its sole discretion, may inspect and verify\ndetails related to the listing sold on the platform. Users may also be asked to\ngo through additional security procedures and share additional information to\nconfirm their identity. Skins Monster reserves the right to reject any item\nthat we believe (in our sole discretion) may be fraudulent, invalid,\ninauthentic, stolen, related to any illegal activity, or otherwise pose a\nfinancial risk to us or our users.",
        'You agree and acknowledge that payment processing services\nare provided by third parties (the "Payment Processors") and are\nsubject to the respective service agreements. By using the Services, you agree\nto be bound by the terms in this section and the Payment Services Agreement, as\nthe same may be modified by us or by the Payment Processors from time to time.':
          'You agree and acknowledge that payment processing services\nare provided by third parties (the "Payment Processors") and are\nsubject to the respective service agreements. By using the Services, you agree\nto be bound by the terms in this section and the Payment Services Agreement, as\nthe same may be modified by us or by the Payment Processors from time to time.',
        "4.\nPROHIBITED, QUESTIONABLE AND INFRINGING ITEMS AND ACTIVITIES":
          "4.\nPROHIBITED, QUESTIONABLE AND INFRINGING ITEMS AND ACTIVITIES",
        'You are solely responsible for your conduct and activities on\nand regarding Skins Monster and any and all data, text, information, usernames,\ngraphics, images, photographs, profiles, audio, video, items, and links\n(together, "User Content" or “Your Content”) that you submit, post,\nand display on Skins Monster.':
          'You are solely responsible for your conduct and activities on\nand regarding Skins Monster and any and all data, text, information, usernames,\ngraphics, images, photographs, profiles, audio, video, items, and links\n(together, "User Content" or “Your Content”) that you submit, post,\nand display on Skins Monster.',
        "<b>RESTRICTED ACTIVITIES</b>": "<b>RESTRICTED ACTIVITIES</b>",
        "Your Content and your use of Skins Monster shall not:":
          "Your Content and your use of Skins Monster shall not:",
        "●      Be false, inaccurate, or\nmisleading": "●      Be false, inaccurate, or\nmisleading",
        "●      Be fraudulent or involve the\nsale of illegal, counterfeit, or stolen items":
          "●      Be fraudulent or involve the\nsale of illegal, counterfeit, or stolen items",
        "●      Violate this Agreement, any\npolicy or community guidelines, or any applicable law, statute, ordinance, or\nregulation":
          "●      Violate this Agreement, any\npolicy or community guidelines, or any applicable law, statute, ordinance, or\nregulation",
        "●      Violate any legal or\ncontractual obligations to which you may be subject":
          "●      Violate any legal or\ncontractual obligations to which you may be subject",
        "●      Contain or transmit any code\nof a destructive nature that may damage, detrimentally interfere with,\nsurreptitiously intercept or expropriate any system, data, or personal\ninformation":
          "●      Contain or transmit any code\nof a destructive nature that may damage, detrimentally interfere with,\nsurreptitiously intercept or expropriate any system, data, or personal\ninformation",
        "●      Host images not part of a\nlisting": "●      Host images not part of a\nlisting",
        "●      Modify, adapt, or hack Skins\nMonster or modify another website so as to falsely imply that it is associated\nwith Skins Monster":
          "●      Modify, adapt, or hack Skins\nMonster or modify another website so as to falsely imply that it is associated\nwith Skins Monster",
        "Furthermore, you may not list any item on Skins Monster (or\nconsummate any transaction that was initiated using Skins Monster's service)\nthat could cause Skins Monster to violate any applicable law, statute,\nordinance, or regulation, or that violates the Terms of Use.":
          "Furthermore, you may not list any item on Skins Monster (or\nconsummate any transaction that was initiated using Skins Monster's service)\nthat could cause Skins Monster to violate any applicable law, statute,\nordinance, or regulation, or that violates the Terms of Use.",
        "5.\nSKINS MONSTER'S INTELLECTUAL PROPERTY": "5.\nSKINS MONSTER'S INTELLECTUAL PROPERTY",
        "All rights, title, and interest in and to the Services\n(including the related software and media), the design of the Services and\nassociated content including text, scripts, graphics, interactive features, and\nthe trademarks, service marks, and logos contained therein (collectively,\n“Skins Monster Property”) are owned by or licensed to Skins Monster, subject to\ncopyright and other intellectual property rights under U.S. and other\ncountries' laws and international conventions. Except as expressly provided in\nthe Terms, Skins Monster does not grant any express or implied rights to use\nSkins Monster Property.":
          "All rights, title, and interest in and to the Services\n(including the related software and media), the design of the Services and\nassociated content including text, scripts, graphics, interactive features, and\nthe trademarks, service marks, and logos contained therein (collectively,\n“Skins Monster Property”) are owned by or licensed to Skins Monster, subject to\ncopyright and other intellectual property rights under U.S. and other\ncountries' laws and international conventions. Except as expressly provided in\nthe Terms, Skins Monster does not grant any express or implied rights to use\nSkins Monster Property.",
        "You are hereby granted a limited, nonexclusive,\nnon-sublicensable, and non-transferable license to access and use the Skins\nMonster Property only in connection with the usage of the Services in\naccordance with these Terms. Any use of Skins Monster Property other than as\nspecifically authorized in the Terms is prohibited and will terminate the\nlicense to use the Services. Notwithstanding anything to the contrary herein,\nyou acknowledge and agree that you shall have no ownership or other property\ninterest in the Services and you further acknowledge and agree that all rights\nin and to the Account and any related content (including Virtual Items whether\nearned or purchased) in the Services are and shall be the property of and owned\nby Skins Monster or its licensors. You agree not to move or amend any\nproprietary notices or other ownership information from the product, website,\napp, games, or any other part of the Services.":
          "You are hereby granted a limited, nonexclusive,\nnon-sublicensable, and non-transferable license to access and use the Skins\nMonster Property only in connection with the usage of the Services in\naccordance with these Terms. Any use of Skins Monster Property other than as\nspecifically authorized in the Terms is prohibited and will terminate the\nlicense to use the Services. Notwithstanding anything to the contrary herein,\nyou acknowledge and agree that you shall have no ownership or other property\ninterest in the Services and you further acknowledge and agree that all rights\nin and to the Account and any related content (including Virtual Items whether\nearned or purchased) in the Services are and shall be the property of and owned\nby Skins Monster or its licensors. You agree not to move or amend any\nproprietary notices or other ownership information from the product, website,\napp, games, or any other part of the Services.",
        "6. ACCESS AND\nINTERFERENCE": "6. ACCESS AND\nINTERFERENCE",
        "Much of the information on Skins Monster is updated on a\nreal-time basis and is proprietary or is licensed to Skins Monster by Skins\nMonster's users or third parties. You agree that you will not:":
          "Much of the information on Skins Monster is updated on a\nreal-time basis and is proprietary or is licensed to Skins Monster by Skins\nMonster's users or third parties. You agree that you will not:",
        "●      Use any robot, spider,\nscraper, data mining tools, data gathering and extraction tools, or other\nautomated means to access Skins Monster for any purpose, except as permitted by\nour APIs (which may also be subject to separate API Terms of Use).":
          "●      Use any robot, spider,\nscraper, data mining tools, data gathering and extraction tools, or other\nautomated means to access Skins Monster for any purpose, except as permitted by\nour APIs (which may also be subject to separate API Terms of Use).",
        "●      Cheat, or utilize any Bots,\nhacks, or any other unauthorized software or methods that are designed to\nmodify the experience of any Games to the detriment of fair play.":
          "●      Cheat, or utilize any Bots,\nhacks, or any other unauthorized software or methods that are designed to\nmodify the experience of any Games to the detriment of fair play.",
        "●      Take any action that imposes,\nor may impose, in Skins Monster's sole discretion, an unreasonable or\ndisproportionately large load on Skins Monster's infrastructure.":
          "●      Take any action that imposes,\nor may impose, in Skins Monster's sole discretion, an unreasonable or\ndisproportionately large load on Skins Monster's infrastructure.",
        "●      Copy, reproduce, modify,\ncreate derivative works from, distribute, or publicly display any user Content\n(except for your Content).":
          "●      Copy, reproduce, modify,\ncreate derivative works from, distribute, or publicly display any user Content\n(except for your Content).",
        "●      Distribute viruses or any\nother technologies that may harm Skins Monster or the interests or property of\nusers.":
          "●      Distribute viruses or any\nother technologies that may harm Skins Monster or the interests or property of\nusers.",
        "●      Interfere or attempt to\ninterfere with the proper working of the Services.":
          "●      Interfere or attempt to\ninterfere with the proper working of the Services.",
        "●      Circumvent any technical\nmeasures we use to provide the Services.":
          "●      Circumvent any technical\nmeasures we use to provide the Services.",
        "7. NO WARRANTY": "7. NO WARRANTY",
        "Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers provide the\nservices \"as is\" and without any warranty or condition, express,\nimplied, or statutory. Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers specifically\ndisclaim any implied warranties of title, merchantability, performance, fitness\nfor a particular purpose, and non-infringement. In addition, no advice or information\n(oral or written) obtained by you from Skins Monster shall create any warranty.\nSome states do not allow the disclaimer of implied warranties, so the foregoing\ndisclaimer may not apply to you. This warranty gives you specific legal rights\nand you may also have other legal rights that vary from state to state.":
          "Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers provide the\nservices \"as is\" and without any warranty or condition, express,\nimplied, or statutory. Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers specifically\ndisclaim any implied warranties of title, merchantability, performance, fitness\nfor a particular purpose, and non-infringement. In addition, no advice or information\n(oral or written) obtained by you from Skins Monster shall create any warranty.\nSome states do not allow the disclaimer of implied warranties, so the foregoing\ndisclaimer may not apply to you. This warranty gives you specific legal rights\nand you may also have other legal rights that vary from state to state.",
        "8. LIABILITY LIMIT": "8. LIABILITY LIMIT",
        "In no event shall Skins Monster, and (as applicable) Skins\nMonster's subsidiaries, officers, directors, employees, or Skins Monster's\nlicensors and suppliers be liable for any damages whatsoever, whether direct,\nindirect, general, special, compensatory, consequential, and/or incidental,\narising out of or relating to the conduct of you or anyone else in connection\nwith the use of the services, or this agreement, including without limitation,\nlost profits, bodily injury, emotional distress, or any special, incidental, or\nconsequential damages.":
          "In no event shall Skins Monster, and (as applicable) Skins\nMonster's subsidiaries, officers, directors, employees, or Skins Monster's\nlicensors and suppliers be liable for any damages whatsoever, whether direct,\nindirect, general, special, compensatory, consequential, and/or incidental,\narising out of or relating to the conduct of you or anyone else in connection\nwith the use of the services, or this agreement, including without limitation,\nlost profits, bodily injury, emotional distress, or any special, incidental, or\nconsequential damages.",
        "9. INDEMNITY": "9. INDEMNITY",
        "You agree to indemnify and hold Skins Monster and (as\napplicable) Skins Monster's parent, subsidiaries, affiliates, officers,\ndirectors, agents, and employees, harmless from any claim or demand, including\nreasonable attorneys' fees, made by any third party due to or arising out of\nyour breach of this agreement or the documents it incorporates by reference, or\nyour violation of any law or rights of a third party.":
          "You agree to indemnify and hold Skins Monster and (as\napplicable) Skins Monster's parent, subsidiaries, affiliates, officers,\ndirectors, agents, and employees, harmless from any claim or demand, including\nreasonable attorneys' fees, made by any third party due to or arising out of\nyour breach of this agreement or the documents it incorporates by reference, or\nyour violation of any law or rights of a third party.",
        "10. NO GUARANTEE": "10. NO GUARANTEE",
        "Skins Monster does not guarantee continuous, uninterrupted\naccess to the Service, and operation of the Service may be interfered with by\nnumerous factors outside Skins Monster's control.":
          "Skins Monster does not guarantee continuous, uninterrupted\naccess to the Service, and operation of the Service may be interfered with by\nnumerous factors outside Skins Monster's control.",
        "11.\nMODIFICATIONS TO TERMS OF SERVICE": "11.\nMODIFICATIONS TO TERMS OF SERVICE",
        "Skins Monster reserves the right to change, modify, or revise\nthe Terms of Service at any time. You should check the Terms of Service\nregularly. The changes, modifications, or revisions shall be effective\nimmediately upon being posted on the Skins Monster website. Your continued use\nof the Services following the posting of changes constitutes your acceptance of\nsuch changes.":
          "Skins Monster reserves the right to change, modify, or revise\nthe Terms of Service at any time. You should check the Terms of Service\nregularly. The changes, modifications, or revisions shall be effective\nimmediately upon being posted on the Skins Monster website. Your continued use\nof the Services following the posting of changes constitutes your acceptance of\nsuch changes.",
        "12. CONTACT\nINFORMATION": "12. CONTACT\nINFORMATION",
        'If you have any questions about these Terms, please contact\nus at: Email: <a href="mailto:support@skins.monster">support@skins.monster</a>\n':
          'If you have any questions about these Terms, please contact\nus at: Email: <a href="mailto:support@skins.monster">support@skins.monster</a>\n',
        "By using the Skins Monster Services, you agree to these Terms\nand Conditions. If you do not agree with any part of these terms, please do not\nuse our Services.":
          "By using the Skins Monster Services, you agree to these Terms\nand Conditions. If you do not agree with any part of these terms, please do not\nuse our Services.",
        "Thank you for being a part of the Skins Monster community!":
          "Thank you for being a part of the Skins Monster community!",
      },
      ru: {
        // Navigation links
        Catalog: "Каталог",
        About: "О нас",
        Reviews: "Отзывы",
        FAQ: "FAQ",
        "Cancellations & Refunds": "Отмена и возврат",
        Contacts: "Контакты",

        // Cabinet & auth links
        Favorites: "Избранное",
        Cart: "Корзина",
        Profile: "Профиль",
        Settings: "Настройки",
        Orders: "Заказы",
        Login: "Войти",
        "Log out": "Выйти",

        // Common UI
        "Nothing found": "Ничего не найдено",
        search_placeholder: "Поиск скинов",
        "No skins...": "Скинов не найдено...",
        "Added to cart": "В корзине",
        "Add to cart": "В корзину",

        // Contacts Page
        Legal: "Юридический адрес",
        Address: "Адрес",
        "Registration Number": "Регистрационный номер",
        "Reg. number": "Рег. номер",
        "Reg number": "Рег. номер",
        Email: "Email",
        Phones: "Телефоны",
        "Write to us": "Напишите нам",
        Phone: "Телефон",
        "Email*": "Email*",
        "Message*": "Сообщение*",
        Send: "Отправить",
        "By use form, you agree to the": "Используя форму, вы соглашаетесь с",
        "User Agreement and Privacy Policy": "Пользовательским соглашением и Политикой конфиденциальности",
        SUCCESS: "УСПЕШНО",
        "Your message successfully sent": "Ваше сообщение успешно отправлено",

        // Checkout & Payouts
        "Confirm order": "Подтверждение заказа",
        "items in cart": "предметов в корзине",
        "Payment method": "Способ оплаты",
        "Debit card": "Банковская карта",
        "Account balance": "Баланс аккаунта",
        Total: "Итого",
        Balance: "Баланс",
        "Low balance, You need": "Недостаточно средств, необходимо",
        "Refill the balance": "Пополнить баланс",
        "Set your Steam trade link in": "Укажите вашу Steam трейд-ссылку в",
        "Profile settings": "Настройках профиля",
        "I have read and understood my": "Я ознакомился с моим",
        "right of cancellation": "правом на отмену заказа",
        "I agree to the beginning of the contract execution before the end of the cancellation period. I am aware that I thereby lose my right of cancellation.":
          "Я согласен на начало исполнения договора до истечения срока отмены. Я знаю, что тем самым теряю право на отмену заказа.",
        "Proceed to checkout": "Перейти к оплате",
        "Terms of Service": "Условия обслуживания",
        "Privacy Policy": "Политикой конфиденциальности",
        "By clicking Proceed to Checkout, you agree to our":
          "Нажимая кнопку «Перейти к оплате», вы принимаете",
        "and that you have read our": "и подтверждаете, что ознакомились с",
        "Pay out request": "Запрос на вывод средств",
        "Coming soon...": "Будет доступно скоро...",
        "Minimum: 4€. Your balance: {balance}": "Минимум: {minimum}. Ваш баланс: {balance}",
        Amount: "Сумма",
        "Your name": "Ваше имя",
        "Your surname": "Ваша фамилия",
        "Your card number": "Номер карты",
        All: "Все",
        Confirm: "Подтвердить",
        "Your request has been successfully sent.": "Ваш запрос был успешно отправлен.",

        // Payout history page
        "Name:": "Имя:",
        "Surname:": "Фамилия:",
        "Card:": "Карта:",
        processing: "в обработке",
        failed: "ошибка",
        success: "выполнено",
        "You have no payouts": "У вас нет выплат",

        // User profile card
        "Upload cover": "Загрузить обложку",
        Remove: "Удалить",
        "Choose avatar": "Выбрать аватар",
        "Registered on": "Зарегистрирован",
        Refill: "Пополнить",
        "Pay out": "Вывести",
        "Balance:": "Баланс:",

        // Skin item details
        "Wear Range": "Диапазон износа",
        Summary: "Характеристики",
        Float: "Флоат",
        "Paint seed": "Номер паттерна (Paint seed)",
        "Paint index": "Индекс окраса (Paint index)",
        Exterior: "Качество",
        Type: "Тип",
        Weapon: "Оружие",
        Quality: "Редкость",
        Collection: "Коллекция",

        Popular: "Популярные",
        "Show more": "Показать еще",
        Support: "Поддержка",
        "Available Items": "Доступные предметы",
        "Completed Trades": "Завершенные сделки",
        "Secure payments": "Безопасные платежи",
        "Additional information": "Дополнительная информация",
        "Leave a review": "Оставить отзыв",
        "Show all": "Показать все",
        "No reviews yet": "Отзывов пока нет",
        "Various payment methods": "Различные способы оплаты",
        "Check others": "Посмотрите другие",
        "Extensive Collection of Unique Skins": "Широкий выбор уникальных скинов",
        "Our collection is constantly updated with the latest trends and unique designs, making it easy for you to customize your devices.":
          "Наша коллекция постоянно пополняется последними новинками и уникальными дизайнами, что позволяет легко персонализировать ваши устройства.",
        "Easy-to-Navigate Online Shop": "Удобный онлайн-магазин",
        "Our user-friendly interface makes browsing and selecting skins a breeze.":
          "Наш удобный интерфейс делает просмотр и выбор скинов невероятно простым.",
        "Customer Satisfaction Guarantee": "Гарантия удовлетворенности клиентов",
        "We are committed to providing excellent customer service, including prompt responses to inquiries and a fair resolution process for any issues.":
          "Мы стремимся обеспечить отличный сервис, включая быстрые ответы на запросы и справедливое решение любых вопросов.",
        "Secure and Easy Checkout Process": "Безопасная и простая оплата",
        "We provide a secure and straightforward checkout process to ensure that your personal and payment information is protected.":
          "Мы обеспечиваем безопасный и простой процесс оплаты, чтобы ваши личные и платежные данные были защищены.",
        "What is Skins Monster?": "Что такое Skins Monster?",
        "Skins Monster is your ultimate destination for premium and unique skins. We offer a wide selection of high-quality skins for various devices and platforms, helping you personalize and express your individuality and style.":
          "Skins Monster — это идеальное место для покупки премиальных и уникальных скинов. Мы предлагаем широкий выбор высококачественных скинов для различных устройств и платформ, помогая вам выразить свою индивидуальность и стиль.",
        "How do I place an order?": "Как оформить заказ?",
        "To place an order, simply browse our collection of skins, select the ones you like, and add them to your cart. Once you’re ready, proceed to checkout and follow the instructions to complete your purchase.":
          "Чтобы оформить заказ, просто просмотрите нашу коллекцию скинов, выберите понравившиеся и добавьте их в корзину. Когда будете готовы, перейдите к оплате и следуйте инструкциям для завершения покупки.",
        "How will I receive my purchased skins?": "Как я получу купленные скины?",
        "All our products are digital downloads. Once your purchase is confirmed, you will access your skins.":
          "Все наши товары являются цифровыми. Как только ваша покупка будет подтверждена, вы получите доступ к своим скинам.",
        "Can I return a digital product?": "Могу ли я вернуть цифровой товар?",
        "Due to the digital nature of our products, we generally do not accept returns. However, we are committed to ensuring customer satisfaction and will consider return requests on a case-by-case basis. Please contact us at support@skins.monster with your order number and reason for return.":
          "Из-за цифровой природы наших товаров мы обычно не принимаем возвраты. Однако мы стремимся к тому, чтобы клиенты оставались довольны, и рассматриваем запросы на возврат в индивидуальном порядке. Пожалуйста, напишите нам по адресу support@skins.monster, указав номер заказа и причину возврата.",
        "What if I made an accidental purchase?": "Что делать, если я совершил покупку случайно?",
        "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases. Please ensure that you review your order carefully before completing the purchase.":
          "Ответственность за подтверждение покупки перед оплатой лежит на покупателе. Мы не предлагаем возврат средств за случайные покупки. Пожалуйста, внимательно проверяйте ваш заказ перед завершением покупки.",
        "How do I contact customer support?": "Как связаться со службой поддержки?",
        "If you have any issues with your purchase or have questions about our products, please contact our customer support team at support@skins.monster We are here to help and will do our best to resolve any concerns you may have.":
          "Если у вас возникли проблемы с покупкой или есть вопросы о наших продуктах, свяжитесь с нашей службой поддержки по адресу support@skins.monster. Мы здесь, чтобы помочь, и сделаем все возможное, чтобы решить любые ваши вопросы.",
        "How do I keep my account information up-to-date?":
          "Как поддерживать информацию профиля в актуальном состоянии?",
        "You can update your account information by logging into your account on our website and navigating to the account settings page. Here, you can update your personal details and ensure your information is current.":
          "Вы можете обновить информацию своего аккаунта, войдя в профиль на нашем сайте и перейдя на страницу настроек. Там вы можете обновить свои личные данные.",
        "What should I do if I forget my password?": "Что делать, если я забыл пароль?",
        'If you forget your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.':
          'If you forget your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.',
        "How do you protect my personal information?": "Как вы защищаете мою личную информацию?",
        "We take the security of your personal information seriously and implement various administrative, technical, and physical security measures to help protect your data. For more information, please read our Privacy Policy.":
          "Мы серьезно относимся к безопасности вашей личной информации и применяем различные административные, технические и физические меры безопасности для защиты ваших данных. Для получения дополнительной информации, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности.",
        "Do you have a social media presence?": "Есть ли вы в социальных сетях?",
        "Yes, you can follow us on our social media channels to stay updated with the latest news, products, and offers. Links to our social media pages can be found on our website.":
          "Да, вы можете следить за нашими каналами в социальных сетях, чтобы быть в курсе последних новостей, продуктов и предложений. Ссылки на наши страницы в социальных сетях можно найти на сайте.",

        ABOUT: "О нас",
        "Skins Monster – your ultimate destination for premium and\nunique skins. We are passionate about providing you with a wide selection of\nskins that help you express your individuality and style.":
          "Skins Monster – ваш идеальный выбор для покупки премиальных и уникальных скинов. Мы стремимся предложить вам широкий выбор скинов, которые помогут выразить вашу индивидуальность и стиль.",
        "Welcome to Skins Monster – your ultimate destination for\npremium and unique skins. We are passionate about providing you with a wide\nselection of skins that help you express your individuality and style.":
          "Добро пожаловать в Skins Monster – ваш идеальный выбор для покупки премиальных и уникальных скинов. Мы стремимся предложить вам широкий выбор скинов, которые помогут выразить вашу индивидуальность и стиль.",
        "Our Mission": "Наша миссия",
        "At Skins Monster, our mission is to offer an extensive\ncollection of high-quality skins for various devices and platforms. We believe\nthat customization is key to personal expression, and our goal is to provide\nyou with the best products to make your devices stand out.":
          "Наша миссия в Skins Monster — предложить обширную коллекцию высококачественных скинов для различных устройств и платформ. Мы верим, что кастомизация является ключом к самовыражению, и наша цель — предоставить вам лучшие продукты, чтобы ваши устройства выделялись.",
        "At Skins Monster, we are driven by our love for creativity\nand innovation. Each skin is designed with meticulous attention to detail,\nensuring that you receive a product that exceeds your expectations.":
          "В Skins Monster мы руководствуемся нашей любовью к творчеству и инновациям. Каждый скин разработан с тщательным вниманием к деталям, чтобы вы получили продукт, превосходящий ваши ожидания.",
        "We are committed to sustainability and environmentally\nfriendly practices. Our skins are made using eco-friendly materials and\nprocesses, minimizing our impact on the environment. By choosing Skins Monster,\nyou are not only enhancing your devices but also supporting a brand that values\nsustainability and responsible production.":
          "Мы привержены принципам устойчивого развития и экологической безопасности. Наши скины производятся с использованием экологически чистых материалов и процессов, что минимизирует наше воздействие на окружающую среду. Выбирая Skins Monster, вы не только улучшаете свои устройства, но и поддерживаете бренд, который ценит экологичность и ответственное производство.",
        "Our Story": "Наша история",
        "With a keen eye for design and a commitment to quality, we\nset out to create a platform where anyone can find the perfect skin for their\ndevice. Our journey began with a simple idea: to provide unique and stylish\nskins that reflect the diverse tastes and personalities of our customers.":
          "Имея тонкое чувство стиля и стремление к качеству, мы решили создать платформу, где каждый сможет найти идеальный скин для своего устройства. Наш путь начался с простой идеи: предоставить уникальные и стильные скины, отражающие разнообразные вкусы и индивидуальность наших клиентов.",
        "From the very beginning, we focused on innovation and\ncreativity, striving to offer skins that were not only aesthetically pleasing\nbut also functional and durable. Our team of designers continuously works on\ndeveloping new designs and improving our products to ensure that they meet the\nhighest standards. We believe that every device deserves a touch of\npersonalization, and we are dedicated to making that possible for everyone.":
          "С самого начала мы ориентировались на инновации и креативность, стремясь предложить скины, которые были бы не только эстетически привлекательными, но также функциональными и долговечными. Наша команда дизайнеров постоянно работает над созданием новых макетов и улучшением продукции, чтобы соответствовать самым высоким стандартам. Мы считаем, что каждое устройство заслуживает капли индивидуальности, и стремимся сделать это доступным для каждого.",
        "As we grew, we expanded our product range to include skins\nfor a variety of devices, ensuring that everyone could find something that\nsuited their needs and preferences. Our commitment to quality has never\nwavered, and we pride ourselves on delivering products that our customers can\nrely on. At Skins Monster, we understand that your devices are an extension of\nyour personality, and we are here to help you showcase that in the best\npossible way.":
          "По мере роста мы расширяли ассортимент нашей продукции, добавляя скины для самых разных устройств, чтобы каждый мог найти то, что соответствует его потребностям и предпочтениям. Наша приверженность качеству никогда не ослабевала, и мы гордимся тем, что поставляем надежную продукцию. В Skins Monster мы понимаем, что ваши гаджеты — это продолжение вашей личности, и мы здесь, чтобы помочь вам продемонстрировать это наилучшим образом.",
        "We invite you to explore our collection and find the skin\nthat speaks to you. Follow us on social media for the latest updates,\npromotions, and customer showcases. ":
          "Мы приглашаем вас изучить нашу коллекцию и найти скин, который подходит именно вам. Подписывайтесь на нас в социальных сетях, чтобы получать последние обновления, информацию об акциях и примеры работ.",
        "We are dedicated to providing you with the best possible\nsupport and ensuring your complete satisfaction.":
          "Мы стремимся предоставить вам наилучшую поддержку и обеспечить полное удовлетворение от покупки.",
        "Thank\nyou for choosing Skins Monster. We look forward to helping you express your\nstyle with our unique skins.":
          "Спасибо, что выбрали Skins Monster. Мы с нетерпением ждем возможности помочь вам выразить свой стиль с помощью наших уникальных скинов.",
        "Last Updated: July 18, 2024": "Последнее обновление: 18 июля 2024 г.",
        Introduction: "Введение",
        "At Skins Monster, we strive to ensure your complete satisfaction with our products and services. Our premium skins are carefully curated to provide you with unique and stylish options for personalizing your devices. We understand that customization is a deeply personal experience, and we want every customer to feel confident and excited about their purchase.":
          "В Skins Monster мы стремимся обеспечить ваше полное удовлетворение нашими продуктами и услугами. Наши премиальные скины тщательно отобраны, чтобы предоставить вам уникальные и стильные варианты для персонализации ваших устройств. Мы понимаем, что кастомизация — это глубоко личный опыт, и хотим, чтобы каждый клиент чувствовал себя уверенно и с радостью относился к своей покупке.",
        "Our team is dedicated to providing top-quality products that meet your highest expectations. Each skin is designed with attention to detail, ensuring that it not only looks great but also performs well, protecting your device and reflecting your personal style.":
          "Наша команда стремится предоставлять высококачественную продукцию, соответствующую вашим самым высоким ожиданиям. Каждый скин разработан с вниманием к деталям, благодаря чему он не только отлично выглядит, но и хорошо выполняет свои функции, защищая ваше устройство и отражая ваш личный стиль.",
        "We take pride in our commitment to excellence and customer satisfaction. Our customer support team is always ready to assist you with any questions or concerns you may have about our products. We believe in building lasting relationships with our customers, and your feedback is invaluable to us in improving our offerings.":
          "Мы гордимся нашим стремлением к совершенству и удовлетворению потребностей клиентов. Наша служба поддержки клиентов всегда готова помочь вам по любым вопросам или опасениям, которые могут у вас возникнуть в отношении наших продуктов. Мы верим в построение долгосрочных отношений с нашими клиентами, и ваши отзывы неоценимы для нас в улучшении наших предложений.",
        "If you are not entirely satisfied with your purchase, we are here to help. We believe in a hassle-free return and refund process, ensuring that you have a smooth and pleasant experience from start to finish. Your satisfaction is our priority, and we are committed to resolving any issues you may encounter with our products.":
          "Если вы не полностью удовлетворены своей покупкой, мы здесь, чтобы помочь. Мы верим в простой процесс возврата и возмещения средств, обеспечивая вам гладкий и приятный опыт от начала до конца. Ваше удовлетворение является нашим приоритетом, и мы стремимся решить любые проблемы, с которыми вы можете столкнуться при использовании наших продуктов.",
        "1. Cancellations": "1. Отмена заказов",
        "Eligibility for Cancellations: Due to the digital nature of our products, we generally do not accept cancellations. However, we are committed to ensuring customer satisfaction and will consider cancellation requests on a case-by-case basis. If you encounter any issues with your purchase or if the product does not meet your expectations, please reach out to us, and we will do our best to resolve the matter promptly.":
          "Право на отмену: из-за цифровой природы наших продуктов мы обычно не принимаем отмену заказов. Тем не менее, мы стремимся обеспечить удовлетворенность клиентов и будем рассматривать запросы на отмену в каждом конкретном случае. Если у вас возникнут какие-либо проблемы с покупкой или если продукт не оправдает ваших ожиданий, пожалуйста, свяжитесь с нами, и мы сделаем все возможное, чтобы оперативно решить этот вопрос.",
        'Process: To initiate a cancellation, please contact us at <a href="mailto:support@skins.monster">support@skins.monster</a> with your order number and a detailed explanation of the reason for your cancellation request. Our customer support team will review your request and provide you with further instructions. We aim to address all inquiries swiftly and fairly, ensuring that every customer feels valued and heard.':
          'Процесс: Для отмены заказа, пожалуйста, свяжитесь с нами по адресу <a href="mailto:support@skins.monster">support@skins.monster</a>, указав номер заказа и подробное объяснение причины вашего запроса. Наша служба поддержки рассмотрит ваш запрос и предоставит вам дальнейшие инструкции. Мы стремимся отвечать на все запросы быстро и справедливо, чтобы каждый клиент чувствовал себя ценным и услышанным.',
        "If your cancellation request is approved, we will guide you through the necessary steps to complete the process. Please note that each request is handled individually, and we strive to offer resolutions that best suit the specific situation. Your satisfaction is our priority, and we are dedicated to making sure you are happy with your Skins Monster experience.":
          "Если ваш запрос на отмену будет одобрен, мы поможем вам выполнить необходимые шаги для завершения процесса. Обратите внимание, что каждый запрос рассматривается индивидуально, и мы стремимся предложить решения, которые наилучшим образом соответствуют конкретной ситуации. Ваше удовлетворение является нашим приоритетом, и мы сделаем все возможное, чтобы вы остались довольны работой со Skins Monster.",
        "2. Refunds": "2. Возврат средств",
        "Processing Refunds:": "Обработка возвратов:",
        "Once we receive your return request, we will inspect it and notify you of the approval or rejection of your refund. If your request is approved, we will process the refund to your original method of payment within 7-10 business days. You will receive an email confirmation once the refund has been processed.":
          "Как только мы получим ваш запрос на возврат, мы изучим его и уведомием вас об одобрении или отклонении вашего возмещения. Если ваш запрос будет одобрен, мы проведем возврат средств на ваш первоначальный способ оплаты в течение 7-10 рабочих дней. Вы получите подтверждение по электронной почте после обработки возврата.",
        "Approved Refunds:": "Одобренные возвраты:",
        "If your return request is approved, we will initiate a refund to your original method of payment. The credit will be applied to your account within a certain number of days, depending on your card issuer's policies.":
          "Если ваш запрос на возврат будет одобрен, мы инициируем возврат средств на ваш первоначальный способ оплаты. Средства будут зачислены на ваш счет в течение определенного количества дней, в зависимости от правил банка, выпустившего вашу карту.",
        "3. Exchanges": "3. Обмен",
        "We do not offer exchanges for digital products. If you have any issues with your purchase, please contact us at support@skins.monster for assistance.":
          "Мы не предлагаем обмен цифровых продуктов. Если у вас возникли какие-либо проблемы с покупкой, пожалуйста, свяжитесь с нами по адресу support@skins.monster для получения помощи.",
        "4. Non-Refundable Circumstances": "4. Случаи, не подлежащие возврату",
        "Change of Mind:": "Изменение решения:",
        "We generally do not offer refunds for dissatisfaction due to personal preference or if you change your mind after the purchase.":
          "Мы обычно не предлагаем возврат средств в случае неудовлетворенности продуктом по личным предпочтениям или если вы передумали после совершения покупки.",
        "Accidental Purchases:": "Случайные покупки:",
        "Responsibility lies with the customer to confirm their purchase before payment. We do not offer refunds for accidental purchases.":
          "Ответственность за подтверждение покупки перед оплатой лежит на клиенте. Мы не предлагаем возврат средств за случайные покупки.",
        "5. General Conditions": "5. Общие условия",
        "Skins Monster reserves the right to modify this Returns and Refunds Policy at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.":
          "Skins Monster оставляет за собой право изменять настоящую Политику возврата и возмещения средств в любое время. Любые изменения вступают в силу немедленно после их публикации на сайте. Ваше дальнейшее использование сайта после публикации изменений означает ваше согласие с такими изменениями.",
        "6. Contact Us": "6. Контакты",
        "If you have any questions about our Returns &amp; Refunds Policy, please contact us at:":
          "Если у вас есть какие-либо вопросы о нашей Политике возврата и возмещения средств, пожалуйста, свяжитесь с нами по адресу:",
        "Email: support@skins.monster&nbsp;": "Email: support@skins.monster&nbsp;",
        "At Skins Monster, we are dedicated to maintaining the privacy and security of your personal information. By transparently communicating updates to our Privacy Policy, we aim to build and sustain your trust. We are committed to protecting your data and providing you with the resources you need to understand and exercise your privacy rights.":
          "В Skins Monster мы стремимся поддерживать конфиденциальность и безопасность вашей личной информации. Прозрачно сообщая об обновлениях нашей Политики конфиденциальности, мы стремимся укреплять и поддерживать ваше доверие. Мы стремимся защищать ваши данные и предоставлять вам ресурсы, необходимые для понимания и реализации ваших прав на конфиденциальность.",
        "Our team is always here to support you, ensuring a seamless and satisfying experience with our products. We welcome your feedback and are continually working to enhance our services and offerings. Thank you for your continued trust and engagement with Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins.":
          "Наша команда всегда готова поддержать вас, обеспечивая беспрепятственный и приятный опыт использования наших продуктов. Мы приветствуем ваши отзывы и постоянно работаем над улучшением наших услуг и предложений. Благодарим вас за доверие и сотрудничество с Skins Monster. Мы рады быть частью вашего пути по персонализации ваших устройств с помощью наших уникальных скинов.",
        Company: "Компания",
        Terms: "Правила и условия",
        Links: "Ссылки",
        "Additional Links": "Дополнительные ссылки",
        Trade: "Обмен",
        "Trade CS2 Skins": "Обмен скинов CS2",
        "Trade Dota2 Skins": "Обмен скинов Dota 2",
        "CS2 Item Sets": "Наборы предметов CS2",
        "The Italy Collection": "Коллекция «Италия»",
        "Broken Fang Agents": "Агенты «Сломанный клык»",
        "Dota2 Heros": "Герои Dota 2",
        "Templar Assassin": "Templar Assassin",
        "Legion Commander": "Legion Commander",
        "Dota2 Item Types": "Типы предметов Dota 2",
        Bundles: "Комплекты",
        Couriers: "Курьеры",
        "CS2 weapon": "Оружие CS2",
        "AK-47": "AK-47",
        G3SG1: "G3SG1",
        Nova: "Nova",
        M249: "M249",
        "Navaja Knife": "Нож наваха",
        "The Spectrum Collection": "Коллекция «Спектр»",
        "The Fracture Collection": "Коллекция «Разлом»",
        "The Gamma 2 Collection": "Коллекция «Гамма 2»",
        "The Alpha Collection": "Коллекция «Альфа»",
        "The Inferno Collection": "Коллекция «Инферно»",
        Invoker: "Invoker",
        Juggernaut: "Juggernaut",
        Pangolier: "Pangolier",
        "Sand King": "Sand King",
        "Phantom Assassin": "Phantom Assassin",
        "Dire Creeps": "Крипы Тьмы",
        "Radiant Creeps": "Крипы Света",
        "Radiant Towers": "Башни Света",
        Wards: "Варды",
        Taunts: "Насмешки",

        "Privacy policy": "Политика конфиденциальности",
        "Terms of Service": "Условия обслуживания",
        "<b>Last Updated: July 18, 2024</b>": "<b>Последнее обновление: 18 июля 2024 г.</b>",
        "<b>Introduction</b>": "<b>Введение</b>",
        'Welcome to Skins\nMonster! We are thrilled to have you as part of our community. At Skins\nMonster, we take your privacy seriously and are committed to safeguarding your\npersonal information. This Privacy Policy outlines how we collect, use,\ndisclose, and protect your personal data when you visit our website,<a href="http://www.skins.monster"> </a>or engage with us through other related\nways, including sales, marketing, and events.':
          'Добро пожаловать в Skins\nMonster! Мы рады видеть вас частью нашего сообщества. В Skins\nMonster мы серьезно относимся к вашей конфиденциальности и стремимся защищать вашу\nличную информацию. Настоящая Политика конфиденциальности описывает, как мы собираем, используем,\nраскрываем и защищаем ваши персональные данные, когда вы посещаете наш сайт,<a href="http://www.skins.monster"> </a>или взаимодействуете с нами другими связанными\nспособами, включая продажи, маркетинг и мероприятия.',
        "Our mission at Skins\nMonster is to offer an extensive collection of high-quality skins for various\ndevices and platforms. We believe that customization is key to personal\nexpression, and our goal is to provide you with the best products to make your\ndevices stand out. Our team consists of enthusiasts who are dedicated to\nrevolutionizing the way people personalize their devices. With a keen eye for\ndesign and a commitment to quality, we set out to create a platform where\nanyone can find the perfect skin for their device.":
          "Наша миссия в Skins\nMonster — предложить обширную коллекцию высококачественных скинов для различных\nустройств и платформ. Мы верим, что кастомизация является ключом к самовыражению,\nи наша цель — предоставить вам лучшие продукты, чтобы ваши устройства выделялись. Наша команда состоит из энтузиастов, которые стремятся\nреволюционизировать то, как люди персонализируют свои устройства. Обладая тонким чувством\nстиля и стремлением к качеству, мы решили создать платформу, где\nкаждый сможет найти идеальный скин для своего устройства.",
        "We understand the\nimportance of privacy and data security in the digital age. As changes to the\nlaw or our corporate processes may require an adaptation of this privacy\nstatement, we ask you to read this privacy policy regularly. The privacy policy\ncan be accessed any time under “Privacy Policy”, saved, and printed out.":
          "Мы понимаем важность\nконфиденциальности и безопасности данных в цифровую эпоху. Поскольку изменения в\nзаконодательстве или наших корпоративных процессах могут потребовать корректировки этого заявления о\nконфиденциальности, мы просим вас регулярно читать эту политику. Политика конфиденциальности\nможет быть открыта в любое время в разделе «Политика конфиденциальности», сохранена и распечатана.",
        "1.     Principles of Processing Personal Data": "1.     Принципы обработки персональных данных",
        "Personal data includes all information relating to an\nidentified or identifiable natural person. This includes information such as\nyour name, email address, IP address, or user behavior. Information that cannot\n(or only with disproportionate effort) be referred to your person, e.g., by\nanonymizing the information, is not personal data. The processing of personal\ndata (e.g., the collection, retrieval, use, storage, or transmission) always\nrequires a legal basis or your consent.":
          "Персональные данные включают в себя всю информацию, относящуюся к\nидентифицированному или идентифицируемому физическому лицу. Сюда входит такая информация, как\nваше имя, адрес электронной почты, IP-адрес или поведение пользователя. Информация, которая не может быть\nотнесена к вашей личности (или может быть отнесена только с несоразмерными усилиями), например, путем\nобезличивания информации, не является персональными данными. Обработка персональных\nданных (например, сбор, извлечение, использование, хранение или передача) всегда\nтребует законного основания или вашего согласия.",
        "Processed personal data will be deleted as soon as the\npurpose of the processing has been fulfilled and no legally prescribed\nretention obligations are to be observed.":
          "Обрабатываемые персональные данные будут удалены, как только\nцель обработки будет достигнута и больше не возникнет необходимости соблюдать установленные законом\nобязательства по их хранению.",
        "In case we process your personal data for the provision of\ncertain offers, please find below information about the specific processes, the\nscope and purpose of data processing, the legal basis for processing, and the\nrespective storage period.":
          "В случае если мы обрабатываем ваши персональные данные для предоставления\nопределенных предложений, ниже вы найдете информацию о конкретных процессах,\nобъеме и целях обработки данных, правовой основе обработки и\nсоответствующем периоде хранения.",
        "2.    Data Processing": "2.    Обработка данных",
        Website: "Веб-сайт",
        "<b>Scope and Purpose of the\nProcessing</b>": "<b>Объем и цель\nобработки</b>",
        "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services.":
          "Когда вы посещаете и используете наш веб-сайт, мы собираем только те\nперсональные данные, которые ваш браузер автоматически передает на наш сервер. Эта\nинформация временно хранится в так называемом лог-файле. Следующие\nперсональные данные регистрируются в объеме, необходимом для обеспечения работы\nфункционального веб-сайта, а также наших материалов и услуг:",
        "When you access and use our website, we only collect the\npersonal data that your browser automatically transmits to our server. This\ninformation is temporarily stored in a so-called log file. The following\npersonal data is recorded to the extent necessary for the provision of a\nfunctional website and our contents and services:":
          "Когда вы посещаете и используете наш веб-сайт, мы собираем только те\nперсональные данные, которые ваш браузер автоматически передает на наш сервер. Эта\nинформация временно хранится в так называемом лог-файле. Следующие\nперсональные данные регистрируются в объеме, необходимом для обеспечения работы\nфункционального веб-сайта, а также наших материалов и услуг:",
        "●      IP address of the requesting\ncomputer": "●      IP-адрес запрашивающего\nкомпьютера",
        "●      Date and time of access": "●      Дата и время доступа",
        "●      Name and URL of the retrieved\nfile": "●      Имя и URL-адрес полученного\nфайла",
        "●      The used browser and, if\napplicable, the operating system of your computer as well as the name of your\naccess provider":
          "●      Используемый браузер и, если\nприменимо, операционная система вашего компьютера, а также имя вашего\nпровайдера доступа",
        "●      Other similar data and\ninformation which serve to avert danger in the event of attacks on our IT\nsystems":
          "●      Другие подобные данные и\nинформация, которые служат для предотвращения опасности в случае атак на наши ИТ-системы",
        "<b>Storage Period</b>": "<b>Период хранения</b>",
        "The data subject’s personal data are deleted or blocked as\nsoon as the purpose of the storage is fulfilled. The collection of data for the\nprovision of the website and the storage of data in log files is absolutely\nnecessary for the operation of the website. Consequently, there is no\npossibility of objection for the user. Further storage may take place in\nindividual cases if this is required by law.":
          "Персональные данные субъекта данных удаляются или блокируются, как\nтолько цель хранения будет достигнута. Сбор данных для\nпредоставления веб-сайта и хранение данных в лог-файлах абсолютно\nнеобходимы для работы веб-сайта. Следовательно, у пользователя нет\nвозможности возразить против этого. Дальнейшее хранение может осуществляться в\nотдельных случаях, если это требуется по закону.",
        "3.    \nRegistration / Customer Account": "3.    \nРегистрация / Аккаунт клиента",
        "You have the possibility to register on our website by\nentering your personal data. The processed data is used to create a customized\nuser account that enables you to use certain contents and services on our\nwebsite.":
          "У вас есть возможность зарегистрироваться на нашем веб-сайте,\nвведя свои персональные данные. Обрабатываемые данные используются для создания персонализированного\nаккаунта пользователя, который позволяет вам использовать определенный контент и услуги на нашем\nсайте.",
        "We make use of your email address so that we can send you new\naccess data in case you should forget these.":
          "Мы используем ваш адрес электронной почты, чтобы иметь возможность отправить вам новые\nданные для доступа в случае, если вы их забудете.",
        "We process the following personal data for the\nregistration/customer account setup:":
          "Мы обрабатываем следующие персональные данные для\nрегистрации/создания аккаунта клиента:",
        "●      Name": "●      Имя",
        "●      Email address": "●      Адрес электронной почты",
        "●      IP address": "●      IP-адрес",
        "As soon as the registration on our website is canceled or\nmodified, the data processed during the registration process will be deleted.\nFurther storage can be carried out in individual cases if this is required by\nlaw.":
          "Как только регистрация на нашем сайте будет отменена или\nизменена, данные, обработанные в процессе регистрации, будут удалены.\nДальнейшее хранение может осуществляться в отдельных случаях, если это требуется по\nзакону.",
        "<b>Cancellation</b>": "<b>Отмена</b>",
        "You have the possibility to cancel the registration and to\nchange your personal data any time by proceeding as follows: Please use the\ncontact form to send us the data you used to register on our website (name and\nemail address) so that we can clearly identify your access authorization.":
          "У вас есть возможность отменить регистрацию и\nизменить свои персональные данные в любое время, выполнив следующие действия: Пожалуйста, используйте\nформу обратной связи, чтобы отправить нам данные, которые вы использовали для регистрации на нашем сайте (имя и\nадрес электронной почты), чтобы мы могли четко идентифицировать ваши права доступа.",
        "4.    \nPurchases and Payment": "4.    \nПокупки и оплата",
        "On our website, users can purchase digital skins. For the\ncompletion of a purchase contract, the following data, which is necessary for\nthe transaction processing, is processed by Skins Monster:":
          "На нашем сайте пользователи могут приобретать цифровые скины. Для\nзаключения договора купли-продажи Skins Monster обрабатывает следующие данные, необходимые для\nобработки транзакции:",
        "●      Address": "●      Адрес",
        "●      Date of Birth": "●      Дата рождения",
        "●      Payment information": "●      Платежная информация",
        "Your data will be transferred to payment processing partners\nas far as this is necessary for the transaction.":
          "Ваши данные будут переданы партнерам по обработке платежей\nв той мере, в какой это необходимо для проведения транзакции.",
        "5.     Data Security and Security Measures": "5.     Безопасность данных и меры безопасности",
        "We are committed to protecting your privacy and treating your\npersonal information confidentially. In order to avoid any manipulation, loss,\nor misuse of your data stored by us, we take extensive technical and\norganizational security measures that are regularly reviewed and adapted to\ntechnological progress. This includes, among other things, the use of\nrecognized encryption methods (SSL or TLS). However, we would like to point out\nthat due to the structure of the internet, it is possible.":
          "Мы стремимся защищать вашу конфиденциальность и конфиденциально относиться к вашей\nперсональной информации. Чтобы избежать любых манипуляций, потери\nили неправомерного использования ваших данных, хранящихся у нас, мы принимаем обширные технические и\nорганизационные меры безопасности, которые регулярно пересматриваются и адаптируются к\nтехнологическому прогрессу. Это включает в себя, помимо прочего, использование\nпризнанных методов шифрования (SSL или TLS). Однако мы хотели бы отметить,\nчто в силу структуры Интернета это возможно.",
        "6.     Data Retention": "6.     Хранение данных",
        "We retain your personal data only for as long as necessary to\nfulfill the purposes for which it was collected, including for the purposes of\nsatisfying any legal, accounting, or reporting requirements.":
          "Мы храним ваши персональные данные только в течение времени, необходимого для\nдостижения целей, для которых они были собраны, в том числе для целей\nудовлетворения любых юридических требований, требований бухгалтерского учета или отчетности.",
        "●      <b>Account Information:</b> We retain your account information\nas long as your account is active and a reasonable period thereafter in case\nyou decide to re-activate the Services. We also retain some of your information\nas necessary to comply with our legal obligations, resolve disputes, and\nenforce our agreements.":
          "●      <b>Информация об аккаунте:</b> Мы храним информацию о вашем аккаунте\nдо тех пор, пока ваш аккаунт активен, и в течение разумного периода времени после этого на случай,\nесли вы решите повторно активировать Услуги. Мы также сохраняем некоторую часть вашей информации\nпо мере необходимости для соблюдения наших юридических обязательств, разрешения споров и\nисполнения наших соглашений.",
        "●      <b>Contact Information:</b> If you have contacted us with a\nquery or support request, we will retain your information as long as necessary\nto resolve your query and a reasonable period thereafter in case you have\nfollow-up questions.":
          "●      <b>Контактная информация:</b> Если вы обратились к нам с\nзапросом или просьбой о поддержке, мы будем хранить вашу информацию столько времени, сколько необходимо\nдля решения вашего вопроса, и в течение разумного периода после этого на случай возникновения у вас\nпоследующих вопросов.",
        "7.     Data Security and Security Measures": "7.     Безопасность данных и меры безопасности",
        "We are committed to protecting your privacy and treating your personal information confidentially. In order to avoid any manipulation, loss, or misuse of your data stored by us, we take extensive technical and organizational security measures that are regularly reviewed and adapted to technological progress. This includes, among other things, the use of recognized encryption methods (SSL or TLS). However, we would like to point out that due to the structure of the internet, it is possible that the rules of data protection and the above-mentioned security measures may not be observed by other persons or institutions for which we are not responsible.":
          "Мы стремимся защищать вашу конфиденциальность и конфиденциально относиться к вашей персональной информации. Чтобы избежать любых манипуляций, потери или неправомерного использования ваших данных, хранящихся у нас, мы принимаем обширные технические и организационные меры безопасности, которые регулярно пересматриваются и адаптируются к технологическому прогрессу. Это включает в себя, помимо прочего, использование признанных методов шифрования (SSL или TLS). Однако мы хотели бы отметить, что из-за структуры Интернета правила защиты данных и вышеупомянутые меры безопасности могут не соблюдаться другими лицами или учреждениями, за которые мы не несем ответственности.",
        "In particular, unencrypted data - e.g., if this is done by email - can be read by third parties. We have no technical influence on this. It is the responsibility of the user to protect the data provided by him against misuse by encryption or in any other way.":
          "В частности, незашифрованные данные, например, отправленные по электронной почте, могут быть прочитаны третьими лицами. Мы не имеем на это технического влияния. Пользователь несет ответственность за защиту предоставленных им данных от неправомерного использования путем шифрования или любым другим способом.",
        "8.     Changes to This Privacy Policy": "8.     Изменения в настоящей Политике конфиденциальности",
        'We may update this Privacy Policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Revised" date, and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.':
          "Мы можем время от времени обновлять настоящую Политику конфиденциальности, чтобы отразить, например, изменения в наших методах работы или по другим операционным, юридическим или нормативным причинам. Обновленная версия будет обозначена датой обновления «Редакция», и она вступит в силу сразу после публикации. Если мы внесем существенные изменения в настоящую Политику конфиденциальности, мы можем уведомить вас об этом, разместив заметное объявление о таких изменениях или отправив вам уведомление напрямую. Мы рекомендуем вам часто просматривать настоящую Политику конфиденциальности, чтобы быть в курсе того, как мы защищаем вашу информацию.",
        "9.     Contact Us": "9.     Свяжитесь с нами",
        "If you have any questions or comments about this Privacy Policy, you may email us at support@skins.monster or contact us at:":
          "Если у вас возникли вопросы или комментарии по поводу настоящей Политики конфиденциальности, вы можете написать нам по адресу support@skins.monster или связаться с нами по адресу:",
        "Thank you for choosing Skins Monster. We are excited to be part of your journey in personalizing your devices with our unique skins. We are committed to protecting your personal information and maintaining transparency in our data handling practices. We look forward to providing you with the best customization experience possible.":
          "Благодарим вас за выбор Skins Monster. Мы рады быть частью вашего пути по персонализации ваших устройств с помощью наших уникальных скинов. Мы стремимся защищать вашу личную информацию и поддерживать прозрачность в наших методах обработки данных. Мы с нетерпением ждем возможности предоставить вам наилучший опыт кастомизации.",
        "WELCOME\nTO SKINS MONSTER!": "ДОБРО ПОЖАЛОВАТЬ\nВ SKINS MONSTER!",
        'Thanks for using our products and services (“Services”).\nPlease read these Terms and Conditions ("Agreement" or “Terms”)\ncarefully before using Skins Monster’s website, products, and any related\nservices offered by Skins Monster.':
          "Благодарим вас за использование наших продуктов и услуг («Услуги»).\nПожалуйста, внимательно прочитайте эти Правила и условия («Соглашение» или «Условия»)\nперед использованием веб-сайта, продуктов и любых связанных с ними\nуслуг, предлагаемых Skins Monster.",
        'This is a legally binding agreement, and you should read it\ncarefully. By accessing, installing, using, or otherwise engaging with our\nServices, you (the "user" or "you") agree to be bound by\nthis Agreement, including those additional terms and conditions and policies\nreferenced herein and/or available by hyperlink. This Agreement applies to all\nusers of the Services, including without limitation users who are customers,\nmerchants, or contributors of content, information, and other materials or\nservices.':
          "Это юридически обязывающее соглашение, и вам следует внимательно ознакомиться с ним.\nПолучая доступ, устанавливая, используя или иным образом взаимодействуя с нашими\nУслугами, вы («пользователь» или «вы») соглашаетесь с условиями настоящего\nСоглашения, включая дополнительные правила, условия и политики,\nупомянутые здесь и/или доступные по гиперссылке. Настоящее Соглашение применяется ко всем\nпользователям Услуг, включая, помимо прочего, пользователей, которые являются клиентами,\nпродавцами или создателями контента, информации и других материалов или\nуслуг.",
        "1.\nUSE OF SERVICES": "1.\nИСПОЛЬЗОВАНИЕ УСЛУГ",
        "<b>Skins Monster Platform</b>": "<b>Платформа Skins Monster</b>",
        "Skins Monster acts as a venue to allow users who comply with\nSkins Monster's policies to offer and buy digital skins. Skins Monster is not\ndirectly involved in the transaction between buyers and sellers. As a result,\nSkins Monster has no control over the quality, safety, morality, or legality of\nany aspect of the items listed, the truth or accuracy of the listings, the\nability of sellers to sell items, or the ability of buyers to pay for items.\nSkins Monster does not pre-screen users or the content or information provided\nby users. Skins Monster cannot ensure that a buyer or seller will actually\ncomplete a transaction.":
          "Skins Monster выступает в качестве площадки, позволяющей пользователям, соблюдающим\nправила Skins Monster, предлагать и покупать цифровые скины. Skins Monster не\nучаствует напрямую в сделках между покупателями и продавцами. В результате\nSkins Monster не контролирует качество, безопасность, моральный аспект или законность\nлюбого аспекта размещенных товаров, достоверность или точность объявлений,\nспособность продавцов продавать товары или способность покупателей оплачивать их.\nSkins Monster не проводит предварительную проверку пользователей, а также контента или информации, предоставляемых\nпользователями. Skins Monster не может гарантировать, что покупатель или продавец действительно\nзавершат сделку.",
        "Consequently, Skins Monster does not transfer legal ownership\nof items from the seller to the buyer. Skins Monster cannot guarantee the true\nidentity, age, and nationality of a user. Skins Monster encourages you to\ncommunicate directly with potential transaction partners through the tools\navailable on the platform.":
          "Следовательно, Skins Monster не передает законное право собственности\nна предметы от продавца к покупателю. Skins Monster не может гарантировать подлинность\nличности, возраст и гражданство пользователя. Skins Monster рекомендует вам\nобщаться напрямую с потенциальными партнерами по сделке с помощью инструментов,\nдоступных на платформе.",
        "You agree that Skins Monster is a venue and as such, Skins\nMonster is not responsible or liable for any content, for example, data, text,\ninformation, usernames, graphics, images, photographs, profiles, audio, video,\nitems, and links posted by you, other users, or outside parties on Skins\nMonster. You use Skins Monster at your own risk.":
          "Вы соглашаетесь с тем, что Skins Monster является торговой площадкой, и поэтому Skins\nMonster не несет ответственности за любой контент, например данные, текст,\nинформацию, имена пользователей, графику, изображения, фотографии, профили, аудио, видео,\nпредметы и ссылки, размещенные вами, другими пользователями или третьими лицами на Skins\nMonster. Вы используете Skins Monster на свой страх и риск.",
        "2.\nACCOUNT AND MEMBERSHIP ELIGIBILITY": "2.\nТРЕБОВАНИЯ К АККАУНТУ И УЧАСТИЮ",
        "When you access or use the Services from Skins Monster, you\ncreate an account with us (“Account”). You are responsible for all use of the\nServices and activity related to your Account, including all transactions and\npayments associated with that Account. You agree to maintain accurate,\ncomplete, and up-to-date information in your Account. Please see the provisions\nin our Privacy Policy that describe how you can keep your personal information\nup-to-date.":
          "Когда вы получаете доступ или используете Услуги Skins Monster, вы\nсоздаете у нас аккаунт («Аккаунт»). Вы несете ответственность за любое использование\nУслуг и действия, связанные с вашим Аккаунтом, включая все транзакции и\nплатежи, связанные с этим Аккаунтом. Вы соглашаетесь поддерживать точную,\nполную и актуальную информацию в своем Аккаунте. Пожалуйста, ознакомьтесь с положениями\nнашей Политики конфиденциальности, в которых описывается, как вы можете поддерживать личную информацию\nв актуальном состоянии.",
        "<b>AGE</b>": "<b>ВОЗРАСТ</b>",
        "The Services are intended for, and may only be used by,\nindividuals who are 18 years and older who can form legally binding contracts\nunder applicable law. In all events and under all circumstances, the Services\nshall not be used by individuals who are under 13 years old.":
          "Услуги предназначены и могут использоваться только\nлицами, достигшими 18 лет и старше, которые могут заключать юридически обязывающие договоры\nв соответствии с применимым законодательством. Ни при каких обстоятельствах\nУслуги не должны использоваться лицами младше 13 лет.",
        "By using the Services, you represent and warrant that you\nmeet the above criteria, and that all registration information you submit is\naccurate and truthful. Skins Monster may verify the age of the account owner.\nAs a part of the verification process, Skins Monster may require the account\nowner to provide additional identification information.":
          "Используя Услуги, вы заявляете и гарантируете, что\nсоответствуете вышеуказанным критериям, и что вся представленная вами регистрационная информация\nявляется точной и правдивой. Skins Monster может проверить возраст владельца аккаунта.\nВ рамках процесса проверки Skins Monster может потребовать от владельца аккаунта\nпредоставить дополнительную идентификационную информацию.",
        "Skins Monster may, in its sole discretion, refuse to offer\naccess to or use of the Services to any person or entity, or change its\neligibility criteria at any time.":
          "Skins Monster может по своему собственному усмотрению отказать в предоставлении\nдоступа к Услугам или их использовании любому физическому или юридическому лицу, либо изменить критерии\nотбора в любое время.",
        "<b>COMPLIANCE</b>": "<b>СОБЛЮДЕНИЕ ПРАВИЛ</b>",
        "You agree to comply with all local laws regarding online\nconduct and acceptable content. In addition, you must abide by Skins Monster's\npolicies as stated in the Agreement as well as all other operating rules,\npolicies (including our Privacy Policy), and procedures that may be published\nfrom time to time by Skins Monster in or via the Services, each of which is\nincorporated herein by reference, and each of which may be updated by Skins\nMonster from time to time without notice to you.":
          "Вы соглашаетесь соблюдать все местные законы, касающиеся поведения в сети\nи приемлемого контента. Кроме того, вы должны соблюдать правила Skins Monster,\nизложенные в Соглашении, а также все другие операционные правила,\nполитики (включая нашу Политику конфиденциальности) и процедуры, которые могут периодически публиковаться\nSkins Monster в рамках Услуг или через них, каждое из которых включено сюда\nпосредством ссылки и каждое из которых может обновляться Skins\nMonster время от времени без предварительного уведомления.",
        "In addition, some services offered by Skins Monster may be\nsubject to additional terms and conditions promulgated by Skins Monster from\ntime to time; your use of such services is subject to those additional terms\nand conditions, which are incorporated into this Agreement by this reference.":
          "Кроме того, на некоторые услуги, предлагаемые Skins Monster, могут\nраспространяться дополнительные условия, устанавливаемые Skins Monster время от\nвремени; использование вами таких услуг регулируется этими дополнительными условиями\nи правилами, которые включены в настоящее Соглашение посредством этой ссылки.",
        "<b>LOGIN INFORMATION</b>": "<b>ДАННЫЕ ДЛЯ ВХОДА</b>",
        "Keep your login information secure, including username and\npassword. You are responsible for the confidentiality of your login information\nand for the security of your computer system or mobile device, and you are\nfully responsible for all activity, liability, use, fraudulent use, and damage\nresulting from your failure to maintain login information confidentiality.":
          "Храните свои данные для входа в безопасности, включая имя пользователя и\nпароль. Вы несете ответственность за конфиденциальность ваших данных для входа\nи за безопасность вашей компьютерной системы или мобильного устройства, а также вы несете\nполную ответственность за все действия, обязательства, использование, мошенническое использование и ущерб,\nвозникшие в результате несоблюдения вами конфиденциальности учетных данных.",
        "You agree to immediately notify Skins Monster of any\nunauthorized use of your Account or any breach of security. You also agree that\nSkins Monster cannot and will not be liable for any loss or damage arising from\nyour failure to keep your login information secure. You agree not to reveal,\nshare, or otherwise allow others to use your login information.":
          "Вы соглашаетесь немедленно уведомить Skins Monster о любом\nнесанкционированном использовании вашего Аккаунта или любом нарушении безопасности. Вы также соглашаетесь с тем,\nчто Skins Monster не может и не будет нести ответственность за любые убытки или ущерб, возникшие в результате\nнеспособности обеспечить безопасность ваших данных для входа. Вы соглашаетесь не раскрывать,\nне передавать и иным образом не разрешать другим использовать ваши учетные данные.",
        "<b>SUSPENSION AND TERMINATION OF\nACCOUNT AND SERVICES</b>":
          "<b>БЛОКИРОВКА И УДАЛЕНИЕ\nАККАУНТА И УСЛУГ</b>",
        "We reserve the right to stop offering and/or supporting our\nServices or any portion thereof at any time for any reason. If this occurs,\nyour license to access or use the applicable Services will automatically\nterminate. We reserve the right to terminate any Account that has been inactive\nfor 180 days or more. We are not required to notify you in advance of any of\nthese actions or to provide you with any refunds, compensation, or any material\nor non-material benefit for discontinued or terminated Services or Accounts.":
          "Мы оставляем за собой право прекратить предложение и/или поддержку наших\nУслуг или любой их части в любое время по любой причине. Если это произойдет,\nваша лицензия на доступ или использование соответствующих Услуг будет автоматически\nаннулирована. Мы оставляем за собой право удалить любой Аккаунт, который был неактивен\nв течение 180 дней или более. Мы не обязаны уведомлять вас заранее о любых из\nэтих действий или предоставлять вам какие-либо возмещения, компенсации или любые материальные\nили нематериальные выгоды за прекращенные Услуги или удаленные Аккаунты.",
        "You may choose to close your Account for any reason and at\nany time. If you choose to exercise this right, please inform Skins Monster\nthat you wish to close your Account by opening a support ticket requesting that\nyour Account be closed. You understand that if you close your Account, you may\nno longer have access to information previously associated with your Account.":
          "Вы можете закрыть свой Аккаунт по любой причине и в\nлюбое время. Если вы решите воспользоваться этим правом, пожалуйста, сообщите Skins Monster\nо том, что вы хотите закрыть свой Аккаунт, создав тикет в службу поддержки с соответствующим запросом.\nВы понимаете, что если вы закроете свой Аккаунт, у вас больше не будет\nдоступа к информации, ранее связанной с вашим Аккаунтом.",
        "3.\nPAYMENT PROCESSING": "3.\nОБРАБОТКА ПЛАТЕЖЕЙ",
        "When you provide payment information to Skins Monster or to\none of its payment processors, you represent and warrant that you are the\nauthorized user of such information, including, without limitation, the credit\ncard, PIN, key, or associated account, and you authorize Skins Monster and the\npayment processors to charge you for your purchases, subscriptions, or any\nother fees incurred by you.":
          "Когда вы предоставляете платежную информацию Skins Monster или одному\nиз ее платежных процессоров, вы заявляете и гарантируете, что являетесь\nавторизованным пользователем этой информации, включая, помимо прочего, кредитную\nкарту, PIN-код, ключ или связанный аккаунт, и вы разрешаете Skins Monster и\nплатежным процессорам списывать средства за ваши покупки, подписки или любые\nдругие сборы, понесенные вами.",
        "Skins Monster, in its sole discretion, may inspect and verify\ndetails related to the listing sold on the platform. Users may also be asked to\ngo through additional security procedures and share additional information to\nconfirm their identity. Skins Monster reserves the right to reject any item\nthat we believe (in our sole discretion) may be fraudulent, invalid,\ninauthentic, stolen, related to any illegal activity, or otherwise pose a\nfinancial risk to us or our users.":
          "Skins Monster по своему собственному усмотрению может проверять детали,\nсвязанные с товарами, продаваемыми на платформе. Пользователям также может быть предложено\nпройти дополнительные процедуры безопасности и предоставить дополнительную информацию для\nподтверждения их личности. Skins Monster оставляет за собой право отклонить любой предмет,\nкоторый, по нашему мнению (на наше собственное усмотрению), может быть мошенническим, недействительным,\nнеоригинальным, украденным, связанным с любой незаконной деятельностью или иным образом представлять\nфинансовый риск для нас или наших пользователей.",
        'You agree and acknowledge that payment processing services\nare provided by third parties (the "Payment Processors") and are\nsubject to the respective service agreements. By using the Services, you agree\nto be bound by the terms in this section and the Payment Services Agreement, as\nthe same may be modified by us or by the Payment Processors from time to time.':
          "Вы соглашаетесь и подтверждаете, что услуги по обработке платежей\nпредоставляются третьими лицами («Платежные процессоры») и регулируются\nсоответствующими сервисными соглашениями. Используя Услуги, вы соглашаетесь\nсоблюдать условия этого раздела и Соглашения об оказании платежных услуг, так как\nони могут периодически изменяться нами или Платежными процессорами.",
        "4.\nPROHIBITED, QUESTIONABLE AND INFRINGING ITEMS AND ACTIVITIES":
          "4.\nЗАПРЕЩЕННЫЕ И СОМНИТЕЛЬНЫЕ ТОВАРЫ И ДЕЯТЕЛЬНОСТЬ",
        'You are solely responsible for your conduct and activities on\nand regarding Skins Monster and any and all data, text, information, usernames,\ngraphics, images, photographs, profiles, audio, video, items, and links\n(together, "User Content" or “Your Content”) that you submit, post,\nand display on Skins Monster.':
          "Вы несете единоличную ответственность за свое поведение и действия на\nи в отношении Skins Monster, а также за любые данные, текст, информацию, имена пользователей,\nграфику, изображения, фотографии, профили, аудио, видео, предметы и ссылки\n(вместе именуемые «Пользовательский контент» или «Ваш контент»), которые вы отправляете, размещаете\nи отображаете на Skins Monster.",
        "<b>RESTRICTED ACTIVITIES</b>": "<b>ОГРАНИЧЕННАЯ ДЕЯТЕЛЬНОСТЬ</b>",
        "Your Content and your use of Skins Monster shall not:":
          "Ваш Контент и использование вами Skins Monster не должны:",
        "●      Be false, inaccurate, or\nmisleading":
          "●      Быть ложными, неточными или\nвводящими в заблуждение",
        "●      Be fraudulent or involve the\nsale of illegal, counterfeit, or stolen items":
          "●      Быть мошенническими или включать\nпродажу незаконных, контрафактных или украденных предметов",
        "●      Violate this Agreement, any\npolicy or community guidelines, or any applicable law, statute, ordinance, or\nregulation":
          "●      Нарушать настоящее Соглашение, любые\nправила или рекомендации сообщества, а также любые применимые законы, статуты, постановления или\nпредписания",
        "●      Violate any legal or\ncontractual obligations to which you may be subject":
          "●      Нарушать любые юридические или\nдоговорные обязательства, которым вы можете подчиняться",
        "●      Contain or transmit any code\nof a destructive nature that may damage, detrimentally interfere with,\nsurreptitiously intercept or expropriate any system, data, or personal\ninformation":
          "●      Содержать или передавать любой код\nдеструктивного характера, который может повредить, пагубно вмешаться в работу,\nтайно перехватить или экспроприировать любую систему, данные или личную\nинформацию",
        "●      Host images not part of a\nlisting":
          "●      Размещать изображения, не являющиеся частью\nобъявления",
        "●      Modify, adapt, or hack Skins\nMonster or modify another website so as to falsely imply that it is associated\nwith Skins Monster":
          "●      Модифицировать, адаптировать или взламывать Skins\nMonster или изменять другой веб-сайт таким образом, чтобы ложно подразумевать его связь\nс Skins Monster",
        "Furthermore, you may not list any item on Skins Monster (or\nconsummate any transaction that was initiated using Skins Monster's service)\nthat could cause Skins Monster to violate any applicable law, statute,\nordinance, or regulation, or that violates the Terms of Use.":
          "Кроме того, вы не можете размещать какие-либо товары на Skins Monster (или\nсовершать любые сделки, инициированные с использованием услуг Skins Monster),\nкоторые могут привести к нарушению Skins Monster любого применимого закона, устава,\nпостановления или правила, либо нарушают Условия использования.",
        "5.\nSKINS MONSTER'S INTELLECTUAL PROPERTY": "5.\nИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ SKINS MONSTER",
        "All rights, title, and interest in and to the Services\n(including the related software and media), the design of the Services and\nassociated content including text, scripts, graphics, interactive features, and\nthe trademarks, service marks, and logos contained therein (collectively,\n“Skins Monster Property”) are owned by or licensed to Skins Monster, subject to\ncopyright and other intellectual property rights under U.S. and other\ncountries' laws and international conventions. Except as expressly provided in\nthe Terms, Skins Monster does not grant any express or implied rights to use\nSkins Monster Property.":
          "Все права, право собственности и интересы в отношении Услуг\n(включая соответствующее программное обеспечение и медиа), дизайн Услуг и\nсвязанный с ними контент, включая текст, скрипты, графику, интерактивные функции,\nа также содержащиеся в них товарные знаки, знаки обслуживания и логотипы (совместно\nименуемые «Собственность Skins Monster»), принадлежат Skins Monster или предоставлены ей по лицензии, с учетом\nавторских прав и других прав интеллектуальной собственности в соответствии с законами США и других\nстран, а также международными конвенциями. За исключением случаев, прямо предусмотренных в\nУсловиях, Skins Monster не предоставляет никаких явных или подразумеваемых прав на использование\nСобственности Skins Monster.",
        "You are hereby granted a limited, nonexclusive,\nnon-sublicensable, and non-transferable license to access and use the Skins\nMonster Property only in connection with the usage of the Services in\naccordance with these Terms. Any use of Skins Monster Property other than as\nspecifically authorized in the Terms is prohibited and will terminate the\nlicense to use the Services. Notwithstanding anything to the contrary herein,\nyou acknowledge and agree that you shall have no ownership or other property\ninterest in the Services and you further acknowledge and agree that all rights\nin and to the Account and any related content (including Virtual Items whether\nearned or purchased) in the Services are and shall be the property of and owned\nby Skins Monster or its licensors. You agree not to move or amend any\nproprietary notices or other ownership information from the product, website,\napp, games, or any other part of the Services.":
          "Настоящим вам предоставляется ограниченная, неисключительная,\nбез права выдачи сублицензий и непередаваемая лицензия на доступ и использование Собственности Skins\nMonster только в связи с использованием Услуг в\nсоответствии с настоящими Условиями. Любое использование Собственности Skins Monster, кроме\nспециально разрешенного в Условиях, запрещено и прекращает действие\nлицензии на использование Услуг. Несмотря на любые противоположные положения в данном документе,\nвы признаете и соглашаетесь с тем, что у вас не будет права собственности или других имущественных\nинтересов в отношении Услуг, и вы далее признаете и соглашаетесь с тем, что все права\nна Аккаунт и любой связанный контент (включая виртуальные предметы, будь то\nполученные или купленные) в рамках Услуг являются и будут являться собственностью Skins Monster или ее лицензиаров. Вы соглашаетесь не перемещать и не изменять любые\nуведомления о правах собственности или другую информацию о владельцах на продукте, веб-сайте,\nприложении, играх или любой другой части Услуг.",
        "6. ACCESS AND\nINTERFERENCE": "6. ДОСТУП И ВМЕШАТЕЛЬСТВО",
        "Much of the information on Skins Monster is updated on a\nreal-time basis and is proprietary or is licensed to Skins Monster by Skins\nMonster's users or third parties. You agree that you will not:":
          "Большая часть информации на Skins Monster обновляется в\nрежиме реального времени и является конфиденциальной или предоставлена Skins Monster по лицензии пользователями Skins\nMonster или третьими лицами. Вы соглашаетесь, что не будете:",
        "●      Use any robot, spider,\nscraper, data mining tools, data gathering and extraction tools, or other\nautomated means to access Skins Monster for any purpose, except as permitted by\nour APIs (which may also be subject to separate API Terms of Use).":
          "●      Использовать роботов, пауков,\nскрейперы, инструменты интеллектуального анализа данных, сбора и извлечения данных или другие\nавтоматические средства для доступа к Skins Monster в любых целях, за исключением случаев, разрешенных\nнашими API (которые также могут регулироваться отдельными Условиями использования API).",
        "●      Cheat, or utilize any Bots,\nhacks, or any other unauthorized software or methods that are designed to\nmodify the experience of any Games to the detriment of fair play.":
          "●      Использовать читы, ботов,\nхаки или любое другое несанкционированное программное обеспечение или методы, предназначенные для\nизменения игрового процесса в ущерб честной игре.",
        "●      Take any action that imposes,\nor may impose, in Skins Monster's sole discretion, an unreasonable or\ndisproportionately large load on Skins Monster's infrastructure.":
          "●      Предпринимать любые действия, которые создают\nили могут создать, по собственному усмотрению Skins Monster, необоснованную или\nнесоразмерно большую нагрузку на инфраструктуру Skins Monster.",
        "●      Copy, reproduce, modify,\ncreate derivative works from, distribute, or publicly display any user Content\n(except for your Content).":
          "●      Копировать, воспроизводить, изменять,\nсоздавать производные работы, распространять или публично отображать любой Пользовательский контент\n(за исключением Вашего контента).",
        "●      Distribute viruses or any\nother technologies that may harm Skins Monster or the interests or property of\nusers.":
          "●      Распространять вирусы или любые\nдругие технологии, которые могут нанести вред Skins Monster либо интересам или собственности\nпользователей.",
        "●      Interfere or attempt to\ninterfere with the proper working of the Services.":
          "●      Вмешиваться или пытаться\nвмешаться в надлежащую работу Услуг.",
        "●      Circumvent any technical\nmeasures we use to provide the Services.":
          "●      Обходить любые технические\nмеры, которые мы используем для предоставления Услуг.",
        "7. NO WARRANTY": "7. ОТКАЗ ОТ ГАРАНТИЙ",
        "Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers provide the\nservices \"as is\" and without any warranty or condition, express,\nimplied, or statutory. Skins Monster, Skins Monster's subsidiaries, officers,\ndirectors, employees, and Skins Monster's licensors and suppliers specifically\ndisclaim any implied warranties of title, merchantability, performance, fitness\nfor a particular purpose, and non-infringement. In addition, no advice or information\n(oral or written) obtained by you from Skins Monster shall create any warranty.\nSome states do not allow the disclaimer of implied warranties, so the foregoing\ndisclaimer may not apply to you. This warranty gives you specific legal rights\nand you may also have other legal rights that vary from state to state.":
          "Skins Monster, дочерние компании, должностные лица,\nдиректора, сотрудники, а также лицензиары и поставщики Skins Monster предоставляют\nуслуги «как есть» и без каких-либо гарантий или условий, явных,\nподразумеваемых или установленных законом. Skins Monster, дочерние компании, должностные лица,\nдиректора, сотрудники, а также лицензиары и поставщики Skins Monster прямо\nотказываются от любых подразумеваемых гарантий права собственности, товарного состояния, производительности, пригодности\nдля конкретной цели и ненарушения прав. Кроме того, никакие советы или информация\n(устные или письменные), полученные вами от Skins Monster, не создают никаких гарантий.\nВ некоторых юрисдикциях не допускается отказ от подразумеваемых гарантий, поэтому вышеуказанный\nотказ может не относиться к вам. Эта гарантия дает вам определенные юридические права,\nи вы также можете иметь другие юридические права, которые варьируются в зависимости от страны или штата.",
        "8. LIABILITY LIMIT": "8. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ",
        "In no event shall Skins Monster, and (as applicable) Skins\nMonster's subsidiaries, officers, directors, employees, or Skins Monster's\nlicensors and suppliers be liable for any damages whatsoever, whether direct,\nindirect, general, special, compensatory, consequential, and/or incidental,\narising out of or relating to the conduct of you or anyone else in connection\nwith the use of the services, or this agreement, including without limitation,\nlost profits, bodily injury, emotional distress, or any special, incidental, or\nconsequential damages.":
          "Ни при каких обстоятельствах Skins Monster и (в зависимости от обстоятельств)\nдочерние компании, должностные лица, директора, сотрудники или лицензиары и поставщики Skins Monster\nне несут ответственности за любые убытки, будь то прямые,\nкосвенные, общие, специальные, компенсационные, побочные и/или случайные,\nвозникающие в результате или связанные с поведением вас или кого-либо еще в связи\nс использованием услуг или настоящим Соглашением, включая, помимо прочего,\nупущенную выгоду, телесные повреждения, моральный ущерб или любые специальные, случайные или\nкосвенные убытки.",
        "9. INDEMNITY": "9. ОСВОБОЖДЕНИЕ ОТ ОТВЕТСТВЕННОСТИ",
        "You agree to indemnify and hold Skins Monster and (as\napplicable) Skins Monster's parent, subsidiaries, affiliates, officers,\ndirectors, agents, and employees, harmless from any claim or demand, including\nreasonable attorneys' fees, made by any third party due to or arising out of\nyour breach of this agreement or the documents it incorporates by reference, or\nyour violation of any law or rights of a third party.":
          "Вы соглашаетесь освободить от ответственности и оградить Skins Monster и (если\nприменимо) материнскую компанию, дочерние компании, аффилированные лица, должностных лиц,\nдиректоров, агентов и сотрудников Skins Monster от любых претензий или требований, включая\nразумные гонорары адвокатов, предъявленные любой третьей стороной в связи или в результате\nнарушения вами настоящего Соглашения или документов, которые оно включает посредством ссылки, либо\nнарушения вами любого закона или прав третьей стороны.",
        "10. NO GUARANTEE": "10. ОТСУТСТВИЕ ГАРАНТИЙ НЕПРЕРЫВНОСТИ",
        "Skins Monster does not guarantee continuous, uninterrupted\naccess to the Service, and operation of the Service may be interfered with by\nnumerous factors outside Skins Monster's control.":
          "Skins Monster не гарантирует постоянный, бесперебойный\nдоступ к Сервису, и на работу Сервиса могут влиять\nмногочисленные факторы, находящиеся вне контроля Skins Monster.",
        "11.\nMODIFICATIONS TO TERMS OF SERVICE": "11.\nИЗМЕНЕНИЯ В УСЛОВИЯХ ОБСЛУЖИВАНИЯ",
        "Skins Monster reserves the right to change, modify, or revise\nthe Terms of Service at any time. You should check the Terms of Service\nregularly. The changes, modifications, or revisions shall be effective\nimmediately upon being posted on the Skins Monster website. Your continued use\nof the Services following the posting of changes constitutes your acceptance of\nsuch changes.":
          "Skins Monster оставляет за собой право изменять, модифицировать или пересматривать\nУсловия обслуживания в любое время. Вам следует регулярно проверять Условия обслуживания.\nИзменения, модификации или пересмотр вступают в силу\nнемедленно после их публикации на веб-сайте Skins Monster. Ваше дальнейшее использование\nУслуг после публикации изменений означает ваше согласие с\nтакими изменениями.",
        "12. CONTACT\nINFORMATION": "12. КОНТАКТНАЯ\nИНФОРМАЦИЯ",
        'If you have any questions about these Terms, please contact\nus at: Email: <a href="mailto:support@skins.monster">support@skins.monster</a>\n':
          'Если у вас возникли вопросы по поводу настоящих Условий, пожалуйста, свяжитесь с\nнами по адресу: Email: <a href="mailto:support@skins.monster">support@skins.monster</a>\n',
        "By using the Skins Monster Services, you agree to these Terms\nand Conditions. If you do not agree with any part of these terms, please do not\nuse our Services.":
          "Используя Услуги Skins Monster, вы соглашаетесь с этими Правилами\nи условиями. Если вы не согласны с какой-либо частью этих условий, пожалуйста, не\nиспользуйте наши Услуги.",
        "Thank you for being a part of the Skins Monster community!":
          "Благодарим вас за то, что вы являетесь частью сообщества Skins Monster!",
      },
    },
  }),
  actions: {
    setLocale(lang) {
      if (lang === "ru" || lang === "en") {
        this.currentLocale = lang;
        const cookie = useCookie("locale", { maxAge: 60 * 60 * 24 * 365 });
        cookie.value = lang;
        if (process.client) {
          document.documentElement.lang = lang;
        }
      }
    },
    async initLocale() {
      const savedLocale = useCookie("locale").value;
      if (savedLocale === "ru" || savedLocale === "en") {
        this.currentLocale = savedLocale;
        if (process.client) {
          document.documentElement.lang = savedLocale;
        }
        useGlobalStore().initCurrency();
        return;
      }

      if (process.client) {
        try {
          const res = await fetch("https://free.freeipapi.com/api/json");
          if (res.ok) {
            const data = await res.json();
            const ruCountries = ["RU", "BY", "KZ", "UA", "AM", "AZ", "GE", "KG", "MD", "TJ", "TM", "UZ"];
            if (data && data.countryCode && ruCountries.includes(data.countryCode)) {
              this.setLocale("ru");
              useGlobalStore().initCurrency();
              return;
            } else {
              this.setLocale("en");
              useGlobalStore().initCurrency();
              return;
            }
          }
        } catch (e) {
          console.error("GeoIP request failed, checking navigator.language", e);
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.toLowerCase().startsWith("ru")) {
          this.setLocale("ru");
        } else {
          this.setLocale("en");
        }
        useGlobalStore().initCurrency();
      }
    },
    t(key) {
      const dict = this.translations[this.currentLocale] || this.translations["en"];
      return dict[key] || key;
    },
  },
});
