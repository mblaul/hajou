class ApplicationController < ActionController::Base
  def index
    render layout: 'landing'
  end
end
