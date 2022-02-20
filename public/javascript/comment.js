async function commentFormHandler(event) {
  event.preventDefault();
  console.log(sessionStorage.getItem("SessionName"));
  const brand = document
    .querySelector('textarea[name="brand-body"]')
    .value.trim();
  const price = document
    .querySelector('textarea[name="price-body"]')
    .value.trim();
  const comment = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const url = document.querySelector('textarea[name="url-body"]').value.trim();

  // const tv_id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1

  if (brand && price && comment && url) {
    const response = await fetch("/api/tv", {
      method: "POST",
      body: JSON.stringify({
        brand,
        price,
        comment,
        url,
        user_id: sessionStorage.getItem("SessionName")
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
