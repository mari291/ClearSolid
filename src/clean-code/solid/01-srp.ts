@@ -17,12 +17,15 @@
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
        }   
    }

    class notificationService {

        sendEmail() {
            // Realiza una petición para enviar un correo a los clientes
            console.log('Enviando correo a los clientes');
        }    
   
        }
    }

    class CartBloc {
@@ -35,12 +38,14 @@

    const productBloc = new ProductBloc();
    const cartBloc    = new CartBloc();
    const notify      = new notificationService();


    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    // productBloc.notifyClients();
    // productBloc.onAddToCart(10);
    cartBloc.AddToCart(10);
    notify.sendEmail();

})();