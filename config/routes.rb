Rails.application.routes.draw do
  resources :habit_entries

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  root 'application#index'

  get '/habits', to: 'habits#index'
  resources :habits do
    resources :habit_entries do
      post 'toggle_timer', to: 'habit_entries#toggle_timer'
    end
  end
end
