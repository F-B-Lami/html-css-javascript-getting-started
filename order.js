window.addEventListener("DOMContentLoaded", event => {

    /* page loaded */


    /* get location */
    const location = document.querySelector("#location")

    /* default object */
    let locationBox = {
        lat: "unknown",
        lon: "unknown"
    };

    /* get geolocation */
    window.navigator.geolocation.getCurrentPosition(
        position => {
            /* location accessed */
            locationBox = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }

            location.value = JSON.stringify(locationBox);
        },
        error => {
            /* get error */
            location.value = JSON.stringify(locationBox);
        }
    );

    console.log(location);

    /* get order */
    const order = localStorage.getItem("order");

    if (order) {
        /* serialize */
        const pieOrder = JSON.parse(order);

        /* get pie */
        const pie = document.querySelector(".pie");

        /* get order and place in form */
        const orderInput = document.querySelector("#pie-order");
        orderInput.value = order;

        /* each child DOM */
        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");

        /* update inner text */
        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc;

        /* set image */
        const img = pie.querySelector("img");
        img.setAttribute("src", "images/" + pieOrder.id + ".png");
        img.setAttribute("alt", pieOrder.title);
    }

});