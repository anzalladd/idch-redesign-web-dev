let menu = document.getElementById("menu");
let exitMenu = document.getElementById("exit--button");
let navbarItems = document.getElementsByClassName("navbar__items");
let switcherBall = document.getElementsByClassName("button--switcher__ball");
let switcher = document.getElementById("button--switcher");
let switcherBulan = document.getElementById("switcher--bulan");
let switcherTahun = document.getElementById("switcher--tahun");
let faqList = document.getElementsByClassName("faq__list__left")[0];
let faqContentHeader = document.getElementById("faq-content-header");
let faqContentText = document.getElementById("faq-content-text");
let faqListArray = [
  {
    header: "Apa itu Server VPS (Virtual Private Server)?",
    content:
      "Server VPS atau Virtual Private Server merupakan suatu sistem yang terbagi menjadi beberapa Virtual Machines. Sehingga hal ini memungkinkan pengguna untuk dapat melakukan instal sistem operasi sendiri pada server VPS.\n\n Hal ini ibarat kamu mempunyai ruangan sendiri sehingga kamu dapat dengan bebas melakukan konfigurasi dan hal lain pada server VPS kamu. \n\n Informasi Selengkapnya : Panduan Memilih Server VPS dari IDcloudhost",
  },
  {
    header: "Apa Keuntungan Menggunakan Server VPS ?",
    content: "Lorem ipsum",
  },
  {
    header: "Apa Fasilitas atau Fitur yang Diberikan di VPS ?",
    content: "Lorem ipsum dolor",
  },
  {
    header: "Siapa yang Cocok Menggunakan Layanan Server VPS ?",
    content: "Lorem dolor si amet",
  },
  {
    header: "Bagaimana Cara Upgrade Server VPS di IDcloudhost ?",
    content: "Lorem dolor impsum",
  },
  {
    header: "Bagaimana Cara Pindah VPS ke IDcloudhost ?",
    content: "Lorem dimsump sit amet",
  },
  {
    header: "Bagaimana Jika Saya Membutuhkan Server VPS Custom ?",
    content: "Lorem dimsup sit amet",
  },
  {
    header: "Bagaimana Jika Membutuhkan Server VPS Manage ?",
    content: "Lorem lorem ipsum upsum",
  },
];
let isSwitchActive = false;
let activeFaq = 0;

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    faqContentHeader.innerText = faqListArray[activeFaq].header;
    faqContentText.innerText = faqListArray[activeFaq].content;
    // Initialize your application or run some code.
  }
};

menu.addEventListener("click", toggleNavbar);
exitMenu.addEventListener("click", toggleNavbar);
switcher.addEventListener("click", toggleSwitcher);

function toggleNavbar() {
  if (navbarItems[0].classList.contains("active")) {
    navbarItems[0].classList.remove("active");
  } else {
    navbarItems[0].classList.add("active");
  }
}

function toggleSwitcher() {
  if (!isSwitchActive) {
    switcherBall[0].classList.add("active--switcher");
    switcherTahun.classList.add("active--switcher-text");
    switcherBulan.classList.remove("active--switcher-text");
    isSwitchActive = true;
  } else {
    switcherBulan.classList.add("active--switcher-text");
    switcherTahun.classList.remove("active--switcher-text");
    isSwitchActive = false;
    switcherBall[0].classList.remove("active--switcher");
  }
}

function onClickFaqTab(param, id) {
  let childNodes = faqList.childNodes;
  faqList.childNodes.forEach((elem, index) => {
    if (elem == param) {
      childNodes[index].classList.add("active--tab");
    } else {
      if (childNodes[index].tagName == "DIV") {
        childNodes[index].classList.remove("active--tab");
      }
    }
  });
  activeFaq = id;
  faqContentHeader.innerText = faqListArray[activeFaq].header;
  faqContentText.innerText = faqListArray[activeFaq].content;
}

// List Feature

let listFeatureDetail = document.getElementsByClassName(
  "list__feature__detail"
)[0];

let listFeatureTabs = document.getElementsByClassName("list__feature__tabs")[0];

