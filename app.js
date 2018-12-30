const text = document.querySelector(".js-text");
const submit = document.querySelector(".js-submit");

// text-success, text-danger


submit.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e.target);
});    




