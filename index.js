window.addEventListener("DOMContentLoaded", event => {
    // read order button markup
    const buttons = document.querySelectorAll("button[data-order]");

    // identify clicked button
    buttons.forEach(button => button.addEventListener("click", event => {

        /* get active button target and parentnode */
        const activeButton = event.currentTarget;
        const parentContainer = activeButton.parentNode;

        /* build order object - dictionary*/
        const order = {
         id: activeButton.getAttribute("data-order"),
         title: parentContainer.querySelector(".title").innerText,
         price: parentContainer.querySelector(".price").innerText,
         desc: parentContainer.querySelector(".desc").innerText
        };

        /* Serialize the order */
        localStorage.setItem("order", JSON.stringify(order));

        /* Go to order.html */
        window.location.href = window.location.href.replace("pies.html", "order.html");

        console.log(order);

    }));
});