(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    
    class Mailer {
        sendEmail( emailList: string[], toWhom: 'clients' | 'admins' ) {
            console.log('Enviando correo a los clientes', toWhom);
        }
    }
  
    class ProductBloc {
    
        loadProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    
        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    
    }
    

    const productBloc = new ProductBloc();
    const mailer = new Mailer(); 

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    
    mailer.sendEmail(['maricela@correo.com'], 'clients'); 
    
    productBloc.onAddToCart(10);

})();