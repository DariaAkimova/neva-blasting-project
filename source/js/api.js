const sendData = (onSuccess, onFail, body) => {
    fetch("form.php", {
      method: "POST",
      body,
    })
      .then((response) => {
        if (response.ok) {
          console.log ('success')
          onSuccess();
        } else {
          console.log ('fail')
          onFail();
        }
      })
      .catch(() => {
        console.log ('catch')
        onFail();
      });
  };

  
  export {sendData};