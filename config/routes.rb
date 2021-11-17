Rails.application.routes.draw do
  
  resources :comments, only: [:index, :create, :destroy, :update]
  resources :videos, only: [:index, :show, :create, :destroy]
  resources :users, only: [:create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
