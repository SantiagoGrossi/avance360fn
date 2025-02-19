if (!window.scriptEventListenerAdded) {
    window.addEventListener('scriptLoaded', (event) => {
      var mercadopago = new MercadoPago(event.detail.PublicKey); // public key
      var bricksBuilder = mercadopago.bricks();
      mercadopago.bricks().create("wallet", "wallet_container", {
        initialization: {
          preferenceId: event.detail.preferenceId, // preference id
        },
        customization: {
          texts: {
            action: 'pay',
            valueProp: 'practicality',
          },
          visual: {
            buttonBackground: 'default',
            borderRadius: '',
          },
          checkout: {
            theme: {
                elementsColor: "#5CB990",
                headerColor: "#5CB990",
            },
          },
        },
      });
    });
    window.scriptEventListenerAdded = true; // Evitar que se agregue más de una vez
  }
  