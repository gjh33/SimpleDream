class HomeController < ApplicationController
  def index
    @products = Product.all
    @featured_products = Product.featured
  end
end
