// Xor cryptography
const xor = {
    encode(str) {return encodeURIComponent(str.toString().split("").map((o, t) => t % 2 ? String.fromCharCode(2 ^ o.charCodeAt()) : o).join(""));},
    decode(str) {return decodeURIComponent(str).split("").map((o, e) => e % 2 ? String.fromCharCode(2 ^ o.charCodeAt()) : o).join("");}
};
// Toggle Navigation
function navToggle() {
    var b = document.getElementById("navBar");
    "navbar" === b.className ? b.className += " responsive" : b.className="navbar";
}
// Check if variable is a URL
function isURL(a) {
    try {return new URL(a), !0;}
    catch {return !1;}
}
// Page Detection Begin
try {
    var search = document.getElementById("search-bar"),
        searchprovider = `https://duckduckgo.com`,
        suggelem = document.getElementById("searchsuggestions"),
        elemadd = (a, b, c) => Object.assign(b.appendChild(document.createElement(a)), c);
    // Search Suggestions
    search.addEventListener("input", () => {
            fetch("/search/" + xor.encode(`${searchprovider}ac/?q=${search.value}`)).then((a) => a.text()).then((a) => JSON.parse(`[${a.split("\n")[5].slice(0, -1)}]`)[0]).then((a) => {
                (suggelem.innerHTML = ""), a.forEach((a) => elemadd("option", suggelem, {
                    className: "search-opt",
                    value: a.phrase
                }));
            });
        }),
        // Submission and format detection
        document.getElementById("searchform").addEventListener("submit", () => {event.preventDefault(),a=search.value,location.assign(/^(?:https?:\/\/)?\w+\.\w/.test(a)?/^(https?|ftp):/.test(a)?"/search/"+xor.encode(a)+"/":"/search/"+xor.encode("https://"+a)+"/":"/search/hvtrs8%2F-dwcidwcigm.aoo/?q="+a);});
} catch {
    // Catch Media Page
    console.log("Could not load Index elements, assuming user is on media or media frame.");
    function mailMaintainer() {window.location.href = `mailto:nullnvoid@mailfence.com?subject=Takedown Request For ${window.location.origin}`;}
    try {
        //Media Search
        document.getElementById("gSearch").addEventListener("input", () => {
            for (i = 0; i < document.getElementById("gMenu").getElementsByTagName("li").length; i++) document.getElementById("gMenu").getElementsByTagName("li")[i].style.display = -1 < document.getElementById("gMenu").getElementsByTagName("li")[i].getElementsByTagName("a")[0].innerHTML.toUpperCase().indexOf(document.getElementById("gSearch").value.toUpperCase()) ? "" : "none"
        })

    } catch {}
};

//Degenerate shit
const form = document.querySelector('form') || '';
const input = form ? form.querySelector('input') : '';
const iframe_frame = document.getElementById("iframe_frame");

function stealth() {
    iframe_frame.style.display = "initial";
    iframe_frame.setAttribute("src", "/search/gateway?url=" + input.value);
};
// Page Detection End
