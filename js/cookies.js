import { setCookie } from "./setCookie.js";

const btnCookies = document.querySelectorAll(".cookies-button");
const popUp = document.querySelector(".approv");

function getCookie(name) {
	const decodedCookies = decodeURIComponent(document.cookie);
	let value = undefined;

	const cookiesArray = decodedCookies.split(";");
	cookiesArray.forEach((cookie) => {
		cookie = cookie.split("");

		while (cookie[0] === " ") {
			cookie.shift();
		}

		cookie = cookie.join("");

		if (cookie.indexOf(name + "=") === 0) {
			value = cookie.slice(name.length + 1, cookie.length);
		}
	});

	return value;
}

function checkCookies() {
	const userDataCookie = getCookie("coockies-setting");

	if (!userDataCookie) {
		document.body.classList.add("lock");
		popUp.classList.add("active");
	} else {
		popUp.remove();
		userDataCookie === "true" ? addMetrica() : "";
	}
}

function addMetrica() {
	document.head.innerHTML += `<script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
        m[i] =
            m[i] ||
            function () {
                (m[i].a = m[i].a || []).push(arguments);
            };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) {
                return;
            }
        }
        (k = e.createElement(t)),
            (a = e.getElementsByTagName(t)[0]),
            (k.async = 1),
            (k.src = r),
            a.parentNode.insertBefore(k, a);
    })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
    );
    
    ym(95851353, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
    });
    </script>
    <noscript
    ><div>
        <img
            src="https://mc.yandex.ru/watch/95851353"
            style="position: absolute; left: -9999px"
            alt=""
        /></div
    ></noscript>
    <!-- /Yandex.Metrika counter -->
    <!-- Google Tag Manager -->
    <script>
    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-MNF3K4ZW");
    </script>
    <!-- End Google Tag Manager -->
    <!-- Google Tag Manager (noscript) -->
    <noscript
    ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MNF3K4ZW"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
    ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- Google tag (gtag.js) -->
    <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XYMCCFS40N"
    ></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    
    gtag("config", "G-XYMCCFS40N");
    </script>`;
}

function confirmAnswer(index) {
	document.body.classList.remove("lock");
	popUp.classList.remove("active");

	if (index === 2) {
		setCookie("coockies-setting", true, 365);
		addMetrica();
	}
	if (index === 1) {
		setCookie("coockies-setting", false, 365);
	}
}

btnCookies.forEach((button, index) =>
	button.addEventListener("click", () => confirmAnswer(index))
);

document.addEventListener("DOMContentLoaded", checkCookies);
