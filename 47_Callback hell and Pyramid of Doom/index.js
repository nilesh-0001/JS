// In this session we are gonna talk about the callback hell and Pyramids of Doom
// Callbacks

function loadscript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    alert("Loaded sript with SRC : " + src);
    callback(null, src);
  };
  script.onerror = function () {
    alert("Error Loading sript with SRC : " + src);
    callback(new Error("src got some Error"));
  };
  document.body.append(script);
}
function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello World " + src);
}

// It was called Pyramid of Doom and also called callback Hell
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function Morning(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function Morning(error, src) {
    if (error) {
      console.log(error);
      return;
    }
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function Morning(error, src) {
      if (error) {
        console.log(error);
        return;
      }
      loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function Morning(error, src) {
        if (error) {
          console.log(error);
          return;
        }
        loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function Morning(error, src) {
          if (error) {
            console.log(error);
            return;
          }
          loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function Morning(error, src) {
            if (error) {
              console.log(error);
              return;
            }
            loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function Morning(error, src) {})
          })
        })
      })
    })
  })
});

// Nilesh