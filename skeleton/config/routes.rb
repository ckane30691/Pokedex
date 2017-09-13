root 'static_pages#root'

namespace :api, defaults: {format: :json} do
  resources :pokemon
end
