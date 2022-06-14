const showAllBtn = document.getElementById("fetchAll");
const envList = document.getElementById("envList");

const renderEnv = (envListInput) => {
  console.log("render func", envListInput);
  if (envListInput.length > 0) {
    envListInput.forEach((env) => {
      const listItemText = `id:${env.id} category:${env.category}  expense: ${env.expense}`;
      //   console.log("render func", env.id);

      let li = document.createElement("li");
      li.innerHTML = listItemText;
      //   console.log("render func", listItem);

      envList.appendChild(li);
    });
  } else {
    envList.innerHTML = "<li> error yo</li>";
  }

  //   envList.innerHTML = "<li> error yo</li>";
};

showAllBtn.addEventListener("click", () => {
  fetch("/envelopes")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("error yo");
      }
    })
    // .then((res) => {
    //   renderEnv(res);
    // })
    .then((res) => {
      //   console.log(res.json());
      //   console.log(JSON(res));
      console.log(res);
      renderEnv(res);
    });
});
