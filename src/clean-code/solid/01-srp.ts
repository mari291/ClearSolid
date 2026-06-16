(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // 1. Clase encargada ÚNICAMENTE de la base de datos (Cargar y Guardar productos)
    class ProductService {
        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    // 2. Clase encargada ÚNICAMENTE de las notificaciones por correo
    class Mailer {
        sendEmail( emailList: string[], toWhom: 'clients' | 'admins' ) {
            console.log('Enviando correo a los clientes', toWhom);
        }
    }
    
    // 3. El Bloc ahora recibe sus dependencias a través del constructor (Inyección de dependencias)
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmail(['sofia@correo.com'], 'clients');
        }
    }

  
    class CartBloc {
        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    
    
    const productService = new ProductService();
    const mailer         = new Mailer();

    const productBloc = new ProductBloc( productService, mailer );
    const cartBloc    = new CartBloc();

    // Pruebas
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);

})();