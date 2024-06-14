/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PaymentsController from '#controllers/payments_controller';
import ProductsController from '#controllers/products_controller';
import router from '@adonisjs/core/services/router';

router.get('products', [ProductsController, 'show']);
router.get('products/:id', [ProductsController, 'productById']);
