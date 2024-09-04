Rails.application.routes.draw do
  namespace :api do
    resources :gyms
  end
root "homepage#index"
get '*path', to: 'homepage#index'
end
