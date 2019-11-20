const QRCode = require("qrcode");

const id = decodeURIComponent(location.search.substr(1));
const url = `http://${id}.netlify.com/`;
const qrOptions = {
    type: "svg",
    color: {
        dark: "#444",
        light: "#0000"
    }
}

Object.assign(document.getElementById("url-view"), {
    href: url,
    textContent: url
})
QRCode.toString(url, qrOptions, (error, str) => {
    document.getElementById("qr-view").style.backgroundImage = `url(data:image/svg+xml,${encodeURIComponent(str)})`;
});
QRCode.toString(`https://app.netlify.com/drop/${id}`, qrOptions, (error, str) => {
    document.getElementById("qr-view2").style.backgroundImage = `url(data:image/svg+xml,${encodeURIComponent(str)})`;
});
