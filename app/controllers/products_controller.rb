class ProductsController < ApplicationController
  def index
    @slides = Slide.all
  end

  def show
  end
end
