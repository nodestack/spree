//= require jquery3
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require jquery.payment
//= require spree
//= require polyfill.min
//= require fetch.umd
//= require spree/api/main
//= require lazysizes.min
//= require turbolinks
//= require_tree ./frontend

Spree.routes.api_tokens = Spree.pathFor('api_tokens')
Spree.routes.ensure_cart = Spree.pathFor('ensure_cart')
Spree.routes.api_v2_storefront_cart_apply_coupon_code = Spree.pathFor('api/v2/storefront/cart/apply_coupon_code')
Spree.routes.api_v2_storefront_cart_remove_coupon_code = Spree.pathFor('api/v2/storefront/cart/remove_coupon_code')
Spree.routes.product = function(id) { return Spree.pathFor('products/' + id) }
Spree.routes.product_related = function(id) { return Spree.routes.product(id) + '/related' }