let arrayList = [
  {
    title: "Informasi",
    contents: [
      {
        title: "Pengertian VPS",
        content:
          "Server VPS (Virtual Private Server) adalah sebuah metode membagi sumber daya (resource) pada sebuah physical server menjadi beberapa Virtual Server (Virtual Machines). VPS sering juga disebut sebagai teknologi server side tentang sistem operasi dan perangkat lunak yang memungkinkan sebuah mesin dengan kapasitas besar dibagi ke beberapa virtual mesin. Tiap virtual mesin ini melayani sistem operasi dan perangkat lunak secara mandiri dan dengan konfigurasi yang cepat. Yuk berlangganan sekarang menggunakan layanan VPS Murah Indonesia dari IDCloudHost!",
      },
      {
        title: "Prosesor Terbaik dan Terhandal",
        content:
          "VPS Pro Indonesia dengan HPE Nimble Storage Adaptive Flash Arrays didukung oleh prosessor Intel(R) Xeon(R) Platinum 8176 CPU @ 2.10GHz terbaru sehingga akan membuat performa server VPS Anda akan lebih cepat, Aman, Akurat, dan mempunyai daya tahan yang tinggi. Kami dapat menjamin Server VPS anda dengan garansi uptime hingga 99.99%.",
      },
      {
        title: "Cloud System dengan HPE Storage",
        content:
          "VPS Murah Indonesia milik IDCloudHost Menggunakan Prosesor intel generasi terbaru dengan RAM dan Storage menggunakan teknologi HPE Nimble Storage Adaptive Flash Arrays maka Anda tidak perlu ragu dengan performa server yang Anda digunakan.",
      },
      {
        title: "Kebebasan Konfigurasi",
        content:
          "Anda dapat secara bebas dalam melakukan konfigurasi server untuk kebutuhan (CPU, RAM, Storage, NAS, IPs, Control Panels, add-ons) dan variasi Template untuk Deployment.",
      },
      {
        title: "Fleksibel dan Terukur",
        content:
          "Anda dapat melakukan Downgrade dan Upgrade server kapanpun diperlukan menyesuaikan kebutuhan Anda tanpa adanya syarat dan biaya tambahan",
      },
      {
        title: "Monitoring",
        content:
          "Server Anda dipantau 24/7 dari banyak serangan dan gangguan hardware yang dibantu langsung oleh tim techinical support IDcloudHost yang berpengalaman.",
      },
      {
        title: "Request Penawaran Layanan",
        content: `Anda bisa melakukan request untuk kebutuhan layanan server VPS Murah Indonesia untuk website dan aplikasi Anda di IDCloudHost. Silakan mengisi formulir kebutuhan layanan dimana nantinya informasi paket layanan Anda akan dikirimkan melalui Email / Telpon. Silakan mengisi Formulir Request Layanan IDCloudHost pada link berikut :  <a target="__blank"
                                href="https://idcloudhost.com/panduan/penawaran/">https://idcloudhost.com/panduan/penawaran/</a>
`,
      },
    ],
  },
  {
    title: "Fitur - Fitur",
    contents: [
      {
        title: "Fitur - Fitur",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ],
  },
  {
    title: "Perbandingan",
    contents: [
      {
        title: "Perbandingan",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
    ],
  },
  {
    title: "Tambahan",
    contents: [
      {
        title: "Tambahan",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32",
      },
    ],
  },
];
let activeList = 0;

function onCLickListFeature(param, id) {
  activeList = id;
  listFeatureTabs.childNodes.forEach((elem, index) => {
    if (elem == param) {
      elem.classList.add("active__tab");
    } else {
      if (elem.tagName == "DIV") {
        elem.classList.remove("active__tab");
      }
    }
  });
  listFeatureDetail.innerHTML = "";
  let stringBuilder = "";
  arrayList[id].contents.forEach((elem) => {
    stringBuilder += `
    <div class="list__feature__detail__text">
    <h3>${elem.title}</h3>
    <p>${elem.content}</p> 
    </div>`;
  });
  listFeatureDetail.innerHTML = stringBuilder;
}
