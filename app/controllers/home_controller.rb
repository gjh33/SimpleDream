class HomeController < ApplicationController
  def index
    @products = Product.all
    @featured_products = Product.featured
  end

  def about
  end

  def login
  end

  def attempt_login
    render 'login'
  end
end
