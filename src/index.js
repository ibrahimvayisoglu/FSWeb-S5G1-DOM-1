const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')

const navigationItems = document.querySelectorAll('nav a');
/*
navigationItems[0].textContent = siteContent['nav']['nav-item-1'];
navigationItems[0].setAttribute('class','italic');
navigationItems[1].textContent = siteContent['nav']['nav-item-2'];
navigationItems[1].setAttribute('class','italic');
navigationItems[2].textContent = siteContent['nav']['nav-item-3'];
navigationItems[2].setAttribute('class','italic');
navigationItems[3].textContent = siteContent['nav']['nav-item-4'];
navigationItems[3].setAttribute('class','italic');
navigationItems[4].textContent = siteContent['nav']['nav-item-5'];
navigationItems[4].setAttribute('class','italic');
navigationItems[5].textContent = siteContent['nav']['nav-item-6'];
navigationItems[5].setAttribute('class','italic');
navigationItems[6].textContent = siteContent['nav']['nav-item-7'];
navigationItems[6].setAttribute('class','italic');
*/
var i =1;
navigationItems.forEach ((a)=> {
  a.textContent = siteContent['nav']['nav-item-'+i];
  a.setAttribute('class','italic'); i++;
})

const logoImage = document.getElementById('logo-img');
logoImage.src = siteContent['images']['logo-img'];

var mainText = document.querySelector('.cta-text');
mainText.querySelector('h1').textContent = siteContent['cta']['h1'];
mainText.querySelector('button').textContent = siteContent['cta']['button'];

const ctaImages = document.getElementById('cta-img')
ctaImages.src = siteContent['images']['cta-img'];

const mainTexth4 =document.querySelectorAll('.main-content.top-content .text-content h4');
mainTexth4[0] = siteContent['ana-içerik']['özellikler-h4'];
mainTexth4[1] = siteContent['ana-içerik']['hakkımızda-h4'];

/* Kodlar Buradan aşağıya */