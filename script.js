// tourism started

document.addEventListener("DOMContentLoaded", function() {
    const lazyloadImages = document.querySelectorAll("img.lazy");
    let lazyloadThrottleTimeout;

    function lazyload(callback) {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(() => {
            const scrollTop = window.scrollY;

            lazyloadImages.forEach(img => {
                if (img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });

            // Check if all images are loaded
            if (Array.from(lazyloadImages).every(img => !img.classList.contains('lazy'))) {
                document.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationchange", lazyload);
                if (callback) callback();
            }
        }, 50); // Throttle timeout
    }

    function handleScroll() {
        lazyload();

        // Fade-in effect for images with id 'imgLeft1'
        document.querySelectorAll('#imgLeft1').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

        // Fade-in effect for images with id 'imgRight1'
        document.querySelectorAll('#imgRight1').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

        // Fade-in effect for images with id 'imgLeft2'
        document.querySelectorAll('#imgLeft2').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

        // Fade-in effect for images with id 'imgRight2'
        document.querySelectorAll('#imgRight2').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

        // Fade-in effect for images with id 'imgLeft3'
        document.querySelectorAll('#imgLeft3').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

        // Fade-in effect for images with id 'imgRight3'
        document.querySelectorAll('#imgRight3').forEach(image => {
            if (image.offsetTop < (window.innerHeight + window.scrollY)) {
                image.classList.add('show');
            }
        });

    }

    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationchange", lazyload);
});

// tourism ended

// katakita photo started

const container = document.querySelector('.villagaleri');
const besar = document.querySelector('.extra');
const thumbGambar = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // check apakan yang di klik adalah thumb
    if(e.target.className == "thumb") {
        besar.src = e.target.src;
        besar.classList.add('gambarFade');
        setTimeout(function(){
            besar.classList.remove('gambarFade')
        },500);

        thumbGambar.forEach(function(thumb) {
            // if( thumb.classList.contains('gambarAktif')) {
            //     thumb.classList.remove('gambarAktif');
            // }
            thumb.className ='thumb';
        });

        e.target.classList.add('gambarAktif');

    }
});

// katakita photo ended

// faq started

const elTitle1 = document.getElementById("title1");

elTitle1.addEventListener("click", () => {
  const elText1 = document.getElementById("text1");
  elText1.style.display = elText1.style.display === "block" ? "none" : "block";
  const elIcon1 = document.getElementById("icon1");
  elIcon1.src =
    elText1.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle2 = document.getElementById("title2");

elTitle2.addEventListener("click", () => {
  const elText2 = document.getElementById("text2");
  elText2.style.display = elText2.style.display === "block" ? "none" : "block";
  const elIcon2 = document.getElementById("icon2");
  elIcon2.src =
    elText2.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle3 = document.getElementById("title3");

elTitle3.addEventListener("click", () => {
  const elText3 = document.getElementById("text3");
  elText3.style.display = elText3.style.display === "block" ? "none" : "block";
  const elIcon3 = document.getElementById("icon3");
  elIcon3.src =
    elText3.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle4 = document.getElementById("title4");

elTitle4.addEventListener("click", () => {
  const elText4 = document.getElementById("text4");
  elText4.style.display = elText4.style.display === "block" ? "none" : "block";
  const elIcon4 = document.getElementById("icon4");
  elIcon4.src =
    elText4.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle5 = document.getElementById("title5");

elTitle5.addEventListener("click", () => {
  const elText5 = document.getElementById("text5");
  elText5.style.display = elText5.style.display === "block" ? "none" : "block";
  const elIcon5 = document.getElementById("icon5");
  elIcon5.src =
    elText5.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

const elTitle6 = document.getElementById("title6");

elTitle6.addEventListener("click", () => {
  const elText6 = document.getElementById("text6");
  elText6.style.display = elText6.style.display === "block" ? "none" : "block";
  const elIcon6 = document.getElementById("icon6");
  elIcon6.src =
    elText6.style.display === "block" ? "./img/minus.png" : "./img/plus.png";
});

// faq ended