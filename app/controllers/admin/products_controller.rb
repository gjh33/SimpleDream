class Admin::ProductsController < Admin::BaseController
  def index
    @products = Product.order(:SKU)
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
